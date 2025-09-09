import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Animate dots
      gsap.fromTo(
        ".dot",
        { scale: 0, opacity: 0 },
        {
          scale: 3,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.05,
          delay: 0.3,
        }
      );

      // Animate lines
      gsap.from(".line", {
        strokeDasharray: 200,
        strokeDashoffset: 200,
        duration: 1,
        ease: "power2.out",
        stagger: 0.03,
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-12 md:py-20 gap-8"
    >
      {/* Left Visual */}
      <div className="w-full md:w-1/2 flex justify-center">
        <svg
          className="hero-lion w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Example dots */}
          <circle className="dot" cx="200" cy="100" r="5" fill="red" />
          <circle className="dot" cx="250" cy="150" r="5" fill="blue" />
          <circle className="dot" cx="150" cy="150" r="5" fill="purple" />

          {/* Example connecting lines */}
          <line className="line" x1="200" y1="100" x2="250" y2="150" stroke="black" />
          <line className="line" x1="200" y1="100" x2="150" y2="150" stroke="black" />
          <line className="line" x1="150" y1="150" x2="250" y2="150" stroke="black" />
        </svg>
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="hero-title text-4xl sm:text-6xl lg:text-8xl font-extrabold leading-none">
          Design <br /> Transform <br /> Accelerate
        </h1>

        <p className="hero-title text-lg sm:text-2xl md:text-3xl text-gray-600">
          Redefining user experiences through <br />
          Behavioural Science & AI
        </p>
      </div>
    </section>
  );
}
