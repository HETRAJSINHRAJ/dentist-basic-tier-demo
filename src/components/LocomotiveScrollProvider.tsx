"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function LocomotiveScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Don't initialize Locomotive Scroll if user prefers reduced motion
      return;
    }

    let locomotiveScroll: any = null;

    const initLocomotiveScroll = async () => {
      try {
        // Dynamically import Locomotive Scroll to avoid SSR issues
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        if (scrollRef.current) {
          locomotiveScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            class: 'is-revealed',
            smartphone: {
              smooth: false, // Disable smooth scroll on mobile for better performance
            },
            tablet: {
              smooth: true,
              breakpoint: 1024,
            },
          });

          locomotiveScrollRef.current = locomotiveScroll;

          // Update scroll on window resize
          const handleResize = () => {
            if (locomotiveScroll) {
              locomotiveScroll.update();
            }
          };

          window.addEventListener('resize', handleResize);

          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }
      } catch (error) {
        console.error('Error initializing Locomotive Scroll:', error);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initLocomotiveScroll();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  // Update scroll on route change
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      // Scroll to top on route change
      locomotiveScrollRef.current.scrollTo(0, {
        duration: 0,
        disableLerp: true,
      });

      // Update after route change
      setTimeout(() => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.update();
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div ref={scrollRef} data-scroll-container id="scroll-container">
        {children}
      </div>
    </>
  );
}

