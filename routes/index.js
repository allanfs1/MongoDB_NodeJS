var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  require("../db").findCuston(function(docs){  
  res.render('index', { title: 'Express App Apication',model:docs});
  });
 
});


/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Umbler Login:' });
});


/* Post new page. */
router.post('/new', function(req, res, next) {
  var escrita = req.body.escrita;
  var idade = req.body.idade;
  require("../db").saveCustomer(escrita,idade,function(){ res.redirect("/"); });
  //res.redirect("/?name="+ escrita+ ":" +idade);
});


//-------------------------------------------------------------------------------------------

/* GET /?login= page. */
router.get("/login", function(req, res, next) {
  /* GET home docs (arquivo do Banco de dados).*/
  require("../db").findCuston(function(docs){
  res.render('login', { title: 'Nome dos Usuarios',model:docs });
  });
 
});

//-----------------------------------------------------------------------------------------------

/* GET user page. */
router.get('/user', function(req, res, next) {
  /* GET home docs (arquivo do Banco de dados).*/
  res.render('user', { title: 'Lista de Usuarios da Loja:' });
});



/* POST user page. */
router.post('/user',function(req,res,next){
  var nome  = req.body.nome;
  var idade = req.body.idade;
  var senha = req.body.senha;
  require("../db").saveCustomer(nome,idade,senha,function(){res.redirect("/login"); })

});
//--------------------------------------------------------------------------------------------------

module.exports = router;
