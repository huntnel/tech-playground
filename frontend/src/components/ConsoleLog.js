import React from 'react';
const ConsoleLog = ({ logs }) => {
    console.log('logs: ' + JSON.stringify(logs));
    return (
        <div className="console-log" style={{ overflowY: 'auto', flexGrow: 1 }}>
            {logs.map((log, index) => (
                <>
                    <pre key={index}>{log}</pre>
                </>
            ))}
        </div>
    );
};
export default ConsoleLog;