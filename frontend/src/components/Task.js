import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';
import { andromeda } from '@uiw/codemirror-theme-andromeda';
import { langs } from '@uiw/codemirror-extensions-langs';
import ConsoleLog from './ConsoleLog';
import LevelIndicator from './LevelIndicator';
import axios from 'axios';

function Task(props) {
    const baseUrl = 'https://vorrlgg23auln4chzzlnhk44g40taebi.lambda-url.us-west-1.on.aws/';
    const [value, setValue] = React.useState(props.initialComment);
    const [output, setOutput] = React.useState([]);
    const onChange = React.useCallback((val) => {
      setValue(val);
    }, []);
  
    const handleButtonClick = (code) => {
      const requestBody = {
        "code": code,
      };
  
      axios.post(baseUrl, requestBody)
      .then((result) => {
        const newArray = [...output, result.data.result];
        setOutput(newArray);
      }).catch((error) => {
        console.error('error: ' + JSON.stringify(error.response.data));
        const newArray = [...output, error.response.data];
        setOutput(newArray);
      });
    };

    const handleCircleClick = (level) => {
      // Render a different component based on the clicked level
      props.changeTask(level);
    };

  return (
    <Container className="background" style={{ height: '100vh', overflow: 'auto' }} fluid>
      <Row style={{ height: '100vh' }}>
        {/* First Column */}
        <Col xs={6} className="d-flex flex-column">
          {/* First Row in the First Column */}
          <Row className="flex-fill align-items-center justify-content-center">
            <Col xs={{xs:12}} md={6}>
              {/* Content for the first row in the first column */}
              <img className='img-container' src={props.image} alt='Challenge' />
            </Col>
          </Row>
          
          {/* Second Row in the First Column */}
          <Row className="flex-fill align-items-center justify-content-center">
            <Col xs={{xs:12}} md={6} className="flex-fill white-background">
              {/* Content for the second row in the first column */}
              <p>{props.message}</p>
            </Col>
          </Row>
        </Col>

        {/* Second Column */}
        <Col xs={6} className="d-flex flex-column">
          {/* First Row in the Second Column */}
          <Row className="flex-fill align-items-center justify-content-center">
            <Col xs={{xs:12}} md={6} className="flex-fill">
              {/* Content for the first row in the second column */}
              <CodeMirror height='35vh' style={{ overflowY: 'auto', borderRadius: '10px' }} onSubmit={handleButtonClick} theme={andromeda} value={value} extensions={[langs.python()]} onChange={onChange} />
              <Button className='mt-2 custom-btn-orange w-100' onClick={() => handleButtonClick(value)}>Run Code</Button>
            </Col>
          </Row>

          {/* Second Row in the Second Column */}
          <Row className="flex-fill align-items-center justify-content-center">
            <Col xs={{xs:12}} md={6} className="flex-fill">
              {/* Content for the second row in the second column */}
              {/* Display the data once it is available */}
              {output !== null ? (
                <ConsoleLog logs={output} />
                ) : (
                <span></span>
                )}
                <Button className='mt-2 custom-btn w-100' onClick={() => setOutput([])}>Clear Console</Button>
            </Col>
          </Row>
        </Col>
        <h4 className='center level-headings'>Levels</h4>
        <div className="level-progress-container">
          <Button className='custom-btn' style={{ marginBottom: "5px" }}>Home</Button>
          <LevelIndicator totalLevels={props.totalLevels} currentLevel={props.currentLevel} onCircleClick={handleCircleClick} />
          <Button className='custom-btn' style={{ marginBottom: "5px" }}>Next</Button>
        </div>
      </Row>
    </Container>
  );
}

export default Task;