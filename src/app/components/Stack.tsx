import React, { useState } from "react";
import { motion } from "motion/react";

interface StackProps {
  cards: React.ReactNode[];
  randomRotation?: boolean;
  sensitivity?: number;
  sendToBackOnClick?: boolean;
}

export default function Stack({
  cards,
  randomRotation = false,
  sendToBackOnClick = false,
}: StackProps) {
  const [order, setOrder] = useState(cards.map((_, i) => i));

  const handleCardClick = (clickedIndex: number, e: React.MouseEvent) => {
    if (sendToBackOnClick) {
      e.stopPropagation();
      e.preventDefault();
      const topIndex = order[order.length - 1];
      if (clickedIndex === topIndex) {
        setOrder((prev) => {
          const newOrder = [...prev];
          const top = newOrder.pop();
          if (top !== undefined) newOrder.unshift(top);
          return newOrder;
        });
      }
    }
  };

  return (
    <div className="stack-container">
      {order.map((originalIndex, i) => {
        const isTop = i === order.length - 1;
        const rotation = randomRotation ? (originalIndex * 7 % 10) - 5 : 0;

        return (
          <motion.div
            key={originalIndex}
            className="card-rotate"
            style={{ zIndex: i }}
            animate={{ rotate: rotation, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={(e) => handleCardClick(originalIndex, e)}
            whileHover={isTop && sendToBackOnClick ? { scale: 1.05 } : {}}
          >
            <div className="card bg-background shadow-sm border border-border !rounded-none">
              {cards[originalIndex]}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
