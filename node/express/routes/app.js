// При определении функции для обработки того или иного машрута следует
// учитывать, что более общие маршруты должны идти после более частных.
// Так, в примере выше сначала идут функции для обработки маршрутов
// "/contact" и "/about" и лишь затем функции для обработки корневного
// маршрута "/", поскольку маршруты "/contact" и "/about" содержат маршрут "/".
// Поэтому node.js маршрут "/" может интерпретировть и как /contact, и как /about.

// Используемые шаблоны адресов могут содержать регулярные выражения или
// специальные символы подстановок. В частности, мы можем использовать такие
// символы, как ?, +, * и ().

// use, get, post, put, delete - можно использовать. 1-й параметр - путь, второй ф-я

const express = require("express");
const app = express();

// обработка запроса по адресу /about
app.get("/about", function(request, response) {
  response.send("<h1>О сайте</h1>");
});

// обработка запроса по адресу /contact
app.use("/contact", function(request, response) {
  response.send("<h1>Контакты</h1>");
});

// обработка запроса к корню веб-сайта
app.get(/.*(\.)html$/, function(request, response) {
  response.send(request.url)
});

app.listen(3000);
