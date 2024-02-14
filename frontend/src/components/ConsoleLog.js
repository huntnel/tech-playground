import React from 'react';
const ConsoleLog = ({ module, task, logs }) => {
    return (
        <div className="console-log" style={{ overflowY: 'auto', flexGrow: 1 }}>
            {logs.map((log, index) => (
                <>
                    <pre className="console-text" key={module + '-' + task + '-' + index}>{log}</pre>
                </>
            ))}
        </div>
    );
};
export default ConsoleLog;