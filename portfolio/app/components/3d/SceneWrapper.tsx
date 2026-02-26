"use client";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Scene = dynamic(() => import("./Scene"), { ssr: false });
const CustomCursor = dynamic(() => import("../ui/CustomCursor"), { ssr: false });

export default function SceneWrapper({ children }: { children: ReactNode }) {
    return (
        <>
            <CustomCursor />
            <Scene />
            <div className="relative z-10">
                {children}
            </div>
        </>
    );
}
