import { useEffect, useState } from "react";

const ANIMATION_TIME_MS = 300;
const DELAY_MS = 16;

export const useAnimatedNumber = (currentValue: number) => {
  const [value, setValue] = useState(currentValue);

  useEffect(() => {
    if (currentValue !== value) {
      const numOfSteps = Math.floor(ANIMATION_TIME_MS / DELAY_MS);
      const delta = (currentValue - value) / numOfSteps;
      let steps = 0;
      let tmpIntervalId: number | undefined = undefined;
      const intervalFn = () => {
        steps++;
        if (steps === numOfSteps) {
          setValue(currentValue);
          clearInterval(tmpIntervalId);
        } else {
          setValue((prevVal) => prevVal + delta);
        }
      };
      tmpIntervalId = setInterval(intervalFn, DELAY_MS);
      return () => {
        clearInterval(tmpIntervalId);
      };
    }
  }, [currentValue]);

  return value;
};
