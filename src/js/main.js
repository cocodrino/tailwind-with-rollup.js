import "../styles/main.css";

document.write(
  '<script src="http://' +
    (location.host || "localhost").split(":")[0] +
    ':35729/livereload.js?snipver=1"></' +
    "script>"
);

console.log("esto es una prueba");
