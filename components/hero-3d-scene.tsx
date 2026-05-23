"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text, RoundedBox, Environment, Html } from "@react-three/drei"
import * as THREE from "three"

function FloatingLetter({ 
  letter, 
  position, 
  color, 
  bgColor, 
  speed = 1,
  rotationIntensity = 0.5,
  floatIntensity = 1
}: { 
  letter: string
  position: [number, number, number]
  color: string
  bgColor: string
  speed?: number
  rotationIntensity?: number
  floatIntensity?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <Float 
      speed={speed} 
      rotationIntensity={rotationIntensity} 
      floatIntensity={floatIntensity}
    >
      <group position={position}>
        <RoundedBox 
          ref={meshRef}
          args={[0.8, 0.8, 0.2]} 
          radius={0.15} 
          smoothness={4}
        >
          <meshStandardMaterial color={bgColor} />
        </RoundedBox>
        <Text
          position={[0, 0, 0.15]}
          fontSize={0.4}
          color={color}
          font="/fonts/Inter_Bold.json"
          anchorX="center"
          anchorY="middle"
        >
          {letter}
        </Text>
      </group>
    </Float>
  )
}

function FloatingIcon({ 
  icon, 
  position, 
  color, 
  bgColor,
  speed = 1,
  size = 0.6
}: { 
  icon: string
  position: [number, number, number]
  color: string
  bgColor: string
  speed?: number
  size?: number
}) {
  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <group position={position}>
        <RoundedBox args={[size, size, 0.15]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color={bgColor} transparent opacity={0.8} />
        </RoundedBox>
        <Html center transform scale={0.15} position={[0, 0, 0.1]}>
          <div className="text-2xl" style={{ color }}>
            {icon}
          </div>
        </Html>
      </group>
    </Float>
  )
}

function CentralLogo() {
  const groupRef = useRef<THREE.Group>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.05
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      glowRef.current.scale.set(scale, scale, 1)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Outer glow ring */}
      <mesh ref={glowRef} position={[0, 0, -0.2]}>
        <circleGeometry args={[1.8, 64]} />
        <meshBasicMaterial color="#432577" transparent opacity={0.3} />
      </mesh>
      
      {/* Main circle background */}
      <mesh position={[0, 0, -0.1]}>
        <circleGeometry args={[1.5, 64]} />
        <meshStandardMaterial color="#432577" />
      </mesh>

      {/* Logo image using Html */}
      <Html center transform scale={0.4} position={[0, 0, 0.1]}>
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-cover-PJMN1FpcIL7o4NjWk9qNTwg6DWbQTV.jpg"
            alt="Language Treats Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </Html>
    </group>
  )
}

function ParticleField() {
  const count = 50
  const mesh = useRef<THREE.InstancedMesh>(null)

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 5 - 2
      temp.push({ x, y, z, speed: Math.random() * 0.5 + 0.2 })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    const dummy = new THREE.Object3D()
    
    particles.forEach((particle, i) => {
      const t = state.clock.elapsedTime * particle.speed
      dummy.position.set(
        particle.x + Math.sin(t) * 0.3,
        particle.y + Math.cos(t * 0.8) * 0.3,
        particle.z
      )
      dummy.scale.setScalar(0.02 + Math.sin(t * 2) * 0.01)
      dummy.updateMatrix()
      mesh.current!.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#FDC500" transparent opacity={0.6} />
    </instancedMesh>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FDC500" />
      
      {/* Central Logo */}
      <CentralLogo />

      {/* Floating Letters */}
      <FloatingLetter 
        letter="A" 
        position={[-2.5, 1.5, 0]} 
        color="#2B215A" 
        bgColor="#FDC500"
        speed={1.5}
        rotationIntensity={0.8}
        floatIntensity={1.2}
      />
      <FloatingLetter 
        letter="B" 
        position={[2.5, 1.2, 0.5]} 
        color="#FFFFFF" 
        bgColor="rgba(255,255,255,0.2)"
        speed={1.2}
        rotationIntensity={0.6}
        floatIntensity={1}
      />
      <FloatingLetter 
        letter="C" 
        position={[-2, -1.5, 0.3]} 
        color="#FFFFFF" 
        bgColor="#432577"
        speed={1.8}
        rotationIntensity={0.7}
        floatIntensity={1.1}
      />

      {/* Floating Icons */}
      <FloatingIcon 
        icon="📚" 
        position={[2.8, 0, 0.2]} 
        color="#FDC500" 
        bgColor="rgba(67, 37, 119, 0.6)"
        speed={1.3}
      />
      <FloatingIcon 
        icon="🌍" 
        position={[-2.8, 0, 0.4]} 
        color="#FFFFFF" 
        bgColor="rgba(255, 255, 255, 0.15)"
        speed={1.1}
      />
      <FloatingIcon 
        icon="🎤" 
        position={[0.5, -2, 0.3]} 
        color="#FDC500" 
        bgColor="rgba(253, 197, 0, 0.2)"
        speed={1.4}
        size={0.5}
      />
      <FloatingIcon 
        icon="💬" 
        position={[2, -1.5, 0.1]} 
        color="#FDC500" 
        bgColor="rgba(255, 255, 255, 0.1)"
        speed={1.6}
        size={0.55}
      />

      {/* Particle Field */}
      <ParticleField />

      <Environment preset="city" />
    </>
  )
}

export function Hero3DScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
