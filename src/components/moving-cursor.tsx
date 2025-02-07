import { motion } from "motion/react";
import { useEffect, useState } from "react";

const getRandomMovement = () => ({
  x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
  y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
});

const getRandomDuration = () => Math.random() * 4 + 4;

const MovingCursor = ({ Component }: { Component: React.FC }) => {
  const [movement, setMovement] = useState(getRandomMovement);
  const [duration, setDuration] = useState(getRandomDuration());

  useEffect(() => {
    const interval = setInterval(() => {
      setMovement(getRandomMovement());
      setDuration(getRandomDuration());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{
        x: movement.x,
        y: movement.y,
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "easeInOut",
        },
      }}
      className="absolute"
    >
      <Component />
    </motion.div>
  );
};

export default MovingCursor;
