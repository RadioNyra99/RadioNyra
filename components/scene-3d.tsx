"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import { useRef, useMemo, useEffect, useState } from "react"
import * as THREE from "three"

// Error Boundary specifically for the 3D scene to prevent whole app crashing
import { Component, type ReactNode } from "react"

class SceneErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("3D Scene Error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return null // Fail silently, just don't show background
    }
    return this.props.children
  }
}

function SubtleParticles() {
  const particlesRef = useRef<THREE.Points>(null!)
  const count = 600 // Reduced count for performance

  // Use state for positions to ensure client-side only generation (avoids hydration mismatch)
  const [positions, setPositions] = useState<Float32Array | null>(null)

  useEffect(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    setPositions(pos)
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      // Slower, smoother animation
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.05
    }
  })

  if (!positions) return null

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      {/* sizeAttenuation={false} avoids some WebGL floating point issues on older drivers */}
      <pointsMaterial size={0.08} color="#DC2626" transparent opacity={0.3} sizeAttenuation={true} depthWrite={false} />
    </points>
  )
}

function MinimalShapes() {
  const groupRef = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  useFrame((state) => {
    if (!groupRef.current) return

    const t = state.clock.getElapsedTime()
    // Add safety check for pointer
    const x = pointer?.x || 0
    const y = pointer?.y || 0

    groupRef.current.rotation.y = t * 0.05 + x * 0.1
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1 + y * 0.1
  })

  return (
    <group ref={groupRef}>
      {/* Professional red sphere */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
        <mesh position={[-4, 2, -6]} rotation={[0.3, 0.2, 0.1]}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial color="#DC2626" transparent opacity={0.6} metalness={0.2} roughness={0.3} />
        </mesh>
      </Float>

      {/* Professional blue torus */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1}>
        <mesh position={[4, -1, -7]} rotation={[0.5, 0.3, 0]}>
          <torusGeometry args={[1, 0.4, 16, 32]} />
          <meshStandardMaterial color="#2563EB" transparent opacity={0.5} metalness={0.2} roughness={0.3} />
        </mesh>
      </Float>

      {/* Soft pink/rose icosahedron */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={1.5}>
        <mesh position={[2, 3, -5]}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#FB7185" transparent opacity={0.5} metalness={0.2} roughness={0.3} />
        </mesh>
      </Float>

      {/* Subtle amber octahedron */}
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={1.3}>
        <mesh position={[-3, -2, -8]} rotation={[0.4, 0.6, 0.2]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#F59E0B" transparent opacity={0.45} metalness={0.2} roughness={0.3} />
        </mesh>
      </Float>
    </group>
  )
}

function SoftLighting() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#FFFFFF" distance={20} decay={2} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2563EB" distance={15} decay={2} />
      <spotLight position={[5, 15, 5]} angle={0.3} penumbra={1} intensity={0.5} color="#DC2626" />
    </>
  )
}

export default function Scene3D() {
  return (
    <SceneErrorBoundary>
      <div className="three-canvas-container">
        <Canvas
          camera={{ position: [0, 0, 14], fov: 50 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          dpr={[1, 1.5]} // Limit DPR to 1.5 for performance with 100k visitors
        >
          <SoftLighting />
          <Environment preset="city" />

          <MinimalShapes />
          <SubtleParticles />
        </Canvas>
      </div>
    </SceneErrorBoundary>
  )
}
