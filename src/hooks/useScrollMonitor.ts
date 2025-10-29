"use client";

import { useEffect } from 'react';

/**
 * Hook to monitor scroll functionality and detect if scrolling is broken
 * Automatically applies fallback if scroll is not working
 */
export function useScrollMonitor() {
  useEffect(() => {
    let touchStartY = 0;
    let scrollAttempts = 0;
    let scrollWorking = false;

    // Monitor touch events to detect scroll attempts
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      scrollAttempts = 0;
      scrollWorking = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = Math.abs(touchY - touchStartY);

      // If user is trying to scroll (moved more than 10px)
      if (deltaY > 10) {
        scrollAttempts++;

        // Check if page is actually scrolling
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 0 || window.scrollY > 0) {
          scrollWorking = true;
        }

        // If user tried to scroll 3 times but scroll isn't working
        if (scrollAttempts >= 3 && !scrollWorking) {
          console.warn('Scroll appears to be broken, applying emergency fallback');
          
          // Apply emergency fallback
          document.documentElement.classList.add('scroll-broken');
          
          // Force native scrolling
          const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;
          if (scrollContainer) {
            scrollContainer.style.overflow = 'visible';
            scrollContainer.style.height = 'auto';
            scrollContainer.style.transform = 'none';
          }

          // Remove Locomotive Scroll classes
          document.documentElement.classList.remove('has-scroll-smooth', 'has-scroll-init');
          document.body.style.overflow = 'visible';
          document.documentElement.style.overflow = 'visible';
        }
      }
    };

    // Only monitor on touch devices
    if ('ontouchstart' in window) {
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });

      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, []);
}

