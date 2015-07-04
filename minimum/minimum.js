/**
 * Created by gam0022 on 15/07/04.
 */
/// <reference path="../typings/tsd.d.ts"/>
var Minimum = (function () {
    function Minimum() {
        var _this = this;
        this.animate = function () {
            requestAnimationFrame(_this.animate);
            _this.cube.rotation.x += 0.1;
            _this.cube.rotation.y += 0.1;
            _this.cube.rotation.y += 0.1;
            _this.renderer.render(_this.scene, _this.camera);
        };
        this.init();
        this.animate();
    }
    Minimum.prototype.init = function () {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        var geometry = new THREE.CubeGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
        this.camera.position.z = 3;
    };
    return Minimum;
})();
//# sourceMappingURL=minimum.js.map