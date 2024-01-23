import CodeMirror from '@uiw/react-codemirror';
import React from 'react';
import { andromeda } from '@uiw/codemirror-theme-andromeda';
import { langs } from '@uiw/codemirror-extensions-langs';
import axios from 'axios';

function CodeEditor() {
  const baseUrl = 'http://18.223.170.227:2358';
  const [value, setValue] = React.useState("print('hello world!')");
  const onChange = React.useCallback((val) => {
    setValue(val);
  }, []);

  const handleButtonClick = (code) => {
    const requestBody = {
      "source_code": code,
      "language_id": 71,
      "number_of_runs": null,
      "stdin": "Judge0",
      "expected_output": null,
      "cpu_time_limit": null,
      "cpu_extra_time": null,
      "wall_time_limit": null,
      "memory_limit": null,
      "stack_limit": null,
      "max_processes_and_or_threads": null,
      "enable_per_process_and_thread_time_limit": null,
      "enable_per_process_and_thread_memory_limit": null,
      "max_file_size": null,
      "enable_network": null
    };
    console.log("code: " + code);
    axios.post(`${baseUrl}/submissions`, requestBody)
    .then((result) => {
      console.log('result: ' + JSON.stringify(result.data.token));
      axios.get(`${baseUrl}/submissions/${result.data.token}`).then((result) => {
        console.log('result: ' + JSON.stringify(result));
      }).catch((error) => console.log('error: ' + JSON.stringify(error.response)));
    }).catch((error) => console.log('error: ' + JSON.stringify(error.response)));
  };

  return <div>
    <CodeMirror onSubmit={handleButtonClick} theme={andromeda} value={value} height="200px" extensions={[langs.python()]} onChange={onChange} />
    <button onClick={() => handleButtonClick(value)}>Run</button>
  </div>;
}

export default CodeEditor;