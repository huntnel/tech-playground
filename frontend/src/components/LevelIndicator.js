import React from 'react';
import { Button } from 'react-bootstrap';

const LevelIndicator = ({ currentLevel, totalTasks, onTaskClick }) => {
    const circles = [];

    const handleTaskClick = (level) => {
        if (onTaskClick) {
          onTaskClick(level);
        }
    };
  
    for (let i = 1; i <= totalTasks; i++) {
      const isFilled = i <= currentLevel;
      circles.push(
        <Button key={i} 
                className={`${isFilled ? "custom-btn-round" : "custom-btn-transparent"}`}
                onClick={() => handleTaskClick(i)}
        >{i}</Button>
      );
      if (i < totalTasks) {
        circles.push(<div key={`line${i}`} className="line"></div>);
      }
    }
  
    return <div className="level-progress">{circles}</div>;
  };

export default LevelIndicator;