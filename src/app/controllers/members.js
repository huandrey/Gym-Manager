module.exports = {
    index: (req, res) => {
        return res.render('members/index')
    },

    show: (req, res) => {
        const id = req.params.id
    },

    post: (req, res) => {
        const keys = Object.keys(req.body);
        
        for (key of keys) {
            if(req.body[key] === "") res.send('preencha tudo')
        }
        
        return res.send(req.body);
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