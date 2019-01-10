var Usuario = require("../../../app/models/usuario");

describe("O modelo de usuario", function() {
  describe("Com o atributo.", function() {
     it (" id, precisa ser valido. ", function() {
		var usuario = new Usuario();
		expect(usuario.id).toBe (0);
      });

    //
     it ("  nome, precisa ser valido. ", function() {
		var usuario = new Usuario();
		 expect(usuario.nome).toBe ("");
      });
  //


    //
     it ("  login, precisa ser valido. ", function() {
		var usuario = new Usuario();
        expect(usuario.login).toBe("");
      });
  //


    //
     it ("  senha, precisa ser valido. ", function() {
		var usuario = new Usuario();
        expect(usuario.senha).toBe("");
      });
  //


    //
     it ("  email, precisa ser valido. ", function() {
		var usuario = new Usuario();
        expect(usuario.email).toBe("");
     });
  //




	});
});



     
