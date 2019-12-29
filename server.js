const express = require("express");
const path = require("path");
const config = require("config");
const connectDB = require("./config/db");

const main = require("./backend/routes/mainPage");


// Создаем приложение
const app = express();

connectDB(); 

app.use(express.json({ extended: false }));

// Порт - или уже существует (на сервере), или берем готовый (на локалке)
const port = process.env.PORT || config.get("defaultPort");

// Рутер с информацией для главной
app.use("/api/mainPage", main);


// Статические ассеты в продакшене
if (process.env.NODE_ENV === "production") {
  // Устанавливаем статическую папку
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "frontend", "build", "index.html"));
  });
}

// Запускаем приложение
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
