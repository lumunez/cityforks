Router.configure({
  layoutTemplate: 'addLayout'
})

Router.route('/', function(){
  this.render('Home', {
    data: function(){return true}
  })
})
