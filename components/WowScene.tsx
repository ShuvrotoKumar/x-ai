"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleSphere = () => {
  const count = 3000;
  const lineCount = 50;
  const meshRef = useRef<THREE.Group>(null!);
  const { mouse } = useThree();

  const [positions, linePositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const r = 2;
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }

    const lPos = new Float32Array(lineCount * 2 * 3);
    for (let i = 0; i < lineCount; i++) {
      const startIdx = Math.floor(Math.random() * count);
      const endIdx = Math.floor(Math.random() * count);
      
      lPos[i * 6] = pos[startIdx * 3];
      lPos[i * 6 + 1] = pos[startIdx * 3 + 1];
      lPos[i * 6 + 2] = pos[startIdx * 3 + 2];
      
      lPos[i * 6 + 3] = pos[endIdx * 3];
      lPos[i * 6 + 4] = pos[endIdx * 3 + 1];
      lPos[i * 6 + 5] = pos[endIdx * 3 + 2];
    }
    
    return [pos, lPos];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.1;
    meshRef.current.rotation.x = time * 0.05;
    
    // Subtle mouse interaction
    meshRef.current.rotation.y += mouse.x * 0.5;
    meshRef.current.rotation.x -= mouse.y * 0.5;
  });

  return (
    <group ref={meshRef}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.1} />
      </lineSegments>
      
      {/* Central Core Glow */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          emissive="#3b82f6" 
          emissiveIntensity={2} 
          transparent 
          opacity={0.05} 
        />
      </mesh>
    </group>
  );
};

const WowScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <ParticleSphere />
      <fog attach="fog" args={["#000", 5, 10]} />
    </Canvas>
  );
};

export default WowScene;
