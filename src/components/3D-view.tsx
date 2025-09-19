import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

function CanModel() {
  const gltf = useGLTF("/model.gltf");
  const labelTexture = useLoader(THREE.TextureLoader, "/X6-label.png");
  labelTexture.flipY = false;

  gltf.scene.traverse((obj) => {
    if (
      obj instanceof THREE.Mesh &&
      obj.material &&
      obj.material.name === "X6-label.png"
    ) {
      obj.material.map = labelTexture;
      obj.material.needsUpdate = true;
    }
  });

  return <primitive object={gltf.scene} scale={2} />;
}

export function ThreeDView() {
  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-blue-700 dark:text-white mb-4 leading-tight flex items-center gap-3">
          <span>3D View</span>
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-300 animate-pulse">
            Interactive
          </span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 rounded mb-6" />
        <p className="text-lg mb-2 leading-relaxed text-gray-700 dark:text-gray-300">
          Explore our product in 3D! Rotate, zoom, and inspect every detail for
          a closer look.
        </p>
        <p className="text-sm text-blue-600 dark:text-blue-300 mb-6 flex items-center gap-2">
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
            className="animate-bounce"
          >
            <circle cx="10" cy="10" r="9" stroke="#2563eb" strokeWidth="2" />
            <path
              d="M10 6v8M6 10h8"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Click and drag to interact with the 3D model
        </p>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-2xl h-[550px] rounded-2xl shadow-lg flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
            <Canvas camera={{ position: [0, 1.2, 6], fov: 40 }}>
              {/* Balanced lighting */}
              <ambientLight intensity={0.7} />
              <spotLight
                position={[5, 8, 5]}
                angle={0.3}
                penumbra={1}
                intensity={1.2}
                castShadow
              />
              <directionalLight
                position={[-5, 4, -5]}
                intensity={0.6}
                color="#ffffff"
              />

              {/* Model */}
              <Suspense fallback={null}>
                <CanModel />
                <Environment preset="studio" />
              </Suspense>

              {/* Soft ground shadow */}
              <ContactShadows
                position={[0, -1.2, 0]}
                opacity={0.25}
                scale={12}
                blur={2.5}
                far={3}
              />

              <OrbitControls
                target={[0, 1, 0]} // aim at can’s center
                enablePan={false}
                enableZoom={true}
                autoRotate={true}
                autoRotateSpeed={1.9} 
                minDistance={3}
                maxDistance={10}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
