window.onload = function() {

    
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, 
        window.innerWidth/window.innerHeight, 
        1, 
        100);


    var texture_bg = new THREE.TextureLoader().load('img/sky.png', function(){
        scene.background = texture_bg;    
    });

  

    var renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var light = new THREE.AmbientLight(0x404040, 5);
    scene.add(light);

    var f15;

    var loader = new THREE.OBJLoader();

    var mtl = new THREE.MTLLoader()
                .setPath('models/jato/')
                .load('f15c.mtl', function(materials){
                    materials.preload();
                    loader.setMaterials(materials)
                        .setPath('models/jato/')
                        .load('f15c.obj', function(object){
                            f15 = object;
                            f15.position.x = 0;
                            f15.position.y = 1;
                            f15.position.z = 1;
                            f15.rotateY(-1);
                            f15.rotateX(0.5);
                            f15.rotateZ(6);
                            scene.add(f15);
                    });
                });

    renderer.render(scene, camera);

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    render();

};