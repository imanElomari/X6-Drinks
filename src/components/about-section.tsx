import { Canvas, useLoader } from "@react-three/fiber";
import {
  useGLTF,
  Float,
  Environment,
  Bounds,
  OrbitControls,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { Briefcase, Users, Award, IceCream, Leaf, Zap } from "lucide-react";
import * as THREE from "three";
import { Suspense } from "react";
import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "@/components/ui/shadcn-io/comparison";



export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2">
          {/* Comparison Slider: Two images */}
          <Comparison className="h-[500px] rounded-xl overflow-hidden" mode="hover">
            <ComparisonItem position="left" className="flex items-center justify-center">
              <img
                src="/x6_model.png"
                alt="X6 Can"
                className="object-contain h-full"
                width={600}
                height={900}
              />
            </ComparisonItem>
            <ComparisonItem position="right" className="flex items-center justify-center" >
              <img
                src="/x6_can.png"
                alt="X6 Can"
                className="object-contain h-full"
                width={600}
                height={900}
              />
            </ComparisonItem>
            <ComparisonHandle />
          </Comparison>
          {/* Right: Text & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="px-2 md:px-8 lg:px-12 xl:px-16"
          >
            <h2 className="text-5xl font-extrabold text-blue-700 mb-4 leading-tight">
              About X6
            </h2>
            <div className="w-12 md:w-16 h-1 bg-blue-600 rounded mb-5" />
            <p className="text-base md:text-lg mb-6 text-gray-700 dark:text-gray-300">
              X6 Drinks powers your day with bold taste and pure energy. Crafted
              to refresh, recharge, and keep you moving.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-6">
              {/* Energy Boost */}
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl shadow px-4 py-4 flex-1">
                <Zap className="w-7 h-7 text-red-500" />
                <div>
                  <div className="text-lg font-bold text-red-600">
                    Energy Boost
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Without Crash
                  </div>
                </div>
              </div>

              {/* Crisp & Refreshing */}
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl shadow px-4 py-4 flex-1">
                <IceCream className="w-7 h-7 text-blue-500" />
                <div>
                  <div className="text-lg font-bold text-blue-600">
                    Crisp & Refreshing
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Taste
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl shadow px-4 py-4 flex-1">
                <Leaf className="w-7 h-7 text-green-500" />
                <div>
                  <div className="text-lg font-bold text-green-600">
                    Better Ingredients
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    For You
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
