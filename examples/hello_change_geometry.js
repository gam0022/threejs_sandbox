/**
 * Created by gam0022 on 15/07/04.
 */
/// <reference path="../typings/tsd.d.ts"/>
var HelloChangeGeometry = (function () {
    function HelloChangeGeometry() {
        var _this = this;
        this.timer = 0;
        this.animate = function () {
            requestAnimationFrame(_this.animate);
            //for(var v in this.mesh.geometry.vertices) {
            //    v.x *= 2.0;
            //}
            _this.mesh.geometry.vertices.forEach(function (v) {
                v.x = v.x > 0 ? 200 : -200;
            });
            var s = 110 + 100 * Math.sin(_this.timer);
            for (var i = 0, len = _this.mesh.geometry.vertices.length; i < len; i++) {
                var v = _this.mesh.geometry.vertices[i];
                switch (i % 3) {
                    case 0:
                        v.x = v.x > 0 ? s : -s;
                        break;
                    case 1:
                        v.y = v.y > 0 ? s : -s;
                        break;
                    case 2:
                        v.z = v.z > 0 ? s : -s;
                        break;
                }
            }
            _this.mesh.geometry.verticesNeedUpdate = true;
            _this.mesh.rotation.x += 0.01;
            _this.mesh.rotation.y += 0.02;
            _this.renderer.render(_this.scene, _this.camera);
            _this.timer += 0.1;
        };
        this.init();
        this.animate();
    }
    HelloChangeGeometry.prototype.init = function () {
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
    return HelloChangeGeometry;
})();
//# sourceMappingURL=hello_change_geometry.js.map