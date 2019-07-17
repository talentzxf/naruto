var THREE = require("n3d-threejs")
import {Sphere} from 'Chakra/Geometry/Sphere.js'

class ThreeSphere extends Sphere{
    constructor(scene, center, radius){
        super(center, radius)
        var geometry = new THREE.SphereGeometry( this.radius, 32, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        this.sphere = new THREE.Mesh( geometry, material );

        scene.add(this.sphere)
        this.sphere.position.set(center.x(), center.y(), center.z())
    }

    getRotation(){
        return this.sphere.rotation
    }

    getPosition(){
        return this.sphere.position
    }
}

export {ThreeSphere}