import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const techNodes = [
  { name: 'Python', color: '#38bdf8', pos: [-2.2, 1.2, 0] },
  { name: 'Django', color: '#10b981', pos: [2.0, 1.5, 0.5] },
  { name: 'React', color: '#06b6d4', pos: [0, -1.8, 0.8] },
  { name: 'REST APIs', color: '#f43f5e', pos: [-1.8, -1.2, -0.5] },
  { name: 'FastAPI', color: '#14b8a6', pos: [1.8, -1.0, -0.8] },
  { name: 'MySQL', color: '#0284c7', pos: [0, 2.2, -0.6] },
  { name: 'Git', color: '#f97316', pos: [-2.5, 0, 0.8] },
  { name: 'AR.js', color: '#a855f7', pos: [2.5, 0, -0.2] }
];

function FloatingNode({ name, color, pos }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8} position={pos}>
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <Text
          position={[0, 0.8, 0]}
          fontSize={0.32}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoabj657uV84uchik16a1.woff"
        >
          {name}
        </Text>
      </group>
    </Float>
  );
}

function SceneGroup() {
  const mainRef = useRef();

  useFrame((state, delta) => {
    if (mainRef.current) {
      mainRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={mainRef}>
      {techNodes.map((node, i) => (
        <FloatingNode key={i} {...node} />
      ))}
    </group>
  );
}

export default function Tech3DCluster() {
  return (
    <div className="w-full h-80 relative glass-panel rounded-3xl overflow-hidden border border-cyan-500/20 my-10">
      <div className="absolute top-4 left-6 z-10 font-mono text-xs text-cyan-400 uppercase tracking-widest pointer-events-none">
        Interactive 3D Tech Orbit (Drag to rotate)
      </div>
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
        <SceneGroup />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
