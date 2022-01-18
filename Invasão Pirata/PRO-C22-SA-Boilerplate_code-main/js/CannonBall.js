class CannonBall{

    constructor(x,y){
        var options = {
            isStatic: true
        };

        this.r = 30;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("./imagem/cannonball.png");
        this.trajectory = [];
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();

        //Trajetória da bola
        if(this.body.velocity.x > 0 && pos.x > 10){
            var position = [pos.x, pos.y];
            this.trajectory.push(position);
        }

        for(i=0; i < this.trajectory.length; i++){
            image(this.image, this.trajectory[i][0],this.trajectory[i][1], 5, 5);
        }


    }

    atirar(){
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body,{x:30, y:-10});
    }

}