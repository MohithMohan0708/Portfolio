// hooks/useMouseEffect.js
import { useEffect, useCallback, useRef } from 'react';

const useMouseEffect = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const moveTimeout = useRef(null);
  const animationFrame = useRef(null);

  const updateMousePosition = useCallback(() => {
    document.documentElement.style.setProperty('--mouse-x', `${mousePosition.current.x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mousePosition.current.y}px`);
  }, []);

  const handleMouseMove = useCallback((e) => {
    mousePosition.current.x = e.clientX;
    mousePosition.current.y = e.clientY;

    if (!isMoving.current) {
      isMoving.current = true;
      document.body.classList.add('mouse-move');
    }

    // Clear existing timeout and animation frame
    if (moveTimeout.current) {
      clearTimeout(moveTimeout.current);
    }
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    // Update position with animation frame
    animationFrame.current = requestAnimationFrame(updateMousePosition);

    // Set timeout to remove mouse-move class when mouse stops
    moveTimeout.current = setTimeout(() => {
      isMoving.current = false;
      document.body.classList.remove('mouse-move');
    }, 150);
  }, [updateMousePosition]);

  const handleTouchMove = useCallback((e) => {
    if (e.touches && e.touches.length > 0) {
      mousePosition.current.x = e.touches[0].clientX;
      mousePosition.current.y = e.touches[0].clientY;

      document.body.classList.add('mouse-move');

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      animationFrame.current = requestAnimationFrame(updateMousePosition);

      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
      moveTimeout.current = setTimeout(() => {
        document.body.classList.remove('mouse-move');
      }, 300);
    }
  }, [updateMousePosition]);

  const handleResize = useCallback(() => {
    if (!isMoving.current) {
      mousePosition.current.x = window.innerWidth / 2;
      mousePosition.current.y = window.innerHeight / 2;
      updateMousePosition();
    }
  }, [updateMousePosition]);

  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      document.body.classList.remove('mouse-move');
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    }
  }, []);

  useEffect(() => {
    // Initialize position to center
    mousePosition.current.x = window.innerWidth / 2;
    mousePosition.current.y = window.innerHeight / 2;
    updateMousePosition();

    // Add fade-in class to body
    document.body.classList.add('fade-in');

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Clear timeouts and animation frames
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      
      // Remove classes
      document.body.classList.remove('mouse-move', 'fade-in');
    };
  }, [handleMouseMove, handleTouchMove, handleResize, handleVisibilityChange, updateMousePosition]);
};

export default useMouseEffect;