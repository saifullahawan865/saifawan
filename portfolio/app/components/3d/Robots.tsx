"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";

function RobotTypeA() {
    const group = useRef<THREE.Group>(null);
    const head = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (group.current) {
            group.current.rotation.y = Math.sin(t * 0.5) * 0.2;
        }
        if (head.current) {
            head.current.rotation.y = Math.sin(t * 2) * 0.1;
        }
    });

    return (
        <group ref={group}>
            {/* Body */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 1.2, 0.6]} />
                <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.2} wireframe />
            </mesh>

            {/* Head */}
            <mesh ref={head} position={[0, 0.9, 0]}>
                <boxGeometry args={[0.7, 0.5, 0.5]} />
                <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
                {/* Eyes */}
                <mesh position={[0.2, 0, 0.26]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshBasicMaterial color="#00ffcc" />
                </mesh>
                <mesh position={[-0.2, 0, 0.26]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshBasicMaterial color="#00ffcc" />
                </mesh>
            </mesh>

            {/* Arms */}
            <mesh position={[0.7, 0.2, 0]}>
                <capsuleGeometry args={[0.15, 0.8, 4, 8]} />
                <meshStandardMaterial color="#00d4ff" wireframe />
            </mesh>
            <mesh position={[-0.7, 0.2, 0]}>
                <capsuleGeometry args={[0.15, 0.8, 4, 8]} />
                <meshStandardMaterial color="#00d4ff" wireframe />
            </mesh>

            {/* Antenna */}
            <mesh position={[0, 1.2, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 0.4]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh position={[0, 1.4, 0]}>
                <sphereGeometry args={[0.05]} />
                <meshBasicMaterial color="#ff0044" />
            </mesh>
        </group>
    );
}

function RobotTypeB() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (group.current) {
            group.current.rotation.y = -t * 0.5;
            group.current.position.y = Math.sin(t) * 0.2;
        }
    });

    return (
        <group ref={group}>
            {/* Core Sphere */}
            <mesh>
                <sphereGeometry args={[0.6, 32, 32]} />
                <MeshDistortMaterial
                    color="#8b5cf6"
                    speed={2}
                    distort={0.4}
                    radius={1}
                    emissive="#8b5cf6"
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Outer Rings */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.9, 0.02, 16, 100]} />
                <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" />
            </mesh>
            <mesh rotation={[0, Math.PI / 2, 0]}>
                <torusGeometry args={[1.1, 0.02, 16, 100]} />
                <meshStandardMaterial color="#00ffcc" emissive="#00ffcc" />
            </mesh>

            {/* Floating Bits */}
            {[...Array(6)].map((_, i) => (
                <mesh key={i} position={[Math.cos(i) * 1.2, Math.sin(i * 2) * 0.5, Math.sin(i) * 1.2]}>
                    <octahedronGeometry args={[0.1]} />
                    <meshStandardMaterial color="#ffffff" emissive="#ffffff" />
                </mesh>
            ))}
        </group>
    );
}

function RobotTypeC() {
    const group = useRef<THREE.Group>(null);
    const scanner = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (group.current) {
            group.current.rotation.z = Math.sin(t) * 0.1;
            group.current.position.y = Math.sin(t * 3) * 0.1; // Fast hover
        }
        if (scanner.current) {
            scanner.current.rotation.y = t * 2; // Rapid scan
        }
    });

    return (
        <group ref={group}>
            {/* Main Body */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI, 0, 0]}>
                <coneGeometry args={[0.5, 1.5, 4]} />
                <meshStandardMaterial color="#00ffcc" emissive="#00ffcc" emissiveIntensity={0.1} wireframe />
            </mesh>
            {/* Core */}
            <mesh position={[0, -0.3, 0]}>
                <octahedronGeometry args={[0.3]} />
                <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
            </mesh>
            {/* Ring/Scanner */}
            <mesh ref={scanner} position={[0, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.6, 0.05, 16, 4]} />
                <meshStandardMaterial color="#ff0044" emissive="#ff0044" emissiveIntensity={0.8} />
            </mesh>
        </group>
    );
}

function RobotTypeD() {
    const group = useRef<THREE.Group>(null);
    const outer = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (group.current) {
            group.current.rotation.x = t * 0.2;
            group.current.rotation.y = t * 0.3;
        }
        if (outer.current) {
            outer.current.scale.setScalar(1 + Math.sin(t * 2) * 0.1); // Pulsating effect
        }
    });

    return (
        <group ref={group}>
            {/* Core Box */}
            <mesh>
                <boxGeometry args={[0.8, 0.8, 0.8]} />
                <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.4} />
            </mesh>
            {/* Pulsating Outer Wireframe Box */}
            <mesh ref={outer}>
                <boxGeometry args={[1.2, 1.2, 1.2]} />
                <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" wireframe opacity={0.3} transparent />
            </mesh>
            {/* Corner Nodes */}
            {[
                [1, 1, 1],
                [-1, 1, 1],
                [1, -1, 1],
                [-1, -1, 1],
                [1, 1, -1],
                [-1, 1, -1],
                [1, -1, -1],
                [-1, -1, -1]
            ].map((pos, i) => (
                <mesh key={i} position={pos.map(p => p * 0.8) as [number, number, number]}>
                    <sphereGeometry args={[0.1]} />
                    <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" />
                </mesh>
            ))}
        </group>
    );
}

export default function Robots() {
    return (
        <>
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <group position={[-25, 0, -15]} scale={2.5}>
                    <RobotTypeA />
                </group>
            </Float>

            <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
                <group position={[25, 5, -18]} scale={3.5}>
                    <RobotTypeB />
                </group>
            </Float>

            <Float speed={4} rotationIntensity={1} floatIntensity={3}>
                <group position={[-20, 10, -25]} scale={2}>
                    <RobotTypeC />
                </group>
            </Float>

            <Float speed={2.5} rotationIntensity={3} floatIntensity={1.5}>
                <group position={[20, -8, -12]} scale={2.2}>
                    <RobotTypeD />
                </group>
            </Float>

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        </>
    );
}
