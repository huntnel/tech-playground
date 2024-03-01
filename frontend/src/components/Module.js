import Task from './Task';
import {useMemo, useState, memo} from 'react';
import getModuleData from '../moduleData';

const Module = memo((props) => {
    const { moduleNumber } = props;
    const data = useMemo(() => getModuleData(moduleNumber), [moduleNumber]);
    const [currentTask, setCurrentTask] = useState(1);

    const handleTaskChange = (level) => {
        setCurrentTask(level);
    }

    return (
        <div>
            <Task key={currentTask} changeTask={handleTaskChange} image={data.images[currentTask - 1]} moduleNumber={moduleNumber} totalTasks={data.totalTasks} currentTask={currentTask} initialComment={data.comments[currentTask - 1]} message={data.messages[currentTask - 1]} codeHint={data.codeHint[currentTask - 1]} />
        </div>
    );
});
export default Module;