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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">3D View</h2>
        </div>
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
