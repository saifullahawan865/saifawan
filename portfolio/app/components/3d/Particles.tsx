"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSize;
  uniform vec2 uMouse;
  uniform float uScroll;

  attribute float aScale;
  attribute vec3 aRandomness;

  varying vec3 vColor;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // Continuous floating motion
    modelPosition.x += sin(uTime * 0.2 + modelPosition.z * 0.5) * aRandomness.x * 0.2;
    modelPosition.y += cos(uTime * 0.2 + modelPosition.x * 0.5) * aRandomness.y * 0.2;
    modelPosition.z += sin(uTime * 0.2 + modelPosition.y * 0.5) * aRandomness.z * 0.2;

    // Mouse Interaction
    float dist = distance(modelPosition.xy, uMouse * 10.0);
    float strength = 1.0 - smoothstep(0.0, 4.0, dist);
    modelPosition.xy += normalize(modelPosition.xy - uMouse * 10.0) * strength * 0.5;

    // Scroll depth effect
    modelPosition.z += uScroll * 0.1;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    // Size attenuation
    gl_PointSize = uSize * aScale * uPixelRatio;
    gl_PointSize *= (1.0 / - viewPosition.z);

    vColor = vec3(0.0, 0.8, 1.0); // Default cyan
    if(aScale > 0.8) vColor = vec3(0.5, 0.4, 1.0); // Larger dots are more purple
  }
`;

const fragmentShader = `
  varying vec3 vColor;

  void main() {
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 10.0);

    vec3 color = mix(vec3(0.0), vColor, strength);
    gl_FragColor = vec4(color, strength);
  }
`;

export default function HighEndParticles({ count = 2000 }) {
    const mesh = useRef<THREE.Points>(null);
    const material = useRef<THREE.ShaderMaterial>(null);

    const particlesPosition = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return pos;
    }, [count]);

    const aScale = useMemo(() => {
        const scale = new Float32Array(count);
        for (let i = 0; i < count; i++) scale[i] = Math.random();
        return scale;
    }, [count]);

    const aRandomness = useMemo(() => {
        const rand = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) rand[i] = Math.random();
        return rand;
    }, [count]);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uPixelRatio: { value: typeof window !== "undefined" ? window.devicePixelRatio : 1 },
        uSize: { value: 40 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uScroll: { value: 0 }
    }), []);

    useFrame((state) => {
        if (material.current) {
            material.current.uniforms.uTime.value = state.clock.elapsedTime;
            material.current.uniforms.uMouse.value.lerp(
                new THREE.Vector2(state.mouse.x, state.mouse.y),
                0.05
            );
            material.current.uniforms.uScroll.value = window.scrollY;
        }
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.01;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[particlesPosition, 3]} />
                <bufferAttribute attach="attributes-aScale" args={[aScale, 1]} />
                <bufferAttribute attach="attributes-aRandomness" args={[aRandomness, 3]} />
            </bufferGeometry>
            <shaderMaterial
                ref={material}
                depthWrite={false}
                transparent={true}
                blending={THREE.AdditiveBlending}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </points>
    );
}
