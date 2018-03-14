
// Denne fil må kun indeholde definitionen på gallery objektet.
// Altså må der ikke stå "new OOPGallery()" nogen steder i denne fil.

// Hvis en hjemmeside f.eks. har 3 gallerier på samme underside,
// så må de 3 gallerier IKKE nævnes specifikt her!

// Spørg, hvis du er i tvivl omkring reglerne.

class OOPGallery {
	constructor(name, images) {
		// this.billeder = ["images/image_01.jpg", "images/image_02.jpg", "images/image_03.jpg", "images/image_04.jpg", "images/image_05.jpg", "images/image_06.jpg", "images/image_07.jpg"];
		this.name = name;
		this.images = images;
		this.index = 0;
		this.setEventHandler();
	}

	setEventHandler() {
		let that = this;
		document.querySelector(`#${this.name} .oopgallery-control-first`).addEventListener("click", function () {
			document.querySelector(`#${that.name} .oopgallery-image`).src = that.gotoImageFirst();
		})

		document.querySelector(`#${this.name} .oopgallery-control-last`).addEventListener("click", function () {
			document.querySelector(`#${that.name} .oopgallery-image`).src = that.gotoImageLast();
		})

		document.querySelector(`#${this.name} .oopgallery-control-next`).addEventListener("click", function () {
			document.querySelector(`#${that.name} .oopgallery-image`).src = that.gotoImageNext();
		})

		document.querySelector(`#${this.name} .oopgallery-control-previous`).addEventListener("click", function () {
			document.querySelector(`#${that.name} .oopgallery-image`).src = that.gotoImagePrevious();
		})

		document.querySelector(`#${that.name} .oopgallery-image`).src = this.gotoImageFirst();
	}


gotoImageFirst () {
    this.index = 0;
		return this.images[this.index];
}

gotoImageLast () {
	this.index = this.images.length - 1;
		return this.images[this.index];
}

gotoImagePrevious () {
	if (this.index > 0) {
		this.index--;
	}
	return this.images[this.index];
}

gotoImageNext () {	
	if (this.index < this.images.length - 1) {
		this.index++;
	}
	return this.images[this.index];
}

}