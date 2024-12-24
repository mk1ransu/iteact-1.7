import * as THREE from 'three';
// import gsap from 'gsap'; // Uncomment if you're going to use gsap later


const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();


const count = 50;
const geometry = new THREE.BufferGeometry();
const positionsArray = new Float32Array(count * 5 * 4); 
for (let i = 0; i < count * 5 * 4; i++) {
    positionsArray[i] = (Math.random() - 0.5) * 4; 
}


const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);
geometry.setAttribute('position', positionsAttribute);

const material = new THREE.MeshBasicMaterial({ color: 0xFFFF99, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);


window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
});


let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (event) => {
   
    mouseX = (event.clientX / sizes.width) * 2 - 1; 
    mouseY = -(event.clientY / sizes.height) * 2 + 1; 
});


const tick = () => {
    
    mesh.rotation.x = mouseY * Math.PI;  
    mesh.rotation.y = mouseX * Math.PI;  

  
    renderer.render(scene, camera);

    
    window.requestAnimationFrame(tick);
};

tick();