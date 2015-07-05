/**
 * Created by gam0022 on 15/07/04.
 */
/// <reference path="../typings/tsd.d.ts"/>

class HelloMaterial {
    scene:THREE.Scene;
    camera:THREE.PerspectiveCamera;
    renderer:THREE.Renderer;
    mesh:THREE.Mesh;

    constructor() {
        this.init();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        this.camera.position.z = 1000;

        var ambientLight = new THREE.AmbientLight( 0x444444 );
        this.scene.add( ambientLight );

        var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
        directionalLight.position.set( 0, 1, 0 );
        this.scene.add( directionalLight );

        var geometry = new THREE.BoxGeometry( 200, 200, 200 );
        var material = new THREE.MeshPhongMaterial( { color: 0xff0000} );

        this.mesh = new THREE.Mesh( geometry, material );
        this.scene.add( this.mesh );

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( this.renderer.domElement );
        window.addEventListener( 'resize', this.onWindowResize, false );
    }

    animate = () => {

        requestAnimationFrame( this.animate );

        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;

        this.renderer.render( this.scene, this.camera );
    }

    onWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize( window.innerWidth, window.innerHeight );
    }
}