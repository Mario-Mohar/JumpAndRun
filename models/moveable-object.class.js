class MoveableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 100;

// load image from path ('img/hero-down.png')
    loadImage(path) {
        this.img = new Image(); // Create new img element same as this.img = document.getElementById('Image') <img id="Image" src="img.png" alt="Image" />
        this.img.src = path;
    }

    moveRight() {
        console.log('move right');        
    }
}