import random

def getModuleThreeData(task):
 outputData = None
 methodSignature = None
 argumentParams = None
 consoleMessage = None
 taskCompletionContent = None

 if task == 1:
  doorOpened = "The door has opened!"
  outputData = {'type': 'PARTIALVALUE', 'expectedValue': doorOpened}
  methodSignature = '(doorSpellStrength, castSpell, doorOpened)'
  doorSpellStrength = 10 
  castSpell = 'The door is still closed. Keep casting your spell!'
  argumentParams = [doorSpellStrength, castSpell, doorOpened]
  taskCompletionContent = "Congratulations! You have cast the spell to open the door! Now enter and continue your quest."
 elif task == 2 :
  allTorchesLit = "All torches have been lit!"
  outputData = {'type': 'PARTIALVALUE', 'expectedValue': allTorchesLit}
  methodSignature = '(lightTorch, allTorchesLit)'
  lightTorch = "The number of torches that have been lit is"
  argumentParams = [lightTorch, allTorchesLit]
  taskCompletionContent = "As the final torch sparks to life, you can peer down the hallway. You walk down it, dodging cobwebs and dripping water until you reach a strange door."
 elif task == 3: 
  doorFinallyOpened = "The door has opened!"
  outputData = {'type': 'PARTIALVALUE', 'expectedValue': doorFinallyOpened}
  methodSignature = '(numOfSymbols, symbolsGlow, doorFinallyOpened)'
  numOfSymbols = 11
  symbolsGlow = True
  argumentParams = [numOfSymbols, symbolsGlow, doorFinallyOpened]
  taskCompletionContent = "As the door creaks open, a soft glow illuminates the ground in front of you. You peer in the room and see gold as far as the eye can see!"
 elif task == 4:
  theDragonAwakes = "The dragon has awoken."
  outputData = {'type': 'PARTIALVALUE', 'expectedValue': theDragonAwakes}
  methodSignature = '(dragonIsAsleep, numOfSteps, theDragonAwakes)'
  dragonIsAsleep = True
  numOfSteps = 0
  argumentParams = [dragonIsAsleep, numOfSteps, theDragonAwakes]
  taskCompletionContent = "As you take another step, your foot hits some gold coins that clank loudly. The dragon twitches, and then his large eyes roll open. He turns and looks at you, and you can feel the heat of his fire breath."
 elif task == 5:
  yourMagicIsStrong = "You have dodged Tyzar's first wave of fire attacks"
  outputData = {'type': 'PARTIALVALUE', 'expectedValue': yourMagicIsStrong}
  methodSignature = '(dodgeFireAttack, yourMagicIsStrong)'
  dodgeFireAttack = "Tyzar the Wise: I DON'T CARE IF I HAVE TO TRY {} TIMES, YOU WILL FAIL!"
  argumentParams = [dodgeFireAttack, yourMagicIsStrong]
  taskCompletionContent = "You are strong! Your teacher has trained you well to be able to withstand Tyzar's magic. Tyzar doesn't give up though and attempts to defeat you one more time with his fire!"
 elif task == 6:
  youDefeatedTyzar = "You defeated Tyzar the Great Dragon!"
  outputData = {'type': 'PARTIALVALUE', 'expectedValue': youDefeatedTyzar}
  methodSignature = '(tyzarStrength, tyzarAttack, blockFireSpell, shieldSpell, castSpell, youDefeatedTyzar, attackType)'
  tyzarStrength = random.randint(8, 11)
  tyzarAttack = [random.choice(["Fire", "Hit", "Other"]) for _ in range(tyzarStrength)]
  attackType = tyzarStrength-1
  blockFireSpell = "Tyzar attacks with fire. You blocked it with the block fire spell."
  shieldSpell = "Tyzar tries to hit you. You have blocked it with the shield spell."
  castSpell = "You have cast your spell to attack Tyzar!"
  taskCompletionContent = "Congratulations! You have defeated Tyzar the Great Dragon!"
  argumentParams = [tyzarStrength, tyzarAttack, blockFireSpell, shieldSpell, castSpell, youDefeatedTyzar, attackType]
 else:
  raise Exception('Task not specified in the request')


 return {
  'outputData' : outputData,
  'methodSignature': methodSignature, 
  'argumentParams': argumentParams,
  'consoleMessage': consoleMessage,
  'taskCompletionContent': taskCompletionContent
 }