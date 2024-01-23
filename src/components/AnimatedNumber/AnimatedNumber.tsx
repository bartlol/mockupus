import React from "react";
import { useAnimatedNumber } from "../../hooks/useAnimatedNumber";

const AnimatedNumber = ({ num }: { num: number }) => {
  const val = useAnimatedNumber(num);
  return <span>{val.toFixed(2)}</span>;
};

export default AnimatedNumber;
