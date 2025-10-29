"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import { useScrollMonitor } from '@/hooks/useScrollMonitor';

export default function LocomotiveScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<any>(null);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [scrollFailed, setScrollFailed] = useState(false);

  // Monitor scroll functionality and apply fallback if needed
  useScrollMonitor();

  useEffect(() => {
    // Detect if device is mobile (screen width < 768px with touch support)
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice && isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Don't initialize Locomotive Scroll if user prefers reduced motion
      return;
    }

    // If scroll previously failed, don't try again
    if (scrollFailed) {
      return;
    }

    let locomotiveScroll: any = null;
    let scrollTestTimeout: NodeJS.Timeout;

    const initLocomotiveScroll = async () => {
      try {
        // Dynamically import Locomotive Scroll to avoid SSR issues
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        if (scrollRef.current) {
          // Mobile-optimized configuration
          const mobileConfig = {
            el: scrollRef.current,
            smooth: true,
            // Lighter smoothing on mobile for better performance
            lerp: isMobile ? 0.15 : 0.1,
            // Lower multiplier on mobile for more controlled scrolling
            multiplier: isMobile ? 0.8 : 1,
            // Lighter touch multiplier for better mobile feel
            touchMultiplier: 2,
            class: 'is-revealed',
            // Mobile-specific settings
            smartphone: {
              smooth: true, // Enable smooth scroll on mobile
              lerp: 0.15, // Faster lerp for more responsive feel
              multiplier: 0.8, // Lighter scroll speed
            },
            tablet: {
              smooth: true,
              lerp: 0.12,
              breakpoint: 1024,
            },
            // Improve mobile performance
            reloadOnContextChange: true,
          };

          locomotiveScroll = new LocomotiveScroll(mobileConfig);
          locomotiveScrollRef.current = locomotiveScroll;

          // Test if scrolling is working after initialization
          if (isMobile) {
            scrollTestTimeout = setTimeout(() => {
              // Check if the scroll container has proper height
              if (scrollRef.current) {
                const containerHeight = scrollRef.current.scrollHeight;
                const viewportHeight = window.innerHeight;

                // If container is taller than viewport but scroll isn't working
                if (containerHeight > viewportHeight) {
                  // Test scroll functionality
                  const testScroll = () => {
                    try {
                      locomotiveScroll?.scrollTo(10, { duration: 0, disableLerp: true });
                      setTimeout(() => {
                        locomotiveScroll?.scrollTo(0, { duration: 0, disableLerp: true });
                      }, 50);
                    } catch (error) {
                      console.warn('Locomotive Scroll test failed, falling back to native scroll');
                      setScrollFailed(true);
                      if (locomotiveScroll) {
                        locomotiveScroll.destroy();
                        locomotiveScrollRef.current = null;
                      }
                    }
                  };
                  testScroll();
                }
              }
            }, 500);
          }

          // Update scroll on window resize with debouncing
          let resizeTimeout: NodeJS.Timeout;
          const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
              if (locomotiveScroll) {
                locomotiveScroll.update();
              }
            }, 150);
          };

          window.addEventListener('resize', handleResize);

          // Update scroll on orientation change (important for mobile)
          const handleOrientationChange = () => {
            setTimeout(() => {
              if (locomotiveScroll) {
                locomotiveScroll.update();
              }
            }, 300);
          };

          window.addEventListener('orientationchange', handleOrientationChange);

          return () => {
            clearTimeout(scrollTestTimeout);
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleOrientationChange);
          };
        }
      } catch (error) {
        console.error('Error initializing Locomotive Scroll:', error);
        setScrollFailed(true);
        // Ensure native scrolling works if Locomotive fails
        if (scrollRef.current) {
          scrollRef.current.style.overflow = 'visible';
          scrollRef.current.style.height = 'auto';
        }
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
  }, [isMobile, scrollFailed]);

  // Update scroll on route change
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      // Scroll to top on route change
      try {
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
      } catch (error) {
        // Fallback to native scroll if Locomotive fails
        window.scrollTo(0, 0);
      }
    } else {
      // Use native scroll to top if Locomotive isn't initialized
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div
        ref={scrollRef}
        data-scroll-container
        id="scroll-container"
        className={scrollFailed ? 'scroll-fallback' : ''}
        style={scrollFailed ? { overflow: 'visible', height: 'auto' } : undefined}
      >
        {children}
      </div>
    </>
  );
}

