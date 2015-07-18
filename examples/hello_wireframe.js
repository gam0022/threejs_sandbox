/**
 * Created by gam0022 on 15/07/04.
 */
/// <reference path="../typings/tsd.d.ts"/>
var HelloWireframe = (function () {
    function HelloWireframe() {
        var _this = this;
        this.animate = function () {
            requestAnimationFrame(_this.animate);
            _this.mesh.rotation.x = 0.5;
            _this.mesh.rotation.y = 0.5;
            _this.renderer.render(_this.scene, _this.camera);
        };
        this.init();
        this.animate();
    }
    HelloWireframe.prototype.init = function () {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        var geometry = new THREE.BoxGeometry(400, 400, 400);
        var material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.visible = false;
        this.scene.add(this.mesh);
        edges = new THREE.EdgesHelper(this.mesh, 0x222222);
        //edges = new THREE.WireframeHelper(this.mesh, 0xff0000);
        this.scene.add(edges);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(new THREE.Color(0xffffff));
        document.body.appendChild(this.renderer.domElement);
    };
    return HelloWireframe;
})();
//# sourceMappingURL=hello_wireframe.js.map