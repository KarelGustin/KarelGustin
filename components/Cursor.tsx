'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorFollower = followerRef.current;
    
    if (!cursor || !cursorFollower) return;

    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      cursor.style.display = 'none';
      cursorFollower.style.display = 'none';
      document.body.style.cursor = 'default';
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    // Set initial position
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      
      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top = followerY + 'px';
      
      requestAnimationFrame(animateFollower);
    };

    // Ensure cursor is visible
    cursor.style.display = 'block';
    cursor.style.opacity = '1';
    cursor.style.visibility = 'visible';
    cursorFollower.style.display = 'block';
    cursorFollower.style.opacity = '0.5';
    cursorFollower.style.visibility = 'visible';

    document.addEventListener('mousemove', handleMouseMove);
    animateFollower();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="cursor" 
        style={{ 
          display: 'block', 
          opacity: 1,
          visibility: 'visible'
        }}
      ></div>
      <div 
        ref={followerRef}
        className="cursor-follower" 
        style={{ 
          display: 'block', 
          opacity: 0.5,
          visibility: 'visible'
        }}
      ></div>
    </>
  );
}
