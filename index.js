const http = require('http');
const url=require('url');
const fs=require('fs');
const home=fs.readFileSync('ka.html');
const syllabus=fs.readFileSync('./syllabus.html');
const quiz=fs.readFileSync('./quiz.html');
const ourteam=fs.readFileSync('./ourteam.html');
const hostname = '127.0.0.2';
const port = 4000;
const myserver = http.createServer((req, res) => {
  const myurl=req.url;
  console.log(req.url);
  res.setHeader('Content-Type','text/html');
  if(myurl=='/')
  {
       res.end(home);
  }
  else if(myurl=='/syllabus')
  {
      res.end(syllabus);
  }
  else if(myurl=='/quiz')
  {
      res.end(quiz);
  }
  else if(myurl=='/ourteam')
  {
     res.end(ourteam);
  }
  else
   {
      res.statusCode=404;
      res.end("404 not found page"); 
   }
  }
)
myserver.listen(port,hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});