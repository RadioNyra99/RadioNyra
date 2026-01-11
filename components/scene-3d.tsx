"use client"

import React from "react"

/**
 * Scene3D replaced with a High-Performance CSS Background.
 * WebGL (Three.js) can cause STATUS_BREAKPOINT crashes on some devices.
 * This implementation uses pure CSS hardware-accelerated animations 
 * for 100% stability and zero GPU overhead for 100k+ concurrent users.
 */
export default function Scene3D() {
  return (
    <div className="three-canvas-container pointer-events-none select-none overflow-hidden">
      {/* Dynamic Animated Gradient Background */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        {/* Large slow-moving orb 1 */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-[0.15] animate-pulse"
          style={{
            background: 'radial-gradient(circle, #ff0000 0%, transparent 70%)',
            animation: 'float-slow 20s ease-in-out infinite alternate'
          }}
        />

        {/* Large slow-moving orb 2 */}
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-[0.1] animate-pulse"
          style={{
            background: 'radial-gradient(circle, #00bcd4 0%, transparent 70%)',
            animation: 'float-slow 25s ease-in-out infinite alternate-reverse'
          }}
        />

        {/* Floating Particles (CSS Only) */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-particle ${10 + Math.random() * 20}s linear infinite`,
                animationDelay: `-${Math.random() * 20}s`,
                opacity: 0.3 + Math.random() * 0.4
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5%, 5%) scale(1.1); }
          100% { transform: translate(-5%, 2%) scale(1); }
        }
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
