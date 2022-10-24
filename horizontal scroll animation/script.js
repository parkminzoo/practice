const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    direction: "horizontal",
});

let blocks = document.querySelectorAll(".block[data-block-section]");
scroll.on("scroll", (args) => {
    blocks.forEach((block) => {
        let attr = block.getAttribute("data-block-section");
        let section = document.querySelector(
            `section[data-block-section='${attr}']`
        );
        
        if (
            section.getBoundingClientRect().left <=
            block.offsetWidth * attr
        ) {
            block.classList.add("fixed");
            block.classList.remove("init");
            block.style.left = "";
        } else if (
            section.getBoundingClientRect().left >=
            window.innerWidth - block.offsetWidth * (blocks.length - attr)
        ) {
            blocks.classList.add("init");
            block.classList.remove("fixed");
            block.style.left = "";
        } else {
            block.classList.remove("init");
            block.classList.remove("fixed");
        }
        if (block.classList.contains("active")){
            blocks.style.left = section.getBoundingClientRect().left + "px";
        }
    });
});
