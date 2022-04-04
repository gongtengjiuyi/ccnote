const express = require("express");
const mysql = require("mysql");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3001;
//解决跨域
app.all("*", function (req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  // 允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  // 跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() === "options") {
    res.send(200); // 让options尝试请求快速结束
  } else {
    next();
  }
});
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ccnode",
});
connection.connect();
//用户登录状态查询接口
app.post("/login", (req, res) => {
  console.log(req.body)
  connection.query(
    `select * from user where phone='${req.body.data.phone}'`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send({
        status: 200,
        data: rows,
      });
    }
  );
});
//用户登录接口
app.post("/check", (req, res) => {
  connection.query(
    `select * from user where phone='${req.body.data.username}' and password='${req.body.data.password}'`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send({
        status: 200,
        data: rows,
      });
    }
  );
});
// 新用户注册接口
app.post("/register", (req, res) => {
  console.log(req.body);
  connection.query(
    `insert into user(email,password,nickname,prefix,phone,intro,gender) values ('${req.body.data.email}','${req.body.data.password}','${req.body.data.nickname}','${req.body.data.prefix}','${req.body.data.phone}','${req.body.data.intro}','${req.body.data.gender}')`,
    function (err, rows, fields) {
      if (err) throw err;
      res.send({
        status: 200,
        data: rows,
      });
    }
  );
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
