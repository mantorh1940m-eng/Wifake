const articles = [
  { title: "Philosophy", file: "philosophy" },
  { title: "Existence", file: "existence" },
  { title: "Ethics", file: "ethics" }
];

const list = document.getElementById("articles");

articles.forEach(a => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${a.title}</h3>
    <p>Read about ${a.title}</p>
    <a href="article.html?name=${a.file}">Read →</a>
  `;
  list.appendChild(div);
});
