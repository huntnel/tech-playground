import CodeMirror from '@uiw/react-codemirror';
import React from 'react';
import { andromeda } from '@uiw/codemirror-theme-andromeda';
import { langs } from '@uiw/codemirror-extensions-langs';
import ConsoleLog from './ConsoleLog';
import axios from 'axios';

function CodeEditor() {
  // const baseUrl = 'http://18.223.170.227:2358';
  const baseUrl = 'https://vorrlgg23auln4chzzlnhk44g40taebi.lambda-url.us-west-1.on.aws/';
  const [value, setValue] = React.useState("print('hello world!')");
  const [output, setOutput] = React.useState([]);
  const onChange = React.useCallback((val) => {
    setValue(val);
  }, []);

  const handleButtonClick = (code) => {
    const requestBody = {
      "code": code,
    };

    console.log("code: " + JSON.stringify(code));

    axios.post(baseUrl, requestBody)
    .then((result) => {
      const newArray = [...output, result.data.result];
      setOutput(newArray);
      console.log('result: ' + JSON.stringify(result));
    }).catch((error) => console.log('error: ' + JSON.stringify(error.response)));
  };

  return <div>
    <CodeMirror onSubmit={handleButtonClick} theme={andromeda} value={value} height="200px" extensions={[langs.python()]} onChange={onChange} />
    <button onClick={() => handleButtonClick(value)}>Run</button>
    <div>
      <h1>Output:</h1>

      {/* Display the data once it is available */}
      {output !== null ? (
        <ConsoleLog logs={output} />
      ) : (
        <p></p>
      )}
    </div>
  </div>;
}

export default CodeEditor;