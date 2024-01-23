import React from 'react';
const ConsoleLog = ({ logs }) => {
    return (
        <div className="console-log">
            {logs.map((log, index) => (
                <pre key={index}>{log}</pre>
            ))}
        </div>
    );
};
export default ConsoleLog;