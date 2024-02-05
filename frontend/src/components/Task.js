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
  
      axios.post(baseUrl, requestBody)
      .then((result) => {
        // console.log('result: ' + JSON.stringify(result));
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
      console.log(`Clicked on level ${level}`);
      // You can use state management or routing to render different components
      // Here, we'll just log the clicked level for demonstration purposes
    };

  return (
    <Container style={{ height: '100vh', overflow: 'auto' }} fluid>
      <Row style={{ height: '100vh' }}>
        {/* First Column */}
        <Col xs={6} className="d-flex flex-column">
          {/* First Row in the First Column */}
          <Row className="flex-fill align-items-center justify-content-center">
            <Col xs={{xs:12}} md={6}>
              {/* Content for the first row in the first column */}
              <img className='wizard' src='img/Wizard.jpg' alt='Challenge' />
            </Col>
          </Row>
          
          {/* Second Row in the First Column */}
          <Row className="flex-fill align-items-center justify-content-center">
            <Col xs={{xs:12}} md={6} className="flex-fill">
              {/* Content for the second row in the first column */}
              <p>Legend has it
                that thousands of years ago, an acient wizard learned the secrets to becoming a CODING GURU. This powerful knowledge has kept him 
                alive for thousands of years, but nobody knows where he is. However, if found, the wizard will instruct you on becoming a coding GURU. 
                You, realizing how much power this knowledge will give you, have decided to embark on an epic quest to find this wizard, obtain his 
                hidden knowledge, and become the <span className='logo-color'>MOST POWERFUL CODING GURU</span>.
              </p>
            </Col>
          </Row>
        </Col>

        {/* Second Column */}
        <Col xs={6} className="d-flex flex-column">
          {/* First Row in the Second Column */}
          <Row className="flex-fill align-items-center justify-content-center">
            <Col xs={{xs:12}} md={6} className="flex-fill">
              {/* Content for the first row in the second column */}
              <CodeMirror height='40vh' style={{ overflowY: 'auto' }} onSubmit={handleButtonClick} theme={andromeda} value={value} extensions={[langs.python()]} onChange={onChange} />
              <Button className='mt-2' style={{ backgroundColor:"#327C81", border: "2px solid #327C81" }} onClick={() => handleButtonClick(value)}>Run</Button>
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
            </Col>
          </Row>
        </Col>
        <h4 className='center level-headings logo-orange'>Levels</h4>
        <div className="level-progress-container">
          <Button style={{ backgroundColor:"#327C81", marginBottom: "5px", border: "2px solid #327C81" }}>Home</Button>
          <LevelIndicator totalLevels={4} currentLevel={3} onCircleClick={handleCircleClick} />
          <Button style={{ backgroundColor:"#327C81", marginBottom: "5px", border: "2px solid #327C81" }}>Next</Button>
        </div>
      </Row>
    </Container>
  );
}

export default Task;