"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import HighEndParticles from "./Particles";
import CameraController from "./CameraController";
import Robots from "./Robots";

export default function Scene() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none bg-navy-950">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 75 }}
                dpr={[1, 2]} // Performance: limit pixel ratio on high-res screens
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance" // GPU Acceleration
                }}
            >
                <Suspense fallback={null}>
                    <HighEndParticles count={3000} />
                    <Robots />
                    <CameraController />
                    <AdaptiveDpr pixelated />
                    <AdaptiveEvents />
                    <Preload all />
                </Suspense>
            </Canvas>
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/20 to-navy-950 pointer-events-none" />
        </div>
    );
}
