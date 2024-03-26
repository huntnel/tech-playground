import random

def getModuleTwoData(task):
 outputData = None
 methodSignature = None
 argumentParams = None
 consoleMessage = None
 taskCompletionContent = None

 if task == 1:
  outputData = {'type': 'VALUE', 'expectedValue': 'Teacher: You are ready to start the Quest!\n'}
  methodSignature = '(teacherThinksYouAreReady, teachersResponse, whyAmINotReady)'
  teacherThinksYouAreReady = random.choice([True, False])
  teachersResponse = "Teacher: You are ready to start the Quest!" if teacherThinksYouAreReady else 'You are not ready yet'
  whyAmINotReady = 'You are ready!' if teacherThinksYouAreReady else random.choice([
                    'Teacher: You need to practice your print statements',
                    'Teacher: You don\'t understand the true path yet',
                    'Teacher: I sense you are not truly committed to learning to code'])
  argumentParams = [teacherThinksYouAreReady, teachersResponse, whyAmINotReady]
  taskCompletionContent = "You are now ready to start your quest!"
 elif task ==2 :
  outputData = {'type': 'LENGTH'}
  methodSignature = '(magicalMap, fairy, fox, mermaid)'
  magicalMap = random.choice(['Follow Fox', 'Follow Fairy', 'Follow Mermaid'])
  fox = 'You chose to follow the fox'
  fairy = 'You chose to follow the fairy'
  mermaid = 'You chose to follow the mermaid'
  argumentParams = [magicalMap, fairy, fox, mermaid]
 elif task == 3: 
  outputData = {'type': 'VALUE', 'expectedValue': 'Troll: AHHHHH, YOU HAVE DEFEATED ME!! CROSS THE BRIDGE AND SPARE MY LIFE!\n'}
  methodSignature = '(trollIsWeak, spellWorks, fightOutcome, trollInsults)'
  trollIsWeak = random.choice([True, False])
  spellWorks = random.choice([True, False])
  fightOutcome = random.choice(['Troll: AHHHHH, YOU HAVE DEFEATED ME!! CROSS THE BRIDGE AND SPARE MY LIFE!'])
  trollInsults = random.choice(["Troll: HAH! YOU WILL HAVE TO CAST A STRONGER SPELL THAN THAT TO DEFEAT ME!",
                   "Troll: YOU HAD YOUR CHANCE TO DEFEAT ME! TOO BAD YOUR SPELL DIDN'T WORK!!",
                   "Troll: IS THAT THE BEST YOU CAN DO? I HAVE FOUGHT CHILDREN MORE POWERFUL THAN YOU!"])
  argumentParams = [trollIsWeak, spellWorks, fightOutcome, trollInsults]
 elif task == 4:
  outputData = {'type': 'LENGTH'}
  methodSignature = '(someoneAnswers, youEnterTheCottage, youCastInvisibilitySpell)'
  someoneAnswers = random.choice([True, False])
  youEnterTheCottage = 'After waiting for a while, nobody answers. As you cautiously approach the door, you decide to make sure no traps lay inside by closing and opening the door multiple times. After ensuring the coast is clear, you enter the cottage.'
  youCastInvisibilitySpell = 'Witch: WHO IS THERE???\n\nA witch staggers in front of the cottage just as your invisibility spell takes effect. She wobbly stands in the clearing, sniffing the air as you try not to make any noise.\n\nWitch: I CAN SMELL YOU! I WOULD COME FIND YOU AND TURN YOU INTO AN IMP, BUT I AM TOO TIRED FROM MAKING POTIONS ALL NIGHT!\nShe stands there for a moment longer, then slowly falls to the ground and begins snoring. You sneak past her into the cottage.'
  argumentParams = [someoneAnswers, youEnterTheCottage, youCastInvisibilitySpell]
 elif task == 5:
  outputData = {'type': 'LENGTH'}
  methodSignature = '(potionColor, putItInYourBag, grabSomeJerky, shouldIGrabIt)'
  potionColor = random.choice(['blue', 'brown', 'yellow'])
  putItInYourBag = "Potion was Blue!!\nAs you grab all the blue potions in the shop, one teeters until it falls and breaks on the cobblestone floor. Everywhere the blue splashes, the stone begins to sizzle and burn. You probably don't want to drink that potion! You decide to grab all the green ones instead."
  grabSomeJerky = "Potion was Brown!!\nFood is important on a long journey, so you grab all the jerky you can. Just as you almost fill your bag with jerky, you see another sign on the wall.\n\nSign: ALL JERKY IN THE OFFICE IS REPLICA ONLY. SEE THE OWNER FOR ACTUAL SAMPLES.\n\nWhat?? This witch has a cottage full of fake jerky? Frustrated with the whole situation, you dump out the jerky and fill your bag with red potions instead."
  shouldIGrabIt = "Potion was Yellow!!\nAs you stand contemplating if you should grab the yellow potions, you see a pamphlet lying on the table. You pick it up and see that it's a guide explaining what each potion does! After reading each potion's meaning, you realize that absolutely NONE of them could help you on your quest. They only do random things like make you smell things from a mile away or slow your fingernail growth. You decide not to grab any potions."
  argumentParams = [potionColor, putItInYourBag, grabSomeJerky, shouldIGrabIt]
 elif task == 6:
  outputData = {'type': 'VALUE', 'expectedValue': "Your defensive spell collides with Lily's angry red spell in the air in front of you. They spin together and emit a rainbow of colors on the cottage walls while humming loudly. After a few seconds, they erupt and send out a shockwave that knocks Lily over. While she is on the ground confused, you escape her cottage!\n"}
  methodSignature = '(lilyCastsSpell, youCastProtectionSpell, youCastDefensiveSpell, twoSpellsCollide, lilyGotYou, tryTheWindow)'
  lilyCastsSpell = random.choice([True, False])
  youCastProtectionSpell = random.choice([True, False])
  youCastDefensiveSpell = random.choice([True, False])
  twoSpellsCollide = "Your defensive spell collides with Lily's angry red spell in the air in front of you. They spin together and emit a rainbow of colors on the cottage walls while humming loudly. After a few seconds, they erupt and send out a shockwave that knocks Lily over. While she is on the ground confused, you escape her cottage!"
  lilyGotYou = "Since you didn't cast a protection spell, Lily's angry red spell hums towards you and hits you in the chest.\n\nLily: HAHAHA, I GOT YOU! NOW THAT I'VE TURNED YOU TO A FROG, YOU WILL STAY IN MY COTTAGE FOREVER!\n\nLooks like you'll need to try again!"
  tryTheWindow = "Since Lily hasn't thrown a spell yet, you decide to bolt for the window. You yank and pull on the window, but it's been nailed shut!\n\nLily: HAHA, FOOLISH TRAVELER! I KNEW YOU WOULD FALL FOR THE WINDOW TRICK!\n\nLily casts a spell at your back while you try the window and turns you into a frog! Looks like you'll need to try again."
  argumentParams = [lilyCastsSpell, youCastProtectionSpell, youCastDefensiveSpell, twoSpellsCollide, lilyGotYou, tryTheWindow]
 
 else:
  raise Exception('Task not specified in the request')


 return {
  'outputData' : outputData,
  'methodSignature': methodSignature, 
  'argumentParams': argumentParams,
  'consoleMessage': consoleMessage,
  'taskCompletionContent': taskCompletionContent
 }