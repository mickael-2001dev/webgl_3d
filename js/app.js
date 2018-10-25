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

    renderer.render(scene, camera);

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    render();

};