// declara variaveis de ambiente e functions
var Usuario = require("../models/usuario");
var Usuarios = require("../models/usuario");
var HomeController = {
  index:function(request,response,next) {
    response.render('index', { title: 'Express - Usuario'});
    
  },
  usuario: function(request, response,next) {
   	var usuario = new Usuario();
    usuario.id = 2
    usuario.nome = "rosemaire_update"
    usuario.login = "rose21_update"
    usuario.senha = "122_update"
    usuario.email = "rose2_update@xxx.com"
    usuario.salvar();
    response.send('Olá usuário - version 001, isto é um teste de criação de app, padrão CMV ..., teste de funcionalidade de classe usuario!!!')


   ///--- response.render('index', { title: 'Titulo - Usuario'});
    

  	// console.log(usuario);
  	///usuario.salvar();

  }

 

 //usuarios:function(request,response,next) {
 //   response.send("Sainda da funçao :usuario e entrando na USUARIOS ??? S/N"),
 //   response.render('index', {
 //   title: 'Express-cadastro da API',
 //   Usuarios:Usuarios
 // });
 //}



};

module.exports = HomeController;