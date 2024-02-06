import Task from './Task';
import React from 'react';
import getModuleData from '../moduleData';
function Module(props) {
    const data = getModuleData(props.moduleNumber);
    const [currentTask, setCurrentTask] = React.useState(1);

    const handleTaskChange = (level) => {
        setCurrentTask(level);
    }

    const renderCurrentTask = () => {
        switch (currentTask) {
            case 1:
                return <Task changeTask={handleTaskChange} image={data.images[0]} totalLevels="4" currentLevel="1" initialComment={data.comments[0]} message={data.messages[0]} />;
            case 2:
                return <Task changeTask={handleTaskChange} image={data.images[1]} totalLevels="4" currentLevel="2" initialComment={data.comments[1]} message={data.messages[1]} />;
            case 3:
                return <Task changeTask={handleTaskChange} image={data.images[2]} totalLevels="4" currentLevel="3" initialComment={data.comments[2]} message={data.messages[2]} />;
            case 4:
                return <Task changeTask={handleTaskChange} image={data.images[3]} totalLevels="4" currentLevel="4" initialComment={data.comments[3]} message={data.messages[3]} />;
            default:
                return null; // Or render a default component if needed
        }
    };

    return (
        <div>
            {renderCurrentTask()}
        </div>
    );
}

export default Module;