
const mark = document.querySelectorAll(".article__mark");
console.log(mark);


mark.forEach(el =>{
    el.addEventListener("click", e=>{
        if(el.style.backgroundImage === "url(\"../assets/bookmarkfull.png\")"){
            el.style.backgroundImage = "url(\"../assets/bookmark.png\")";
        }else{
            el.style.backgroundImage = "url(\"../assets/bookmarkfull.png\")";
        }
        console.log("dziala");
    });
})