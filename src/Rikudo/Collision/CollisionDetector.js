class CollisionDetector{
    constructor(){
        this.objects = []
        this.lines = []
    }

    // TODO: Improve through OCT tree.
    update(dt){
        for(line in this.lines){
            for(object in this.objects){
                object.collide(line)
            }
        }
    }

    addSolidWall(line){
        this.lines.push(line)
    }
}

export {CollisionDetector}