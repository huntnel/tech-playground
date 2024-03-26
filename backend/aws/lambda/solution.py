import inspect
import sys
import io
import re

class InvalidCodeException(Exception): pass

class Solution(object):
    taskPassed = False
    executionOutput = None
    taskCompletionContent = None
    meetsCodeRequirements = None

    def __init__(self, outputData, methodSignature, taskFunction, consoleMessage = None, taskCompletionContent = None):
        localNamespace = {}
        exec(taskFunction, {}, localNamespace)
        taskFuncName = self.getFunctionName(taskFunction)
        taskFunk = localNamespace.get(taskFuncName)
        
        if not inspect.isfunction(taskFunk):
            raise InvalidCodeException(f'The user provided code is not a valid function: {taskFunction}, type: {type(taskFunction)}')

        if not str(inspect.signature(taskFunk)) == methodSignature:
            raise InvalidCodeException('The user provided function does not have the correct method signature')

        self.outputData = outputData
        self.methodSignature = methodSignature
        self.taskFunction = taskFunk
        self.consoleMessage = consoleMessage
        self.taskCompletionContent = taskCompletionContent
    
    def getFunctionName(self, taskFunction):
        match = re.search(r'def\s+(\w+)\s*\(', taskFunction)
        if match:
            return match.group(1)
        else:
            raise InvalidCodeException('Unable to extract the method name for evaluation')

    def run(self, *args):
        old_stdout = sys.stdout
        sys.stdout = io.StringIO()
        try:
            returnValue = self.taskFunction(*args)
            self.executionOutput = sys.stdout.getvalue()
            
            if(self.outputData['type'] == 'VALUE'):
                print("self.executionOutput: " + self.executionOutput)
                if self.executionOutput == self.outputData['expectedValue']:
                    self.taskPassed = True
            elif(self.outputData['type'] == 'PARTIALVALUE'):
                if self.outputData['expectedValue'] in self.executionOutput:
                    self.taskPassed = True
            elif(self.outputData['type'] == 'LENGTH'):
                if(len(self.executionOutput) > 0):
                    self.taskPassed = True
            elif(self.outputData['type'] == 'SPECIFICLENGTH'):
                if(len(str(self.executionOutput)) > self.outputData['expectedLength']):
                    self.taskPassed = True
            elif(self.outputData['type'] == 'RETURN'):
                if(returnValue == self.outputData['expectedValue']):
                    self.taskPassed = True
            else: 
                raise InvalidCodeException('Task validation type not specified')
                
        except Exception as e:
            self.executionOutput = str(e)
        finally:
            sys.stdout = old_stdout