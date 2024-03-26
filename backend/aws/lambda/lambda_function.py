import json
import sys
import io
import Solution
import module1
import module2
import module3
import module4
import module5
from http import HTTPStatus
from urllib.error import HTTPError
from Exception import exception_handler

def lambda_handler(event, context):
    
    try:
        body = parseBody(event)
        userFunction = body.get("code", "")
        solutionData = getSolutionData(body)
        return evaluateTask(solutionData, userFunction)
    except Exception as e:
        return exception_handler(e)
    
def parseBody(event):
    try:
        return json.loads(event.get("body", "{}"))
    except json.JSONDecodeError:
        raise Exception('Invalid JSON in request body')
    
def getSolutionData(body):
    solutionObjectData = None
    module = body.get("module", 0)
    task = body.get("task", 0)
    
    try:
        module = int(module)
    except ValueError as e:
        raise Exception('Module must be an integer')

    try:
        task = int(task)
    except ValueError:
        raise Exception('Task must be an integer')

    if module == 1:
        solutionObjectData = module1.getModuleOneData(task)
    elif module == 2:
        solutionObjectData = module2.getModuleTwoData(task)
    elif module == 3:
        solutionObjectData = module3.getModuleThreeData(task)
    elif module == 4:
        solutionObjectData = module4.getModuleFourData(task)
    elif module == 5:
        solutionObjectData = module5.getModuleFiveData(task)
    else:
        raise Exception('Module not specified in the request')
    return solutionObjectData
    
def evaluateTask(solutionData, userFunction):
    taskState = Solution.Solution(solutionData['outputData'], solutionData['methodSignature'], userFunction, solutionData['consoleMessage'], solutionData['taskCompletionContent'])
    try:
        taskState.run(*solutionData['argumentParams'])
        return {
            'statusCode': 200,
            'body': json.dumps({
                    'result': taskState.executionOutput,
                    'taskComplete': taskState.taskPassed,
                    'consoleMessage': taskState.consoleMessage if taskState.consoleMessage else None,
                    'taskCompletionContent': taskState.taskCompletionContent if taskState.taskCompletionContent else None,
                })
        }
    except Exception as e:
        raise Exception(str(e))