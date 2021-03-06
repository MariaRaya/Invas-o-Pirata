class Boat{

    constructor(x,y,width,height, boatPos){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;

        this.image = loadImage("./imagem/boat.png");
        this.boatPosition = boatPos; 

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,this.boatPosition,this.width,this.height);
        pop();
    }

    remove(index){
        setTimeout(() => {
            Matter.World.remove(world, Boats[index].body);
            delete Boats[index]; }, 2000);
    }

}