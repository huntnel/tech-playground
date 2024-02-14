import { Container, Row, Col, Button } from 'react-bootstrap';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useState, useEffect, memo } from 'react';
import { andromeda } from '@uiw/codemirror-theme-andromeda';
import { langs } from '@uiw/codemirror-extensions-langs';
import ConsoleLog from './ConsoleLog';
import LevelIndicator from './LevelIndicator';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl = 'https://vorrlgg23auln4chzzlnhk44g40taebi.lambda-url.us-west-1.on.aws/';

const Task = memo((props) => {
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
        console.log('result: ' + JSON.stringify(result));
        if (result.data.taskComplete) {
          setTaskComplete(true);
        }
        if (result.data.taskComplete && result.data.consoleMessage) {
          newArray.push(result.data.consoleMessage);
        }
        setOutput(newArray);
      })
      .catch((error) => {
        console.error('fullError: ' + error);
        // console.error('error: ', error.response ? error.response.data : error.message);
        setOutput([...output, error.response ? error.response.data : error.message]);
      });
  }, [output, moduleNumber, currentTask]);

  

  const handleTaskChange = useCallback((task) => {
    if (task > totalTasks) {
      navigate('/modules');
    }
    setOutput([]);
    changeTask(task);
  }, [navigate, totalTasks, changeTask]);

  return (
    <Container className="background" style={{ height: '100vh', overflow: 'auto' }} fluid>
      <Row style={{ height: '100vh' }}>
        <Col xs={6} className="d-flex flex-column">
          
          <Row className="flex-fill align-items-center justify-content-center">
            <Col xs={{ xs: 12 }} md={6}>
              <img className='img-container' src={image} alt='Challenge' />
            </Col>
          </Row>
          <Row className="flex-fill align-items-center justify-content-center">
            <Col xs={{ xs: 12 }} md={6} className="flex-fill white-background">
              <p>{message}</p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col xs={{ xs: 12 }} md={6} className="flex-fill">
              <h4 className='center level-headings'>Levels</h4>
              <div className="level-progress-container">
                <Button className='custom-btn' style={{ marginBottom: "5px" }} onClick={() => navigate('/modules')}>Home</Button>
                <LevelIndicator totalTasks={totalTasks} currentLevel={currentTask} onTaskClick={handleTaskChange} />
                <Button className='custom-btn' style={{ marginBottom: "5px" }} onClick={() => handleTaskChange(parseInt(currentTask) + 1)}>{taskComplete ? "Next Level" : "Skip"}</Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={6} className="d-flex flex-column">
          <Row className="flex-fill align-items-center justify-content-center">
            <Col xs={{ xs: 12 }} md={6} className="flex-fill">
              <CodeMirror height='50vh' style={{ overflowY: 'auto', borderRadius: '10px' }} onSubmit={handleCodeSubmission} theme={andromeda} value={value} extensions={[langs.python()]} onChange={onChange} />
              <Button className='mt-2 custom-btn-orange w-100' onClick={() => handleCodeSubmission(value)}>Run Code</Button>
            </Col>
          </Row>
          <Row className="flex-fill align-items-center justify-content-center">
            <Col xs={{ xs: 12 }} md={6} className="flex-fill">
              {output !== null ? (
                <ConsoleLog module={moduleNumber} task={currentTask} logs={output} />
              ) : (
                <span></span>
              )}
              <Button className='mt-2 custom-btn w-100' onClick={() => setOutput([])}>Clear Console</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
});

export default Task;
