const server = io();

server.emit("hello:petter", "Spiderman no way home");

server.on("bye:petter", (message) => {
  console.log(message);
});

const form = document.querySelector(".form-comment");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const comment = e.target[0].value;
  const author = e.target[1].value;
  const body = { comment, author };

  server.emit("new:comment", body);

  server.on("save:comment", (message) => {
    console.log(message);
  });

  e.target[0].value = "";
  e.target[1].value = "";
});
