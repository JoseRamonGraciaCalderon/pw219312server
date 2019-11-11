const path= require('path');
const express =require('express');
const mysql= require('mysql');
const myConnection = require('express-myconnection');
const app= express();
 

//importar rutas
const indiceRutas= require('./rutas/index.js');

//configuraciones

app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
//obtiene la direccion en la carpeta con path y a path le concateno la carpeta
app.set('views',path.join(__dirname,'vistas' ));

//middleware
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'crudnodejsmysql'

},'single'));
app.use(express.urlencoded({extended: false}));

//usamos las rutas
app.use('/',indiceRutas);

//escucha el puerto y manda el mensaje 
app.listen(app.get('port'),() =>{
	console.log('Escuchando en el puerto 3000');
});