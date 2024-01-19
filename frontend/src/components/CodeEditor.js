import CodeMirror from '@uiw/react-codemirror';
import React from 'react';
import { andromeda } from '@uiw/codemirror-theme-andromeda';
import { langs } from '@uiw/codemirror-extensions-langs';

function CodeEditor() {
  const [value, setValue] = React.useState("print('hello world!');");
  const onChange = React.useCallback((val) => {
    setValue(val);
  }, []);

  const handleButtonClick = (code) => {
    console.log("code: " + code);
  };

  return <div>
    <CodeMirror onSubmit={handleButtonClick} theme={andromeda} value={value} height="200px" extensions={[langs.python()]} onChange={onChange} />
    <button onClick={() => handleButtonClick(value)}>Run</button>
  </div>;
}

export default CodeEditor;