const express = require('express');
const router = express.Router();
const crud= require ('./controllers/crud');
const conexion = require('./database/db');

router.get('/',(req,res)=>{
  
    
    conexion.query('SELECT * FROM users',(error,results)=>{
        if(error){
            throw error
        }else{
            res.render('index',{results:results});
        }
    });
});


router.get('/create',(req,res)=>{
    res.render('create');

});

//Ruta para editar los registros


//Ruta para crear registros
router.post('/save',crud.save);


module.exports = router;