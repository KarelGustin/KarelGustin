'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`}>
      <div className="loader-content">
        <div className="loader-text">
          <span className="loader-name">KAREL GUSTIN</span>
          <span className="loader-subtitle">Agentic Engineer</span>
        </div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
}
