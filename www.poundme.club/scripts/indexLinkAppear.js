const source = document.getElementById('links');
const TextBlue = "<a href='order_gallery.html' class='link blue'>Blue</a>";
const ImageM = "<img src= static/morph.png class='link img'></img>"
const TextRed = "<a href='datasciences.html' class='link red'>Red</a>";
addEventListener("click", (event) => {
    source.innerHTML = TextRed + ImageM + TextBlue;
})