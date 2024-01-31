import CodeMirror from '@uiw/react-codemirror';
import React from 'react';
import { andromeda } from '@uiw/codemirror-theme-andromeda';
import { langs } from '@uiw/codemirror-extensions-langs';
import ConsoleLog from './ConsoleLog';
import axios from 'axios';

function CodeEditor() {
  const baseUrl = 'https://vorrlgg23auln4chzzlnhk44g40taebi.lambda-url.us-west-1.on.aws/';
  const [value, setValue] = React.useState("\"\"\"\nFirst, please print your wizard name to the console!\n\"\"\"");
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
    }).catch((error) => {
      console.log('error: ' + JSON.stringify(error.response.data));
      const newArray = [...output, error.response.data];
      setOutput(newArray);
    });
  };

  return <div>
    <div className='background'>
    <h1 className='center-text logo-orange'>Code Editor</h1>
    <div>
      <img className='wizard' src='img/Wizard.jpg' alt='Challenge' />
    </div>
    <div className='white-background'>
      <p className='center-text'>Welcome to your next big adventure! This is <span className='logo-color'>Code Adventure</span>, and we need your help in seeking <span className='logo-orange'>secret hidden knowledge!</span></p>
      <p className='center-text'>Legend has it
        that thousands of years ago, an acient wizard learned the secrets to becoming a CODING GURU. This powerful knowledge has kept him 
        alive for thousands of years, but nobody knows where he is. However, if found, the wizard will instruct you on becoming a coding GURU. 
        You, realizing how much power this knowledge will give you, have decided to embark on an epic quest to find this wizard, obtain his 
        hidden knowledge, and become the <span className='logo-color'>MOST POWERFUL CODING GURU</span>.
      </p>
    </div>
    <br></br>
    </div>
    <div className='code-editor'>
      <div className='white-background'>
        <CodeMirror onSubmit={handleButtonClick} theme={andromeda} value={value} height="200px" extensions={[langs.python()]} onChange={onChange} />
        <button onClick={() => handleButtonClick(value)}>Run</button>
      </div>
      <div>
        <h2 className='logo-orange'>Output:</h2>
        {/* Display the data once it is available */}
        {output !== null ? (
          <ConsoleLog logs={output} />
        ) : (
          <p></p>
        )}
      </div>
    </div>
    
  </div>;
}

export default CodeEditor;