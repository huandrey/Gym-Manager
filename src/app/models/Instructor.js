const db = require('../../config/db');
const { age, date } = require('../../lib/utils'); 

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM instructors`, function(err, results) {
            if (err) return console.log(err);
    
            callback(results.rows);
        })
    }, 
    create(data, callback) {
        // Inserindo os seguintes dados dentro da tabela instructors
        const query = `
            INSERT INTO instructors (
                name,
                avatar_url,
                gender,
                services,
                birth,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `
        // Associando os seguintes valores aos dados criados anteriormente
        const values = [
            data.name,
            data.avatar_url,
            data.gender,
            data.services,
            date(data.birth).iso,
            date(Date.now()).iso,
        ]

        db.query(query, values, function(err, results) {
            if(err) return console.log('database error!');
            
            callback(results.rows[0]);
        })
    
    }

}