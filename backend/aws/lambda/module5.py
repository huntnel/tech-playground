def getModuleFiveData(task):
 outputData = None
 methodSignature = '()'
 argumentParams = []
 consoleMessage = None
 taskCompletionContent = None

 if task == 1:
  outputData = {'type': 'VALUE', "expectedValue": 'My name is Gandalf\n'}
  taskCompletionContent = "Excellent magic and coding young adventurer. You have made your first class, and are well on your way to understanding the secrets of object oriented programming."
 elif task == 2 :
  outputData = {'type': 'VALUE', "expectedValue": "True\n"}
  taskCompletionContent = "Nice job! Now that you've created this wizard class, you can use it every time a coding or magic student becomes good enough to be called a wizard!"
 elif task == 3: 
  outputData = {'type': 'SPECIFICLENGTH', 'expectedLength': 40}
  taskCompletionContent = "You've completed Code Adventure's final software development task! Nice job adventurer! Not everyone makes it this far! Don't stop here. Keep pushing and learning. You won't regret it!"
 else:
  raise Exception('Task not specified in the request')


 return {
  'outputData' : outputData,
  'methodSignature': methodSignature, 
  'argumentParams': argumentParams,
  'consoleMessage': consoleMessage,
  'taskCompletionContent': taskCompletionContent
 }