import express from "express";

export const app = express();

app.use(express.static("src/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/chat", (req, res) => {
  res.sendFile(__dirname + "/public/chat.html");
});

app.get("/comments", (req, res) => {
  res.sendFile(__dirname + "/public/comments.html");
});
