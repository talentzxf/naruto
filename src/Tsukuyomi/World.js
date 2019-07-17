var THREE = require("n3d-threejs")

class World{
    constructor(width, height){

        if( this.constructor == World){
            throw new TypeError("Class: World is abstract, can\'t be instantiated directly. Please inherit and implement all abstract functions.")
        }

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 10000)

        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(width, height)
        document.body.appendChild(this.renderer.domElement)
        this.camera.position.z = 50

        if(this.initScene == undefined){
            throw new TypeError("Please inherit initScene!")
        } else {
            this.initScene(this.scene)
        }
    }

    animate(){
        requestAnimationFrame(this.animate.bind(this))

        if(this.update == undefined){
            console.log("Update not defined, Scene is static!")
        }else {
            this.update()
        }
        this.render()
    }

    render(){
        this.renderer.render(this.scene, this.camera)
    }
}

export {World}