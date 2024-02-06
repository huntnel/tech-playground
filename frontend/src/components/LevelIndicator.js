import React from 'react';
import { Button } from 'react-bootstrap';

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
        <Button key={i} 
                className={`${isFilled ? "custom-btn-round" : "custom-btn-transparent"}`}
                onClick={() => handleCircleClick(i)}
        >{i}</Button>
      );
      if (i < totalLevels) {
        circles.push(<div key={`line${i}`} className="line"></div>);
      }
      
      
      // circles.push(<Badge pill variant="primary" className="mt-1">{i}</Badge>);
    }

    // console.log('circles: ' + circles);

    for(const object in circles) {
      console.log(JSON.stringify(object))
    }
  
    return <div className="level-progress">{circles}</div>;
  };

export default LevelIndicator;