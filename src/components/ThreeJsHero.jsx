import React, { useEffect, useRef } from 'react';

export default function ThreeJsHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !window.THREE) {
      console.warn("THREE.js is not loaded.");
      return;
    }

    const THREE = window.THREE;
    const devicePixelRatio = window.devicePixelRatio || 1;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(devicePixelRatio);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Core Industrial Wireframe (Cube)
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ 
      color: 0x40D1C0, 
      transparent: true, 
      opacity: 0.8,
      linewidth: 2
    });
    const core = new THREE.LineSegments(wireframe, material);
    group.add(core);

    // Outer Technical Rings
    const ringGeo1 = new THREE.TorusGeometry(3.5, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x40D1C0, transparent: true, opacity: 0.3 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat);
    group.add(ring1);

    const ring2 = ring1.clone();
    ring2.rotation.x = Math.PI / 2;
    group.add(ring2);

    const ring3 = ring1.clone();
    ring3.rotation.y = Math.PI / 2;
    group.add(ring3);

    camera.position.z = 8;

    // Mouse Tracking
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (event) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 0.8;
      targetY = (event.clientY / window.innerHeight - 0.5) * 0.8;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId;
    function animate() {
      animationId = requestAnimationFrame(animate);
      
      // Constant slow rotation
      group.rotation.y += 0.003;
      group.rotation.x += 0.001;

      // React to mouse
      group.rotation.y += (targetX - group.rotation.y) * 0.05;
      group.rotation.x += (targetY - group.rotation.x) * 0.05;
      
      // Inner core pulsing
      const scale = 1 + Math.sin(Date.now() * 0.002) * 0.05;
      core.scale.set(scale, scale, scale);
      
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

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
