const db = require('../../config/db');
const { age, date } = require('../../lib/utils'); 

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM instructors`, function(err, results) {
            if (err) throw `database error ${err}`;
    
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
            if(err) throw `database error ${err}`
                
            callback(results.rows[0]);

            // console.log(err)
            // console.log(results);
        })
    },
    find(id, callback) {
        db.query(`SELECT * FROM instructors WHERE id = $1`, [id], function(err, results) {
            if(err) throw `database error ${err}`

            callback(results.rows[0]);
        })
    },
    update(data, callback) {
        const query = `
        UPDATE instructors SET
            avatar_url=($1),
            name=($2),
            birth=($3),
            gender=($4),
            services=($5)
        WHERE id = $6
        `

        const values = [
            data.avatar_url,
            data.name,
            date(data.birth).iso,
            data.gender,
            data.services,
            data.id
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `database error ${err}`

            callback();
        })
    },
    delelte() {
    }
}