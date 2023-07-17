var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("red_page_view");

if (visitCount){
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("red_page_view", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("red_page_view", 1);
}
counterContainer.innerHTML = visitCount;