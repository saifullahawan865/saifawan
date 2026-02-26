"use client";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import * as THREE from "three";

export default function CameraController() {
    const { scrollYProgress } = useScroll();

    useFrame((state) => {
        // Subtle rotation based on scroll
        state.camera.position.x = Math.sin(scrollYProgress.get() * Math.PI) * 2;
        state.camera.position.y = -scrollYProgress.get() * 5;
        state.camera.lookAt(0, -scrollYProgress.get() * 5, 0);
    });

    return null;
}
