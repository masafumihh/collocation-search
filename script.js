const $display = document.getElementById("display");
const url = new URL(document.location);
const params = url.searchParams;
const page = params.get("p");
const keywords = params.get("keywords");

if (page == "page1") {
    $display.src = "https://script.google.com/macros/s/AKfycbzs2b3Tvx1vS2CksM5cN6aoteuarnX7SL7ZP0J6r4BHCM8I5fISxvvhDg2h9P88W1W3/exec?p=page1&keywords=" + keywords;
}
console.log(keywords);
