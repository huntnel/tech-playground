import React from 'react';

const LevelIndicator = ({ currentLevel, totalLevels, onCircleClick }) => {
    const circles = [];

    const handleCircleClick = (level) => {
        if (onCircleClick) {
          onCircleClick(level);
        }
      };
  
    for (let i = 1; i <= totalLevels; i++) {
      const isFilled = i <= currentLevel;
      circles.push(
        <div key={i} className={`circle ${isFilled ? 'filled' : 'open'}`} onClick={() => handleCircleClick(i)}></div>
      );
      if (i < totalLevels) {
        circles.push(<div key={`line${i}`} className="line"></div>);
      }
    }
  
    return <div className="level-progress">{circles}</div>;
  };

export default LevelIndicator;