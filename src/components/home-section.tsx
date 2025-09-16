import React from 'react';


export function HomeSection() {
  return (
    <section id="home" className="py-20 px-4 relative overflow-hidden" style={{ minHeight: 600 }}>
      {/* HDR background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundImage: 'url(/bg_sunrise.webp)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none'
        }}
      />
      {/* Bottom-centered canModel3.png image */}
      <img
        src="/src/assets/canModel3.png"
        alt="X6 Can"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 0,
          transform: 'translateX(-50%)',
          maxWidth: 240,
          height: 'auto',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />
      <div className="container mx-auto text-center relative z-10">
        {/* Centered canModel3.png image */}
        <img
          src="/canModel3.png"
          alt="X6 Can"
          className="mx-auto mb-8"
          style={{ maxWidth: 240, height: 'auto' }}
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          The Power is Yours
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          FUEL YOUR MIND AND BODY WITH X6 jnhbgf
        </p>
      </div>
    </section>
  );
}