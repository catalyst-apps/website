import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface ThreeSceneProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ containerRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const pointsRef = useRef<THREE.Vector3[]>([]);
  const frame = useRef(0);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#0F1A2A');

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 20;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    rendererRef.current = renderer;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create particles
    const particleCount = 500;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = (Math.random() - 0.5) * 50;
      positions[i + 2] = (Math.random() - 0.5) * 50;
      
      // Store points for animation
      pointsRef.current.push(new THREE.Vector3(
        positions[i],
        positions[i + 1],
        positions[i + 2]
      ));
      
      // Color - blue to teal gradient
      const ratio = Math.random();
      colors[i] = 0.2;                    // R
      colors[i + 1] = 0.4 + ratio * 0.3;  // G
      colors[i + 2] = 0.7 + ratio * 0.3;  // B
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    particlesRef.current = particleSystem;
    scene.add(particleSystem);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x3498db, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0x4ecdc4, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Handle mouse movement
    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', onMouseMove);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      frame.current = requestAnimationFrame(animate);

      if (!particlesRef.current || !cameraRef.current || !rendererRef.current || !sceneRef.current) return;

      // Rotate particle system
      particlesRef.current.rotation.x += 0.0003;
      particlesRef.current.rotation.y += 0.0005;

      // Update particles based on mouse position
      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      
      const positions = particlesRef.current.geometry.attributes.position;
      const positionArray = positions.array as Float32Array;
      
      for (let i = 0; i < positions.count; i++) {
        const idx = i * 3;
        
        // Subtle movement based on sine wave
        const x = pointsRef.current[i].x + Math.sin(Date.now() * 0.001 + i) * 0.02;
        const y = pointsRef.current[i].y + Math.cos(Date.now() * 0.001 + i) * 0.02;
        const z = pointsRef.current[i].z + Math.sin(Date.now() * 0.001 + i) * 0.02;
        
        positionArray[idx] = x;
        positionArray[idx + 1] = y;
        positionArray[idx + 2] = z;
      }
      
      positions.needsUpdate = true;

      // Render the scene
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    // Initial animation
    gsap.fromTo(
      particlesRef.current.material,
      { opacity: 0 },
      { opacity: 0.8, duration: 2, ease: "power2.out" }
    );

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      
      cancelAnimationFrame(frame.current);
      
      if (particlesRef.current) {
        scene.remove(particlesRef.current);
        particlesRef.current.geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
      }
      
      rendererRef.current?.dispose();
    };
  }, [containerRef]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default ThreeScene;
