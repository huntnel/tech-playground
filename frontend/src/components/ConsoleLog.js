import React from 'react';
const ConsoleLog = ({ logs }) => {
    return (
        <div className="console-log" style={{ overflowY: 'auto', flexGrow: 1 }}>
            {logs.map((log, index) => (
                <>
                    <pre className="console-text" key={index}>{log}</pre>
                </>
            ))}
        </div>
    );
};
export default ConsoleLog;