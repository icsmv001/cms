var db = require('../../config/db.js');
var Usuario = function(){
  this.id = 0 ;
  this.nome = "";
  this.login = "";
  this.senha = "";
  this.email = "";
  
  this.salvar =function () {
     if (this.nome == '') {
        console.log("[Modelo:Usuario] Nome não informado, obrigatorio..");
        return;
       }  

       if (this.login == '') {
        console.log("[Modelo:Usuario] Login não informado, obrigatorio..");
        return;
       }  

       if (this.senha == '') {
        console.log("[Modelo:Usuario] Senha não informada, obrigatorio..");
        return;
       }  

  
  	if (this.id == 0 || this.id == "" || this.id ==null || this.id == undefined) {
      
       var query ="INSERT INTO cms.usuario (nome, login, senha, email) VALUES ('"+ this.nome  + "','" + this.login + "','" + this.senha + "','" + this.email+ "'  );" ;
       db.cnn.exec(query,function(rows,err) {
       if (err != undefined) {
        console.log(" erro ao inserir dados de usuario...");
       }
       else {
        console.log(" Usuario incluido com sucesso...");
       }
     });
  	}
    else {
       // TODO atualizar na base de dados
       var query ="UPDATE usuario SET nome ='"+ this.nome + "',  login = '" + this.login + "', senha = '" + this.senha + "', email='" + this.email + "' where id= '" + this.id + "' ;"
       db.cnn.exec(query,function(rows,err) {
       if (err != undefined) {
        console.log(" erro ao atualizar dados de usuario...");
       }
       else {
        console.log(" Usuario atualizado com sucesso...");
       }
     });

    }
  };
};
module.exports = Usuario;


