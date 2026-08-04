import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function CyberMesh({ mousePosition }) {
  const meshRef = useRef();
  const wireframeRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
      
      // Smooth mouse follow interpolation
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        meshRef.current.rotation.x + mousePosition.current.y * 0.2,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        meshRef.current.rotation.y + mousePosition.current.x * 0.2,
        0.05
      );
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.1;
      wireframeRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group>
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        {/* Core Distorted Mesh */}
        <mesh ref={meshRef} scale={1.8}>
          <torusKnotGeometry args={[1, 0.35, 128, 32]} />
          <MeshDistortMaterial
            color="#06b6d4"
            emissive="#0284c7"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            distort={0.25}
            speed={1.5}
            wireframe={false}
          />
        </mesh>

        {/* Outer Wireframe Shield */}
        <mesh ref={wireframeRef} scale={2.25}>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshBasicMaterial
            color="#8b5cf6"
            wireframe={true}
            transparent={true}
            opacity={0.18}
          />
        </mesh>
      </Float>
    </group>
  );
}

function ParticleField({ count = 250 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorCyan = new THREE.Color('#06b6d4');
    const colorViolet = new THREE.Color('#8b5cf6');
    const colorEmerald = new THREE.Color('#10b981');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;

      const choice = Math.random();
      let mixedColor = choice < 0.4 ? colorCyan : choice < 0.8 ? colorViolet : colorEmerald;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroThreeCanvas() {
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    mousePosition.current = {
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    };
  };

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-85"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#8b5cf6" />
        <spotLight position={[0, 15, 0]} intensity={1.8} color="#38bdf8" />
        
        <CyberMesh mousePosition={mousePosition} />
        <ParticleField count={220} />
      </Canvas>
    </div>
  );
}
