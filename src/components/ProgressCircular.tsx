"use client";

import { Circle } from "rc-progress";
import { useEffect, useState } from "react";

interface ProgressCircularProps {
  name: string;
  value: number;
}

const ProgressCircular: React.FC<ProgressCircularProps> = ({ name, value }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let currentProgress = 0;
    const increment = value / 100;

    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= value) {
        clearInterval(interval);
        setProgress(value);
      } else {
        setProgress(currentProgress);
      }
    }, 20); // Speed of increment

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="w-[10rem] h-[10rem] relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-custom-gradient" />

      <div className="absolute z-10 flex flex-col items-center justify-center">
        <p className="text-lg font-semibold text-[#c7d1ea]">{name}</p>
        <p className="text-[#c7d1ea] text-md">{Math.round(progress)}%</p>
      </div>

      <Circle
        percent={progress}
        strokeWidth={6}
        strokeColor="#06b6d4"
        trailColor="#d3d3d3"
        className="z-20 w-full h-full"
      />
    </div>
  );
};

export default ProgressCircular;
