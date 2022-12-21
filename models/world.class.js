class World {
    character = new Character();
    enemy = [
        new Chickens (),
        new Chickens (),
        new Chickens (),
        new Chickens (),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }






    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the canvas before drawing
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height); // Draw the world
        this.enemy.forEach((enemy) => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        requestAnimationFrame(() => this.draw());
    }
} 