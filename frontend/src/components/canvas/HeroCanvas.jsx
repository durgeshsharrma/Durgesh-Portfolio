import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, MeshDistortMaterial, Trail, Float as FloatDrei } from '@react-three/drei';
import * as THREE from 'three';

/* ── Planet Component with Details ── */
const Planet = ({ radius, speed, offset, size, color, name, hasRing = false, distort = 0 }) => {
    const planetRef = useRef();
    const groupRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed + offset;
        planetRef.current.position.x = Math.cos(t) * radius;
        planetRef.current.position.z = Math.sin(t) * radius;
        planetRef.current.position.y = Math.sin(t * 0.3) * (radius * 0.1); // Individual tilt
        planetRef.current.rotation.y += 0.02; // Self rotation
    });

    return (
        <group ref={groupRef}>
            {/* Orbital Path Line */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[radius, 0.005, 16, 120]} />
                <meshBasicMaterial color={color} transparent opacity={0.08} />
            </mesh>

            <Trail
                width={size * 1.5}
                length={8}
                color={new THREE.Color(color)}
                attenuation={(t) => t * t}
            >
                <mesh ref={planetRef}>
                    <sphereGeometry args={[size, 32, 32]} />
                    {distort > 0 ? (
                        <MeshDistortMaterial
                            color={color}
                            distort={distort}
                            speed={2}
                            roughness={0.2}
                            metalness={0.8}
                            emissive={color}
                            emissiveIntensity={0.5}
                        />
                    ) : (
                        <meshStandardMaterial
                            color={color}
                            roughness={0.4}
                            metalness={0.6}
                            emissive={color}
                            emissiveIntensity={0.3}
                        />
                    )}

                    {/* Planet Rings (like Saturn) */}
                    {hasRing && (
                        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
                            <torusGeometry args={[size * 1.8, size * 0.05, 2, 64]} />
                            <meshBasicMaterial color={color} transparent opacity={0.3} />
                        </mesh>
                    )}

                    {/* Subtle Glow Light */}
                    <pointLight intensity={0.5} distance={size * 5} color={color} />
                </mesh>
            </Trail>
        </group>
    );
};

/* ── Central Star (The Sun) ── */
const CentralStar = () => {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.y += 0.005;
    });

    return (
        <group>
            <mesh ref={meshRef}>
                <sphereGeometry args={[1.2, 64, 64]} />
                <MeshDistortMaterial
                    color="#915EFF"
                    distort={0.4}
                    speed={1.5}
                    emissive="#915EFF"
                    emissiveIntensity={2}
                />
            </mesh>
            {/* Core Glow */}
            <pointLight intensity={3} distance={15} color="#915EFF" />
            <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshBasicMaterial color="#915EFF" transparent opacity={0.1} />
            </mesh>
        </group>
    );
};

/* ── Realistic Solar System Scene ── */
const SolarSystem = () => {
    // Defining planets with characteristics relative to Earth
    const planetsData = [
        { name: 'Mercury', radius: 1.8, speed: 1.2, offset: 0, size: 0.08, color: '#A5A5A5' },
        { name: 'Venus', radius: 2.5, speed: 0.9, offset: 1, size: 0.12, color: '#E3BB76' },
        { name: 'Earth', radius: 3.5, speed: 0.7, offset: 2.5, size: 0.15, color: '#2271B3', distort: 0.1 },
        { name: 'Mars', radius: 4.5, speed: 0.5, offset: 4, size: 0.1, color: '#E27B58' },
        { name: 'Jupiter', radius: 6.2, speed: 0.3, offset: 5.5, size: 0.28, color: '#D39C7E', hasRing: true },
        { name: 'Saturn', radius: 8.0, speed: 0.2, offset: 7, size: 0.22, color: '#C5AB6E', hasRing: true },
        { name: 'Neptune', radius: 10.0, speed: 0.12, offset: 8.5, size: 0.18, color: '#3E54E8' },
    ];

    return (
        <>
            <ambientLight intensity={0.3} />
            <Stars radius={150} depth={50} count={5000} factor={4} saturation={0.5} fade speed={2} />

            <CentralStar />

            {planetsData.map((p, i) => (
                <Planet key={p.name} {...p} />
            ))}

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 1.5}
            />
        </>
    );
};

const HeroCanvas = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas
                frameloop="always"
                dpr={[1, 2]}
                camera={{ position: [5, 8, 15], fov: 40 }}
                gl={{ antialias: true, alpha: true }}
            >
                <SolarSystem />
            </Canvas>
        </div>
    );
};

export default HeroCanvas;
