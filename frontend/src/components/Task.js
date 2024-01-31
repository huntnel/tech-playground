import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';
import { andromeda } from '@uiw/codemirror-theme-andromeda';
import { langs } from '@uiw/codemirror-extensions-langs';
import ConsoleLog from './ConsoleLog';
import axios from 'axios';

function Task() {
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

  return (
    <Container style={{ height: '100vh', overflow: 'hidden' }}>
      <Row className="h-50"> {/* Half of the container height */}
        <Col className="d-flex flex-grow-1 align-items-center justify-content-center">
          1 of 2
        </Col>
        <Col className="d-flex flex-grow-1 align-items-center justify-content-center">
            <CodeMirror onSubmit={handleButtonClick} theme={andromeda} value={value} extensions={[langs.python()]} onChange={onChange} />
            <button onClick={() => handleButtonClick(value)}>Run</button>
        </Col>
      </Row>
      <Row className="h-50"> {/* Half of the container height */}
        <Col className="d-flex flex-grow-1 align-items-center justify-content-center">
          1 of 3
        </Col>
        <Col className="d-flex flex-grow-1 align-items-center justify-content-center">
          {/* Display the data once it is available */}
          {output !== null ? (
            <ConsoleLog logs={output} />
            ) : (
            <div></div>
            )}
        </Col>
      </Row>
    </Container>
  );
}

export default Task;