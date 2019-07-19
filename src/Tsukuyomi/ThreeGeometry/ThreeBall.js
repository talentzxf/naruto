var THREE = require("n3d-threejs")
import {Ball} from 'Rikudo/RigidObjects/Ball.js'

class ThreeBall extends Ball{
    constructor(scene, center, radius){
        super(center, radius)
        var geometry = new THREE.SphereGeometry( this.radius, 32, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        this.sphere = new THREE.Mesh( geometry, material );

        scene.add(this.sphere)
        this.sphere.position.set(this.center.x(), this.center.y(), this.center.z())
    }

    getRotation(){
        return this.sphere.rotation
    }

    getPosition(){
        return this.sphere.position
    }

    update(dt){
        super.update(dt)
        this.sphere.position.set(this.center.x(), this.center.y(), this.center.z())
    }
}

export {ThreeBall}