var THREE = require("n3d-threejs")

class World{
    constructor(width, height){
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 10000)

        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(width, height)
        document.body.appendChild(this.renderer.domElement)

        var geometry = new THREE.BoxGeometry(1, 1, 1)
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00})
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(cube)

        this.camera.position.z = 5
    }

    animate(){
        requestAnimationFrame(animate)
        update()
        render()
    }

    update(){
        this.cube.rotation.x += 0.1
        this.cube.rotation.y += 0.1
    }

    render(){
        this.renderer.render(scene, camera)
    }
}

export {World}