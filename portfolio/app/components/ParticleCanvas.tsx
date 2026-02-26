"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 200 }: { count?: number }) {
    const mesh = useRef<THREE.Points>(null);
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x = state.clock.elapsedTime * 0.03;
            mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.06} color="#00d4ff" transparent opacity={0.6} sizeAttenuation />
        </points>
    );
}

function NeuralLines({ count = 30 }: { count?: number }) {
    const mesh = useRef<THREE.LineSegments>(null);
    const { positions, indices } = useMemo(() => {
        const pts: number[] = [];
        for (let i = 0; i < count; i++) {
            pts.push(
                (Math.random() - 0.5) * 18,
                (Math.random() - 0.5) * 18,
                (Math.random() - 0.5) * 18
            );
        }
        const idx: number[] = [];
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = pts[i * 3] - pts[j * 3];
                const dy = pts[i * 3 + 1] - pts[j * 3 + 1];
                const dz = pts[i * 3 + 2] - pts[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < 5) {
                    idx.push(i, j);
                }
            }
        }
        return {
            positions: new Float32Array(pts),
            indices: new Uint16Array(idx),
        };
    }, [count]);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.04;
            mesh.current.rotation.z = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <lineSegments ref={mesh}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="index" args={[indices, 1]} />
            </bufferGeometry>
            <lineBasicMaterial color="#8b5cf6" transparent opacity={0.2} />
        </lineSegments>
    );
}

export default function ParticleCanvas() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Particles count={250} />
                <NeuralLines count={40} />
            </Canvas>
        </div>
    );
}
