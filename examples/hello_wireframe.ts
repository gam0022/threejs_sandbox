/**
 * Created by gam0022 on 15/07/04.
 */
/// <reference path="../typings/tsd.d.ts"/>

class HelloWireframe {
    scene:THREE.Scene;
    camera:THREE.Camera;
    renderer:THREE.Renderer;
    mesh:THREE.Mesh;

    constructor() {
        this.init();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;

        var geometry = new THREE.BoxGeometry(400, 400, 400);
        var material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.visible = false;
        this.scene.add(this.mesh);

        edges = new THREE.EdgesHelper(this.mesh, 0x222222);
        //edges = new THREE.WireframeHelper(this.mesh, 0xff0000);
        this.scene.add(edges);

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(new THREE.Color(0xffffff));

        document.body.appendChild(this.renderer.domElement);
    }

    animate = () => {

        requestAnimationFrame(this.animate);

        this.mesh.rotation.x = 0.5;
        this.mesh.rotation.y = 0.5;

        this.renderer.render(this.scene, this.camera);
    }
}