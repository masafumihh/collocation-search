const $display = document.getElementById("display");
const url = new URL(document.location);
const params = url.searchParams;
const page = params.get("p");
const keywords = params.get("keywords");

if (page == "page1") {
    $display.src = "" + keywords;
}
console.log(keywords);