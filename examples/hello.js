/**
 * Created by gam0022 on 15/07/04.
 */
/// <reference path="../typings/tsd.d.ts"/>
var Hello = (function () {
    function Hello() {
        var _this = this;
        this.animate = function () {
            requestAnimationFrame(_this.animate);
            _this.mesh.rotation.x += 0.01;
            _this.mesh.rotation.y += 0.02;
            _this.renderer.render(_this.scene, _this.camera);
        };
        this.init();
        this.animate();
    }
    Hello.prototype.init = function () {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        var geometry = new THREE.BoxGeometry(200, 200, 200);
        var material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    };
    return Hello;
})();
//# sourceMappingURL=hello.js.map