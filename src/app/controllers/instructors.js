const Instructor = require('../models/Instructor');
const { age, date } = require('../../lib/utils'); 

module.exports = {
    index: (req, res) => {
        //all(callback) = all(function())
        //callback(results.rows) = function(instructors)
        //all(callback) = all(function(instructors));
        Instructor.all(function(instructors) {
            return res.render('instructors/index', { instructors })
        })
    },
    post: (req, res) => {
        //Verificando se todos os campos do formulário estão preenchidos
        const keys = Object.keys(req.body);
        
        for (key of keys) {
            if(req.body[key] == "") 
            return res.send('please, ')
        }
        Instructor.create(req.body, function(instructor) {
            return res.redirect(`instructors/${instructor.id}`);
        })

    },
    show: (req, res) => {
        Instructor.find(req.params.id, function(instructor) {
            if (!instructor) return res.send('instructor not found');

            instructor.birth = age(instructor.birth);
            instructor.services = instructor.services.split(',');
            console.log(instructor.birth)
            //console.log(instructor.services)
            instructor.created_at = date(instructor.created_at).format;
            console.log(instructor.created_at)
            return res.render('instructors/show', { instructor });
        })
    },
    edit: (req, res) => {
        Instructor.find(req.params.id, function(instructor) {
            if (!instructor) return res.send('instructor not found');

            instructor.birth = date(instructor.birth).iso;
            
            return res.render('instructors/edit', { instructor });
    })
    },

    put: (req, res) => {
        const keys = Object.keys(req.body);
        
        for (key of keys) {
            if(req.body[key] === "") res.send('please, ')
        }
        
        Instructor.update(req.body, function() {
            return res.redirect(`instructors/${req.body.id}`);
        })

    },

    delete: (req, res) =>{
     return   
    }
}

