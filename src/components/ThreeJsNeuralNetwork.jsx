import React, { useEffect, useRef } from 'react';

export default function ThreeJsNeuralNetwork() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !window.THREE) return;

    const THREE = window.THREE;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const points = [];
    for (let i = 0; i < 50; i++) {
        points.push(new THREE.Vector3(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        ));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.PointsMaterial({ color: 0x40d1c0, size: 0.1, transparent: true, opacity: 0.8 });
    const cloud = new THREE.Points(geometry, material);
    group.add(cloud);

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x40d1c0, transparent: true, opacity: 0.2 });
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const networkLines = new THREE.Line(lineGeometry, lineMaterial);
    group.add(networkLines);

    camera.position.z = 8;

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId;
    function animate() {
        animationId = requestAnimationFrame(animate);
        group.rotation.y += 0.002;
        group.rotation.x += 0.001;
        
        group.rotation.y += mouseX * 0.02;
        group.rotation.x += mouseY * 0.02;
        
        renderer.render(scene, camera);
    }

    const handleResize = () => {
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} />;
}
