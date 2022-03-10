function shirts_slider() {
    for(i = 1; i <= 50; i++) {
        const node = document.createElement("img");
        node.src = 'assets/img/shirts/img ('+i+').jpg';
        document.getElementById("shirts-slider").appendChild(node);
    }
}
shirts_slider();

function watches_slider() {
    for(i = 1; i <= 467; i++) {
        const node = document.createElement("img");
        node.src = 'assets/img/watches/img ('+i+').jpg';
        document.getElementById("watches-slider").appendChild(node);
    }
}
watches_slider();

function belts_slider() {
    for(i = 1; i <= 18; i++) {
        const node = document.createElement("img");
        node.src = 'assets/img/belts/img ('+i+').jpg';
        document.getElementById("belts-slider").appendChild(node);
    }
}
belts_slider();

function shoes_slider() {
    for(i = 1; i <= 197; i++) {
        const node = document.createElement("img");
        node.src = 'assets/img/shoes/img ('+i+').jpg';
        document.getElementById("shoes-slider").appendChild(node);
    }
}
shoes_slider();

function crocks_slider() {
    for(i = 1; i <= 16; i++) {
        const node = document.createElement("img");
        node.src = 'assets/img/crocks/img ('+i+').jpg';
        document.getElementById("crocks-slider").appendChild(node);
    }
}
crocks_slider();

function slides_slider() {
    for(i = 1; i <= 35; i++) {
        const node = document.createElement("img");
        node.src = 'assets/img/slides/img ('+i+').jpg';
        document.getElementById("slides-slider").appendChild(node);
    }
}
slides_slider();


//shoes-slider
//crocks-slider
//belts-slider