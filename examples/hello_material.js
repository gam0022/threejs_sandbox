/**
 * Created by gam0022 on 15/07/04.
 */
/// <reference path="../typings/tsd.d.ts"/>
var HelloMaterial = (function () {
    function HelloMaterial() {
        var _this = this;
        this.animate = function () {
            requestAnimationFrame(_this.animate);
            _this.mesh.rotation.x = 0.5;
            _this.mesh.rotation.y = 0.5;
            _this.renderer.render(_this.scene, _this.camera);
        };
        this.onWindowResize = function () {
            _this.camera.aspect = window.innerWidth / window.innerHeight;
            _this.camera.updateProjectionMatrix();
            _this.renderer.setSize(window.innerWidth, window.innerHeight);
        };
        this.init();
        this.animate();
    }
    HelloMaterial.prototype.init = function () {
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
        var material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(new THREE.Color(0xffffff));
        document.body.appendChild(this.renderer.domElement);
        window.addEventListener('resize', this.onWindowResize, false);
    };
    return HelloMaterial;
})();
//# sourceMappingURL=hello_material.js.map