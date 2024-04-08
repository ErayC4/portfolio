import React, { useEffect } from 'react';

const FollowPath = () => {
  useEffect(() => {
    const path = document.getElementById('motionPath');
    const point = document.getElementById('movingPoint');
    const pathLength = path.getTotalLength();

    const movePointAlongPath = () => {
      const distance = window.scrollY;
      const pointPosition = path.getPointAtLength(distance);
      point.setAttribute('cx', pointPosition.x);
      point.setAttribute('cy', pointPosition.y);
    }

    document.addEventListener('scroll', movePointAlongPath);
    movePointAlongPath();

    return () => {
      document.removeEventListener('scroll', movePointAlongPath);
    };
  }, []);

  return (
    <svg viewBox="0 0 100 100">
      <path id="motionPath" d="M10 30 Q 50 0 90 30 T 90 70"></path>
      <circle id="movingPoint" cx="10" cy="30" r="3" fill="red"></circle>
    </svg>
  );
}

export default FollowPath;
