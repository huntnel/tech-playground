import { Button } from 'react-bootstrap';
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
  const [codeMirrorHeight, setCodeMirrorHeight] = useState('auto');

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

  const observeCodeMirror = useCallback(() => {
    const codeMirrorDiv = document.getElementById('codeMirrorDiv');
    const codeMirrorButton = document.getElementById('codeMirrorButton');

    const codeMirrorObserver = new ResizeObserver(entries => {
    const newCodeMirrorHeight = (codeMirrorDiv.offsetHeight - codeMirrorButton.offsetHeight - 15);
      if(newCodeMirrorHeight > 0){
        setCodeMirrorHeight(newCodeMirrorHeight + 'px');
      }
    });

    codeMirrorObserver.observe(codeMirrorDiv);

    return () => {
      codeMirrorObserver.disconnect();
      console.log('i disconnected');
    };
  }, []);

  useEffect(() => {

  const targetNode = document.getElementById("mainContainer");
  const config = { attributes: true, childList: true, subtree: true };

  observeCodeMirror();
    

  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList" 
      && mutation.addedNodes.length > 0 
      && typeof mutation.addedNodes[0] === 'object'
      && mutation.addedNodes[0].id === 'codePanel'){
        observeCodeMirror();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  }, []);

  //Once the width of the codePanel reaches 90vw, make the vh of each component 85vh.

  return (
  <div className="task-background" style={{ height: '100vh', flexWrap: 'wrap', display: 'flex', overflow: 'hidden' }}>
    <div id="mainContainer" style={{ height: '85vh', display:'flex', alignItems: 'center', width: '100%'  }}>
      {showFirstPanel && (
        <div className="storyline-panel">
            <div>
              <LazyLoadImage src={image}
                className='img-container'
                  alt="Challenge"
                  effect="blur"
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div className="white-background text-center">
                <span className='pixel-font'>In order to access the library, you must tell the guardian your wizard name.</span>
              </div>
              {!showLastPanel && (
                <button
                className="custom-btn-orange Button center level-headings pixel-font" style={{ padding: ".75rem", borderRadius: '10px', width: '10rem'}}
                onClick={() => setShowLastPanel(!showLastPanel)}>
                {showLastPanel ? "" : "Begin Task"}
              </button>
              )}
            </div>
            
        </div>
      )}
      
      {showLastPanel && (
        <div className="code-panel" id="codePanel">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }} id="codeDiv">
            <div style={{ width: '45vw', height: '42.5vh' }} id="codeMirrorDiv">
              <CodeMirror id="codeMirror" height={codeMirrorHeight} style={{ overflowY: 'auto', borderRadius: '10px' }} onSubmit={handleCodeSubmission} theme={andromeda} value={value} extensions={[langs.python()]} onChange={onChange} />
              <Button id="codeMirrorButton" style={{ marginBottom: '.5rem' }} className='mt-2 custom-btn-orange w-100' onClick={() => handleCodeSubmission(value)}><span className='pixel-font'>Run Code</span></Button>
            </div>
            <div style={{ width: '45vw', height: '42.5vh' }}>
              {output !== null ? (
                  <ConsoleLog module={moduleNumber} task={currentTask} logs={output} />
                ) : (
                  <span></span>
                )}
              <Button className='mt-2 custom-btn w-100' onClick={() => setOutput([])}><span  className='pixel-font'>Clear Console</span></Button>
            </div>
          </div>
        </div>
      )}
    </div>
    <div style={{ height: '15vh' }}>
      <h4 className='center level-headings pixel-font'>Levels</h4>
      
      <div className="level-progress-container">
        <div>
          <button
            className="custom-btn Button center level-headings pixel-font"
            onClick={() => setShowFirstPanel(!showFirstPanel)}
          >
            {showFirstPanel ? "Hide Instructions" : "Show Instructions"}
          </button>
        </div>
        <div className="d-flex">
          <Button className='custom-btn smaller-margin-btn' style={{ marginBottom: "5px" }} onClick={() => navigate('/')}><span className='pixel-font'>Home</span></Button>
          <LevelIndicator totalTasks={totalTasks} currentLevel={currentTask} onTaskClick={handleTaskChange} />
          <Button className='custom-btn previous-btn smaller-margin-btn' style={{ marginBottom: "5px" }} onClick={() => handleTaskChange(parseInt(currentTask) - 1)}><span className='pixel-font'>{"Previous"}</span></Button>
          <Button className='custom-btn smaller-margin-btn' style={{ marginBottom: "5px" }} onClick={() => handleTaskChange(parseInt(currentTask) + 1)}><span className='pixel-font'>{taskComplete ? "Next Level" : "Skip"}</span></Button>
        </div>
        <div>
          <button
            className="Button"
            onClick={() => setShowLastPanel(!showLastPanel)}>
            {showLastPanel ? "Hide" : "Show"} Hint
          </button>
        </div>
      </div>
    </div>
  </div>
  );
});

export default Test;
