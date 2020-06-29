const Instructor = require('../models/Instructor');

module.exports = {
    index: (req, res) => {
        //all(callback) = all(function())
        //callback(results.rows) = function(instructors)
        //all(callback) = all(function(instructors));
        Instructor.all(function(instructors) {
            return res.render('instructors/index', { instructors })
        })
    },
    create: (req, res) => {
        return
    },
    show: (req, res) => {
        return
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

    edit: (req, res) => {
        return
    },

    put: (req, res) => {
        const keys = Object.keys(req.body);
        
        for (key of keys) {
            if(req.body[key] === "") res.send('please, ')
        }
        return
    },

    delete: (req, res) =>{
     return   
    }
}