import Task from './Task';
import React from 'react';
import getModuleData from '../moduleData';
function Module(props) {
    const data = getModuleData(props.moduleNumber);
    const [currentTask, setCurrentTask] = React.useState(1);

    const handleTaskChange = (level) => {
        setCurrentTask(level);
    }

    const taskComponents = [];
    for (let iCount = 0; iCount < data.totalTasks; iCount++) {
        taskComponents.push(<Task changeTask={handleTaskChange} image={data.images[iCount]} moduleNumber={props.moduleNumber} totalTasks={data.totalTasks} currentTask={iCount + 1} initialComment={data.comments[iCount]} message={data.messages[iCount]} />);
    }

    const renderCurrentTask = () => {
        return taskComponents[currentTask - 1];
    };

    return (
        <div>
            {renderCurrentTask()}
        </div>
    );
}

export default Module;