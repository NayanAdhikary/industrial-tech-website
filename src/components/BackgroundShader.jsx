import React, { useEffect, useRef } from 'react';

export default function BackgroundShader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    
    // Initial size sync
    syncSize();
    
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;
    
    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
    const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = v_texCoord;
    
    // Industrial dark base
    vec3 baseColor = vec3(0.02, 0.03, 0.03);
    
    // Technical grid shifts density with scroll
    float gridDensity = 40.0 + sin(u_scroll * 0.001) * 10.0;
    vec2 grid_uv = uv * gridDensity;
    float grid = (step(0.98, fract(grid_uv.x)) + step(0.98, fract(grid_uv.y)));
    
    // Flowing teal glows/aurora (speed increases with scroll)
    float scrollFactor = u_scroll * 0.005;
    float timeWithScroll = u_time * 0.4 + scrollFactor;
    float pulse = sin(u_time * 0.2) * 0.5 + 0.5;
    float glow = sin(uv.y * 3.0 + timeWithScroll) * cos(uv.x * 2.0 - timeWithScroll * 0.8);
    vec3 tealGlow = vec3(0.25, 0.82, 0.75) * max(0.0, glow) * 0.15;
    
    // Subtle scanning pulse tracks progress
    float scanPulseY = mod(u_scroll * 0.001, 1.0);
    float scanPulse = smoothstep(0.05, 0.0, abs(uv.y - (1.0 - scanPulseY)));
    vec3 scanPulseColor = vec3(0.0, 1.0, 0.8) * scanPulse * 0.1;

    // Moving scanlines
    float scanline = sin(uv.y * 800.0 + u_time * 5.0) * 0.015;
    
    // Vignette for depth
    float vignette = smoothstep(1.2, 0.4, length(uv - 0.5));
    
    vec3 finalColor = baseColor + tealGlow + (grid * 0.03) + scanline + scanPulseColor;
    finalColor *= vignette;

    gl_FragColor = vec4(finalColor, 1.0);
}`;
    function cs(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }
    
    const prog = gl.createProgram();
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uScroll = gl.getUniformLocation(prog, 'u_scroll');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let scrollY = 0;
    
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    let animationId;
    function render(t) {
      if (typeof ResizeObserver === 'undefined') syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      if (uScroll) gl.uniform1f(uScroll, scrollY);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (resizeObserver) resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 opacity-40" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10, opacity: 0.4, display: 'block' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
