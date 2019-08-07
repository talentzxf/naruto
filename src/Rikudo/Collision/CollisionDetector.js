class CollisionDetector{
    constructor(){
        this.objects = []
        this.walls = []
    }

    // TODO: Improve through OCT tree.
    update(dt){
        for(line in this.walls){
            for(object in this.objects){
                object.collide(wall)
            }
        }
    }

    register(object){
        this.objects.push(object)
    }

    addSolidWall(wall){
        this.walls.push(wall)
    }
}

export {CollisionDetector}