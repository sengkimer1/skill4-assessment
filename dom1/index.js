
const article = {
  title: "How to code",
  description: "You can learn to code. Error is nothing to be afraid of.",
};
function myFunction() {
  document.getElementById("article").innerHTML = 
    `Title: ${article.title}<br>
    ${article.description}`;
}