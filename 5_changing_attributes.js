// Change attribute of any element.
// Note: Dont run this script using node. It will raise error.

var circles = document.querySelectorAll("circle");
console.log(circles[1].getAttribute("style"));
circles[1].setAttribute("style", "filter: url(#drop-shadow-filter-1); fill: rgb(216, 0, 0);");

console.log(circles[1].getAttribute("style"));

// Above method is too crude. 