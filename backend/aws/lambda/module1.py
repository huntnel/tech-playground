
def getModuleOneData(task):
 outputData = None
 methodSignature = None
 argumentParams = None
 consoleMessage = None
 taskCompletionContent = None
 
 if task == 1:
  outputData = {'type': 'LENGTH'}
  methodSignature = '()'
  argumentParams = []
  taskCompletionContent = "Nice to meet you! Congratulations on completing your first task!"
 elif task == 2 :
  outputData = {'type': 'LENGTH'}
  methodSignature = '()'
  argumentParams = []
  taskCompletionContent = "You have learned about variables and how to use them! Continue on your journey!"
 elif task == 3: 
  outputData = {'type': 'SPECIFICLENGTH', 'expectedLength': 73}
  methodSignature = '(invisibilityPassage)'
  invisibilityPassage = "I command the unseen to become my might; render me hidden from all sight"
  argumentParams = [invisibilityPassage]
  taskCompletionContent = "You have mastered the invisibility spell!"
 elif task == 4:
  outputData = {'type': 'SPECIFICLENGTH', 'expectedLength': 73}
  methodSignature = '(ancientPhrase)'
  ancientPhrase = "I command the unseen to become my might; render me hidden from all sight"
  argumentParams = [ancientPhrase]
  taskCompletionContent = "Good job turning yourself invisible, now you won’t get in trouble with your teacher!"
 elif task == 5:
  outputData = {'type': 'SPECIFICLENGTH', 'expectedLength': 51}
  methodSignature = '()'
  argumentParams = []
  taskCompletionContent = "You now have access to the hidden details about the quest!"
 else:
  raise Exception('Task not specified in the request')


 return {
  'outputData' : outputData,
  'methodSignature': methodSignature, 
  'argumentParams': argumentParams,
  'consoleMessage': consoleMessage,
  'taskCompletionContent': taskCompletionContent
 }