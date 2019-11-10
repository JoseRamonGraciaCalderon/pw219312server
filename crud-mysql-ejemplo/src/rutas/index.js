const express = require('express');
const rutas = express.Router();
rutas.get('/', (req,res) =>{
	res.send('Hola node');
});

module.exports=rutas;