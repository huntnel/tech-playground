import Task from './Task';
import React from 'react';
function Module() {
    const firstComment = "\"\"\"\nFirst, please print your wizard name to the console!\n\"\"\"";
    const secondComment = "\"\"\"\nlevel two\n\"\"\"";
    const thirdComment = "\"\"\"\nlevel three\n\"\"\"";
    const fourthComment = "\"\"\"\nlevel four\n\"\"\"";
    const firstMessage = (
        <span>
            Legend has it that thousands of years ago, an ancient wizard learned the secrets to becoming a CODING GURU. This powerful knowledge has kept him alive for thousands of years, but nobody knows where he is. However, if found, the wizard will instruct you on becoming a coding GURU. You, realizing how much power this knowledge will give you, have decided to embark on an epic quest to find this wizard, obtain his hidden knowledge, and become the <span className='logo-color'>MOST POWERFUL CODING GURU</span>.
        </span>
    );
    const secondMessage = (
        <span>
            Level Two
        </span>
    );
    const thirdMessage = (
        <span>
            Level Three
        </span>
    );
    const fourthMessage = (
        <span>
            Level Four
        </span>
    );

    const [currentTask, setCurrentTask] = React.useState(1);

    const handleTaskChange = (level) => {
        console.log('setting task to: ' + level);
        setCurrentTask(level);
    }

    const renderCurrentTask = () => {
        switch (currentTask) {
            case 1:
                return <Task changeTask={handleTaskChange} image="img/Wizard.jpg" totalLevels="4" currentLevel="1" initialComment={firstComment} message={firstMessage} />;
            case 2:
                return <Task changeTask={handleTaskChange} image="img/Wizard.jpg" totalLevels="4" currentLevel="2" initialComment={secondComment} message={secondMessage} />;
            case 3:
                return <Task changeTask={handleTaskChange} image="img/Wizard.jpg" totalLevels="4" currentLevel="3" initialComment={thirdComment} message={thirdMessage} />;
            case 4:
                return <Task changeTask={handleTaskChange} image="img/Wizard.jpg" totalLevels="4" currentLevel="4" initialComment={fourthComment} message={fourthMessage} />;
            default:
                return null; // Or render a default component if needed
        }
    };

    return (
        <div>
            {/* Render the current task */}
            {renderCurrentTask()}
            
        </div>
    );
}

export default Module;