import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Container, Row, Col, Button } from 'react-bootstrap';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useState, useEffect, memo } from 'react';
import { andromeda } from '@uiw/codemirror-theme-andromeda';
import { langs } from '@uiw/codemirror-extensions-langs';
import ConsoleLog from './ConsoleLog';
import LevelIndicator from './LevelIndicator';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const baseUrl = 'https://vorrlgg23auln4chzzlnhk44g40taebi.lambda-url.us-west-1.on.aws/';


const Test = memo((props) => {

  const { totalTasks, changeTask, moduleNumber, currentTask, initialComment, image, message } = props;
  const navigate = useNavigate();
  const [value, setValue] = useState(initialComment);
  const [output, setOutput] = useState([]);
  const [taskComplete, setTaskComplete] = useState(false);

  useEffect(() => {
    setValue(initialComment);
  }, [initialComment]);

  const onChange = useCallback((val) => {
    setValue(val);
  }, []);

  const handleCodeSubmission = useCallback((code) => {
    const requestBody = {
      "code": code, 
      "module": moduleNumber,
      "task": currentTask,
    };

    axios.post(baseUrl, requestBody)
      .then((result) => {
        const newArray = [...output, result.data.result];
        if (result.data.taskComplete) {
          setTaskComplete(true);
        }
        if (result.data.taskComplete && result.data.consoleMessage) {
          newArray.push(result.data.consoleMessage);
        }
        setOutput(newArray);
      })
      .catch((error) => {
        console.error('error: ', error.response ? error.response.data : error.message);
        setOutput([...output, error.response ? error.response.data : error.message]);
      });
  }, [output, moduleNumber, currentTask]);

  const handleTaskChange = useCallback((task) => {
    if (task > totalTasks || task < 1) {
      navigate('/');
    }
    setOutput([]);
    changeTask(task);
  }, [navigate, totalTasks, changeTask]);
  
  const [showFirstPanel, setShowFirstPanel] = useState(true);
  const [showLastPanel, setShowLastPanel] = useState(true);

  return (<div>
      <div className="TopRow">
        <p>
          <button
            className="Button"
            onClick={() => setShowFirstPanel(!showFirstPanel)}
          >
            {showFirstPanel ? "hide" : "show"} top panel
          </button>
          &nbsp;
          <button
            className="Button"
            onClick={() => setShowLastPanel(!showLastPanel)}
          >
            {showLastPanel ? "hide" : "show"} bottom panel
          </button>
        </p>
      </div>
    <PanelGroup direction='horizontal'>
      {showFirstPanel && (
        <Panel className="panel" collapsible={true} order={1}>
          <Container className="task-background" style={{ height: '100vh', overflow: 'auto' }} fluid>
            <Row style={{ height: '100vh' }}>
              <Col xs={6} className="d-flex flex-column">
                
                <Row className="flex-fill align-items-center justify-content-center">
                  <Col xs={{ xs: 12 }} md={6}>
                    <LazyLoadImage src={image}
                    className='img-container'
                      alt="Challenge"
                      effect="blur"
                    />
                  </Col>
                </Row>
                <Row className="flex-fill align-items-center justify-content-center">
                  <Col xs={{ xs: 12 }} md={6} className="flex-fill white-background">
                    <p className='pixel-font'>Hi</p>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                  <Col xs={{ xs: 12 }} md={6} className="flex-fill">
                    <h4 className='center level-headings pixel-font'>Levels</h4>
                    <div className="level-progress-container">
                      <Button className='custom-btn smaller-margin-btn' style={{ marginBottom: "5px" }} onClick={() => navigate('/')}><span className='pixel-font'>Home</span></Button>
                      <LevelIndicator totalTasks={totalTasks} currentLevel={currentTask} onTaskClick={handleTaskChange} />
                      <Button className='custom-btn previous-btn smaller-margin-btn' style={{ marginBottom: "5px" }} onClick={() => handleTaskChange(parseInt(currentTask) - 1)}><span className='pixel-font'>{"Previous"}</span></Button>
                      <Button className='custom-btn smaller-margin-btn' style={{ marginBottom: "5px" }} onClick={() => handleTaskChange(parseInt(currentTask) + 1)}><span className='pixel-font'>{taskComplete ? "Next Level" : "Skip"}</span></Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Panel>
      )}
      <PanelResizeHandle />
      {showLastPanel && (
        <Panel className="panel" collapsible={true} order={2}>
          <Container>
            <Row>
              <Col xs={6} className="d-flex flex-column">
                <Row className="flex-fill align-items-center justify-content-center">
                  <Col xs={{ xs: 12 }} md={6} className="flex-fill">
                    <CodeMirror height='50vh' style={{ overflowY: 'auto', borderRadius: '10px' }} onSubmit={handleCodeSubmission} theme={andromeda} value={value} extensions={[langs.python()]} onChange={onChange} />
                    <Button className='mt-2 custom-btn-orange w-100' onClick={() => handleCodeSubmission(value)}><span className='pixel-font'>Run Code</span></Button>
                  </Col>
                </Row>
                <Row className="flex-fill align-items-center justify-content-center">
                  <Col xs={{ xs: 12 }} md={6} className="flex-fill">
                    {output !== null ? (
                      <ConsoleLog module={moduleNumber} task={currentTask} logs={output} />
                    ) : (
                      <span></span>
                    )}
                    <Button className='mt-2 custom-btn w-100' onClick={() => setOutput([])}><span  className='pixel-font'>Clear Console</span></Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Panel>
      )}
    </PanelGroup>
  </div>
  );
});

export default Test;
