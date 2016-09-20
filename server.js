var express = require('express');
var morgan = require('morgan');
var path = require('path');
var articleone={
    title:'Article one by me',
    heading:'article-1',
    date :'Sept 5',
    content:`<p>
                 this is content fr first article.this is content fr first article.this is content fr first article.this is content fr first article.this is content fr first article.
             </p>`
    
    
}
functiontemplate(data)
{
    var title=data.title;
var date=data.date;
var content=data.content;
var htmltemplate =
`
<html>
     <head>
         <title>
            ($title)
         </title>
         <link  href="ui/style.css" rel=stylesheet>
         <meta name="viewport" content="width-device-width initial-scale=1" />
     </head>
     <body>
         <div class='abcd'>
         <div>
             <a href='/'>Home</a>
         </div>
         <hr/>
         <div>
             ($date)
         </div>
         <div>
             ($content)
         </div>
         <p>
             ($content)
         </p>
         </div>
     </body>
     
</html>
`;
    return htmltemplate;
}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
    res.send(functiontemplate(articleone))
});
app.get('/article-two',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
