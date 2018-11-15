"use strict";

function menuBar() {
    let x = document.getElementById("top-nav");
    
    if(x.className === "navbar") {
        x.className += " responsive-bar";
    } else {
        x.className = "navbar";
    }

    
}