
// I denne fil skal du benytte dig af de objekter, properties og funktioner, som du har defineret i "oop_gallery.js".
// Her er det tilladt at referere til specifikke gallerier, som f.eks. galleri01, galleri02, osv.

document.addEventListener ("DOMContentLoaded", function (event) {



    let images = [
        "images/image_01.jpg",
        "images/image_02.jpg",
        "images/image_03.jpg",
        "images/image_04.jpg",
        "images/image_05.jpg",
        "images/image_06.jpg",
        "images/image_07.jpg"
    ]
    let galleri_1 = new OOPGallery("gallery01", images);

    let galleri_2 = new OOPGallery("gallery02", images);

})