class World {
    character = new Character();
    enemy = [
        new Chickens (),
        new Chickens (),
        new Chickens (),
        new Chickens (),
    ];
    clouds = [
        new Clouds(),

    ];
    boss = new Boss();
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

        this.clouds.forEach((cloud) => {
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
        });

        this.ctx.drawImage(this.boss.img, this.boss.x, this.boss.y, this.boss.width, this.boss.height); // Draw the world

        requestAnimationFrame(() => this.draw());
    }
} 