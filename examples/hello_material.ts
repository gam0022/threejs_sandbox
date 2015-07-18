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

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    var ambientLight = new THREE.AmbientLight(0x777777);
    this.scene.add(ambientLight);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(1, 1, 2);
    this.scene.add(directionalLight);

    //var geometry = new THREE.BoxGeometry(400, 400, 400);
    var geometry = new THREE.SphereGeometry(200, 400, 400);
    var material = new THREE.MeshPhongMaterial({color: 0xff0000});

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(new THREE.Color(0xffffff));

    document.body.appendChild(this.renderer.domElement);
    window.addEventListener('resize', this.onWindowResize, false);
  }

  animate = () => {

    requestAnimationFrame(this.animate);

    this.mesh.rotation.x = 0.5;
    this.mesh.rotation.y = 0.5;

    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}