var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.set('view engine','pug')
app.use(bodyParser.json())
var request = require('request');
var path = require('path');
//task1.1
app.get('/', function(req, res){
   res.send("Hello World!-akash");
});

//task1.2
app.get('/authors', function(req, res){
var arr = "";
var user_id;
var user;
var post;
var count=0;
request('https://jsonplaceholder.typicode.com/users', function (error,response,body) {
user= JSON.parse(body);

request('https://jsonplaceholder.typicode.com/posts', function (error,response,body1) {
post= JSON.parse(body1);
arr="<ul>"

for(i=0;i<user.length;i++){
   arr = arr+("<li> Name: "+user[i].name);
   user_id=user[i].id;
   count=0;
   for(j=0;j<post.length;j++){
      
      var post_id = post[j].userId;
      if(user_id==post_id){

         count+=1;
        
      }
   }
   arr = arr + (" <br>No. of Post: "+count+"</li>");

}
arr = arr+"</ul>";
res.send(arr);
})
})

});
//task1.3
app.get('/setcookie',function(req,res){
   res.cookie('name','AKASH');
   res.cookie('age','19')
   res.status(200).send('COOKIE IS SET');

});
//task1.4
app.get('/getcookies',function(req,res){
   res.status(200).send(req.cookies);
   console.log(req.cookies);
})
//task1.5
app.get('/robots.txt',function(req,res) {
   res.type('text/html').redirect('http://httpbin.org/deny');  
});
//task1.6
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/image', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
//Task1.7
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/input', function (req, res) {
   res.sendFile( __dirname + "/" + "input.html" );
});

app.post('/form', urlencodedParser, function (req, res) {
      response = {
      name:req.body.first_name,
      
   };
   console.log(res);
   res.end(JSON.stringify(response));
});


app.listen(8080,function(req,res){
	console.log("server listening on port 8080");
});
