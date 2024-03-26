import random

def getModuleFourData(task):
 outputData = None
 methodSignature = None
 argumentParams = None
 consoleMessage = None
 taskCompletionContent = None

 if task == 1:
  outputData = {'type': 'VALUE', "expectedValue": 'You must always keep learning!\n'}
  methodSignature = '()'
  argumentParams = []
  taskCompletionContent = "Nice job student! functions are a great way to organize your code, and they will help you be a better magician and coder. They can also help you reuse code if needed."
 elif task == 2 :
  methodSignature = '(wizardSkillLevel)'
  wizardSkillLevel = random.randint(0, 10)
  outputData = {'type': 'RETURN', "expectedValue": wizardSkillLevel + 15}
  argumentParams = [wizardSkillLevel]
  taskCompletionContent = "Are you getting the hang of functions? I would say that you are! Keep it up student, and you will be able to write the most complex functions a person has ever seen!"
 elif task == 3: 
  methodSignature = '(spellStrength)'
  spellStrength = random.randint(0, 10)
  computedSpellStrength = spellStrength
  for i in range(0, 3):
   computedSpellStrength = ((computedSpellStrength + 3) * 4)/2
  outputData = {'type': 'RETURN', "expectedValue": computedSpellStrength}
  argumentParams = [spellStrength]
  taskCompletionContent = "Your teacher looks at you with a very proud look and says 'Amazing job student! You have come a long way from when you first walked through the doors of this school. There are few students that progress as rapidly as you are. If you keep learning this quickly, I might run out of things to teach you!'"

 else:
  raise Exception('Task not specified in the request')


 return {
  'outputData' : outputData,
  'methodSignature': methodSignature, 
  'argumentParams': argumentParams,
  'consoleMessage': consoleMessage,
  'taskCompletionContent': taskCompletionContent
 }