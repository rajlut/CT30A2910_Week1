import "./styles.css";

document.getElementById("app").innerHTML = `
<h1 id="title">Hello World</h1>
<button id="my-button" onclick="myFunction()">Click me</button>
`;

function myFunction() {
  document.getElementById("title").innerHTML = "My notebook";
  console.log("Hello World");

}
