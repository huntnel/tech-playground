import { Button } from 'react-bootstrap';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useState, useEffect, memo } from 'react';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { tags as t } from '@lezer/highlight';
import { langs } from '@uiw/codemirror-extensions-langs';
import ConsoleLog from './ConsoleLog';
import LevelIndicator from './LevelIndicator';
import Modal from './Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const baseUrl = 'https://vorrlgg23auln4chzzlnhk44g40taebi.lambda-url.us-west-1.on.aws/';


const Task = memo((props) => {

  const { totalTasks, changeTask, moduleNumber, currentTask, initialComment, image, message, codeHint } = props;
  const navigate = useNavigate();
  const [value, setValue] = useState(initialComment);
  const [output, setOutput] = useState([]);
  const [taskComplete, setTaskComplete] = useState(false);
  const [codeMirrorHeight, setCodeMirrorHeight] = useState('auto');
  const [showFirstPanel, setShowFirstPanel] = useState(true);
  const [showLastPanel, setShowLastPanel] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isCompletionModalOpen, setIsCompletionModalOpen] = useState(false);
  const [taskCompletionContent, setTaskCompletionContent] = useState(null);

  useEffect(() => {
    setValue(initialComment);
  }, [initialComment]);

  useEffect(() => {
    const targetNode = document.getElementById("mainContainer");
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (mutationList) => {
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
  });

  const openHintModal = () => {
    setIsHintModalOpen(true);
  };

  const closeHintModal = () => {
    setIsHintModalOpen(false);
  };

  const closeCompletionModal = () => {
    setIsCompletionModalOpen(false);
  };

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
          setIsCompletionModalOpen(true);
          setTaskCompletionContent(result.data.taskCompletionContent);
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
  

  const observeCodeMirror = useCallback(() => {
    const codeMirrorDiv = document.getElementById('codeMirrorDiv');
    const codeMirrorButton = document.getElementById('codeMirrorButton');

    const codeMirrorObserver = new ResizeObserver(entries => {
    const newCodeMirrorHeight = (codeMirrorDiv.offsetHeight - codeMirrorButton.offsetHeight - 25.16);
      if(newCodeMirrorHeight > 0){
        setCodeMirrorHeight(newCodeMirrorHeight + 'px');
      }
    });

    codeMirrorObserver.observe(codeMirrorDiv);

    return () => {
      codeMirrorObserver.disconnect();
    };
  }, []);

  return (
  <div className="task-background">
    <div>
      <Modal isOpen={isHintModalOpen} onClose={closeHintModal}>
        <div className='hintContent'>{codeHint}</div>
      </Modal>

      <Modal isOpen={isCompletionModalOpen} onClose={closeCompletionModal}>
      <div className='hintContent'>{taskCompletionContent}</div>
      </Modal>
    </div>
    <div id="mainContainer" className='mainContainer'>
      {showFirstPanel && (
        <div className="storyline-panel">
            <div>
              <LazyLoadImage src={image}
                className='img-container'
                  alt="Challenge"
                  effect="blur"
                />
            </div>
            <div className='storylineContainer'>
              <div className={`white-background text-center ${showLastPanel ? 'textBoxSmallerMargin' : 'textBoxBiggerMargin'}`}>
                <span className='pixel-font'>{message}</span>
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
        <div className="code-panel" id="codePanel" style={{ width: showFirstPanel ? '50%' : '100%' }}>
          <div id="codeDiv" className='codeContainer'>
            <div className={`codeEditorButtonContainer ${showFirstPanel ? 'codeEditorButtonContainerPartHeight' : 'codeEditorButtonContainerFullHeight'}`} id="codeMirrorDiv">
              <CodeMirror
                id="codeMirror"
                height={codeMirrorHeight}
                style={{ overflowY: 'auto', borderRadius: '10px' }}
                onSubmit={handleCodeSubmission}
                theme={vscodeDarkInit({
                  settings: {
                    background: '#23262E',
                    gutterBackground: '#23262E',
                    caret: '#c6c6c6',
                    fontFamily: 'monospace',
                  },
                  styles: [
                    { tag: [t.string, t.special(t.brace)], color: '#fff' },
                    { tag: t.comment, color: '#5c6166' }
                  ]
                })}
                value={value}
                extensions={[langs.python()]}
                onChange={onChange}
              />
              <Button id="codeMirrorButton" className='mt-2 custom-btn-orange w-100' onClick={() => handleCodeSubmission(value)}><span className='pixel-font'>Run Code</span></Button>
            </div>
            <div className={`consoleButtonContainer ${showFirstPanel ? 'consoleButtonContainerPartHeight' : 'consoleButtonContainerFullHeight'}`}>
              {output !== null ? (
                  <ConsoleLog module={moduleNumber} task={currentTask} logs={output} />
                ) : (
                  <span></span>
                )}
              <div style={{ display: "flex", justifyContent: 'space-evenly' }}>
                <Button className='mt-2 console-btn' onClick={() => setOutput([])}><span  className='pixel-font'>Clear Console</span></Button>
                <Button className='mt-2 console-btn' onClick={openHintModal}><span className='pixel-font'>Show Hint</span></Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className= 'bottomContainer'>
      <div className="container">
        <div className="row">
          <h4 className='center level-headings pixel-font'>Levels</h4>
        </div> 
        <div className="row">
          <div className="col d-flex align-items-center justify-content-center">
            {showLastPanel && (<button
              className="instructions-btn custom-btn center level-headings pixel-font"
              onClick={() => setShowFirstPanel(!showFirstPanel)}
            >
              {showFirstPanel ? "Hide Story" : "Show Story"}
            </button>)}
          </div>
          <div className="col">
            <div className="d-flex">
              <Button className='custom-btn smaller-margin-btn' onClick={() => handleTaskChange(parseInt(currentTask) - 1)}><span className='pixel-font'>Back</span></Button>
              <LevelIndicator totalTasks={totalTasks} currentLevel={currentTask} onTaskClick={handleTaskChange} />
              <Button className='custom-btn smaller-margin-btn' onClick={() => handleTaskChange(parseInt(currentTask) + 1)}><span className='pixel-font'>{taskComplete ? "Next" : "Skip"}</span></Button>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <Button className='custom-btn smaller-margin-btn' onClick={() => navigate('/')}><span className='pixel-font'>Home</span></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
});

export default Task;
