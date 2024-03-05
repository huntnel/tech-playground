function getModuleData(moduleNumber){
    switch (moduleNumber) {
        case 1:
            return module1();
        case 2:
            return module2();
        case 3:
            return module3();
        case 4:
            return module4();
        default:
            return null;
    }
}

function module1() {
    const firstMessage = (
        <span>
            The day is finally here! You have arrived at Luminara, the best wizard school on the planet. You are so excited to enter it's doors and learn the knowledge others have sought for centuries. A wizard greets you at the door, and requests that you say your new wizard name to enter the school.
        </span>
    );
    const secondMessage = (
        <span>
            After unpacking your things, you head over to meet your teacher. After finding him and introducing yourself, you ask if he can teach you an invisibility spell. He responds "Of course! Don't get ahead of yourself though. Before you can cast any spells, you must know the fundamental datatypes of magic."
        </span>
    );
    const thirdMessage = (
        <span>
            After learning the datatypes of magic, your teacher says "Excellent! Now you are prepared to learn the invisibility spell. You can cast it by reading this passage in my spell book out loud and saying your name after."
        </span>
    );
    const fourthMessage = (
        <span>
            After concluding instruction for the day, your teacher sends you to your room. However, you can't stop thinking about your teachers magical book! You decided to head back to the library and read it. As you arrive at the library, a voice calls out "Who's there?" Oh no, your teacher is still in the library! What will happen if he catches you trying to sneak in?
        </span>
    );
    const fifthMessage = (
        <span>
            As you mutter the last phrase of the invisibility spell, you turn invisible and are able to sneak past your teacher. You find his book, begin reading, and learn of a very ancient quest. The book says that any who complete the quest will become powerful coding GURUS. The rest of the quest details are hidden by magic, so you must cast another spell in order to read them.
        </span>
    );
    const firstComment = "\"\"\"\n- Write a print statement to tell the wizard your name.\n\"\"\"\ndef taskOne():\n  # Place your code below this line\n  print()";
    const secondComment = "\"\"\"\n- Assign a boolean value to |youAreAWizard|.\n- Assign a number value to |spellLevel|.\n- Assign a string to |favoriteSpellName|.\n- Print each variables value and type.\n\"\"\"\ndef taskTwo():\n  # Place your code below this line\n  youAreWizard = \n  spellLevel = \n  favoriteSpellName = \n\n  print(youAreWizard)\n  print(type())\n\n  print(spellLevel)\n  print(type())\n\n  print(favoriteSpellName)\n  print(type())"; 
    const thirdComment = "\"\"\"\n- Concatenate your name onto the print statement to\ncomplete the invisibility spell.\n\"\"\"\ndef taskThree(ancientPhrase):\n  # Place your code below this line\n  print(ancientPhrase)"; 
    const fourthComment = "\"\"\"\n- Concatenate your name onto |ancientPhrase| to\ncomplete the invisibility spell.\n\"\"\"\ndef taskFour():\n  # Place your code below this line\n  ";
    const fifthComment = "\"\"\"\n- Create the variable |magicIsReal| and give it a boolean\nvalue.\n- Create another variable |spellStrength| and give it a\nnumber value.\n- Create a final variable |ancientPhrase| and assign it a\nstring encantation of your own crafting.\n- Print each variables value and data type to cast a\nspell and read the book!\n\"\"\"\ndef taskSix():\n  # Place your code below this line\n  ";

    return {
        messages: [firstMessage, secondMessage, thirdMessage, fourthMessage, fifthMessage],
        comments: [firstComment, secondComment, thirdComment, fourthComment, fifthComment],
        images: ["img/module1/1-1.webp", "img/module1/1-5.webp", "img/module1/1-4.webp", "img/module1/1-6.webp", "img/module1/1-3.webp"],
        totalTasks: 5,
        codeHint: ["whats cookin", "whats cookin", "whats cookin", "whats cookin", "whats cookin", "whats cookin"],
    };
}

function module2() {
    const firstMessage = (
        <span>
            Now that you've learned where to go for this quest, you remember the teacher student code that you agreed to when entering Luminara. No student can go on a quest without the approval of their teacher. The next day, you tell your teacher about the quest and ask if he will allow you to embark on this quest.
        </span>
    );
    const secondMessage = (
        <span>
            After getting your teacher's approval, he gives you a magical map that will aid you on the quest. You begin your journey into the forest and arrive at a crossroad. The magical map mentioned taking a different path according to the time of day, so you decided to cast an if statement to see which path you should take.
        </span>
    );
    const thirdMessage = (
        <span>
            After traveling for many hours through the enchanted forest, you arrive at a bridge with a troll guarding it. "I AM GRYNDELGRUNG THE TERRIFYING BRIDGE TROLL!", he bellows. "IN ORDER TO USE THIS BRIDGE, YOU MUST BEST ME IN A BATTLE OF MAGIC AND MOCKERY!" You examine the magical map and realize there is no other way to continue the quest, so you decide step up and face GryndelGrung the Terrible.
        </span>
    );
    const fourthMessage = (
        <span>
            After defeating GryndelGrung the Terrible, you continue walking through the forest. Eventually, you find a cottage in a clearing. The cottage looks warm and cozy from the outside, so you decided to investigate and see if it has anything that can aid you in your quest. Before entering, you call out to see if the owner is home.
        </span>
    );
    const fifthMessage = (
        <span>
            As the cottage door closes behind you, you see a sign on the wall that says "Witch Lily Brewbubble's Potion and Jerky Shop." You look around and see shelves lined with all different types of potions and beef jerky. Amazing! These items could help you on your quest! Can grab some and sneak out before Witch Lily comes back?
        </span>
    );
    const sixthMessage = (
        <span>
            Just as you turn to leave the cottage, the door opens in front of you. Witch Lily Brewbubble has returned and caught you looting her cottage! Her green face quickly turns red with anger. Can you escape before she turns you into a frog?
        </span>
    );
    const firstComment = "\"\"\"\nWrite an if statement that will check if\n|teacherThinksYouAreReady| is True.\nIf it is, print out |teacherResponse|.\nOtherwise, print out |whyAmINotReady|.\n\"\"\"\ndef taskOne(teacherThinksYouAreReady, teachersResponse, whyAmINotReady):\n  # Place your code below this line\n  if():\n  else:";
    const secondComment = "\"\"\"\n- Complete the if and elif statement to check the value\nof |magicalMap|.\n- If |magicalMap| is \"Follow Fairy\", assign |path| to\n|fairy|.\n- If |magicalMap| is \"Follow Fox\", assign |path| to |fox|.\n- If |magicalMap| is \"Follow Mermaid\", assign |path| to\n|mermaid|.\n- Print |path| at the end.\n\"\"\"\ndef taskTwo(magicalMap, fairy, fox, mermaid):\n  path = None\n  if():\n  elif():\n  elif():"; 
    const thirdComment = "\"\"\"\n- Write an if statement that prints |fightOutcome| if\n|trollIsWeak| and |spellWorks| are True.\n- If they aren't both true, print |trollInsults|\n\"\"\"\ndef taskThree(trollIsWeak, spellWorks, fightOutcome, trollInsults):\n  # Place your code below this line\n  if(and):\n  else:"; 
    const fourthComment = "\"\"\"\n- If |someoneAnswers| is False, print |youEnterTheCottage|.\n- If |someoneAnswers| is True, print\n|youCastInvisibilitySpell|.\n\"\"\"\ndef taskFour(someoneAnswers, youEnterTheCottage, youCastInvisibilitySpell):\n  # Place your code below this line\n  ";
    const fifthComment = "\"\"\"\n- If |potionColor| is blue, print |putItInYourBag|.\n- If |potionColor| is brown, it's actually jerky so print\n|grabSomeJerky|.\n- If |potionColor| is yellow, you're unsure if you should\ngrab it so print |shouldIGrabIt|.\n\"\"\"\ndef taskFive(potionColor, putItInYourBag, grabSomeJerky, shouldIGrabIt):\n  # Place your code below this line\n  ";
    const sixthComment = "\"\"\"\n- If |lilyCastsSpell| and |youCastProtectionSpell| are both\nTrue, print |twoSpellsCollide|.\n- If |lilyCastsSpell| is True and |youCastDefensiveSpell| is\nFalse, print |lilyGotYou|.\n- If neither are true, print |tryTheWindow|.\n\"\"\"\ndef taskSix(lilyCastsSpell, youCastProtectionSpell, twoSpellsCollide, lilyGotYou, tryTheWindow):\n  # Place your code below this line\n  ";
    
    const firstHint = "if(teacherThinksYouAreReady):\n  print(teachersResponse)\nelse:\n  print(whyAmINotReady)";
    const secondHint = "";
    const thirdHint = "";
    const fourthHint = "";
    const fifthHint = "";
    const sixthHint = "";
    
    return {
        messages: [firstMessage, secondMessage, thirdMessage, fourthMessage, fifthMessage, sixthMessage],
        comments: [firstComment, secondComment, thirdComment, fourthComment, fifthComment, sixthComment],
        images: ["img/module2/2-1.webp", "img/module2/2-2.webp", "img/module2/2-3.webp", "img/module2/2-4.webp", "img/module2/2-5.webp", "img/module2/2-6.webp"],
        totalTasks: 6,
        codeHint: [firstHint, secondHint, thirdHint, fourthHint, fifthHint, sixthHint],
    };
}

function module3() {
    const firstMessage = (
        <span>
            After escaping from With Lily Brewbubble, the magical map instructs you to travel towards the Greenwolfe Mountain range. After many days you arrive and find a large stone door with ancient carvings across it's surface. But, how can you open it?
        </span>
    );
    const secondMessage = (
        <span>
            Now that you're in the cave, you take in your surroundings. It's very dark, but you see ten old torches lining an ominous hallway. If you could cast a spell to light those torches, you would be able to see much better.
        </span>
    );
    const thirdMessage = (
        <span>
            As you near the strange door, you can feel its magical energy radiating outwards. The different combination of locks and glyphs on it tell you that a more complex spell will be required to open it.
        </span>
    );
    const fourthMessage = (
        <span>
            As you peer at the glistening treasure, you hear a sound that resembles a fierce, ragged wind. You look to the back of the room and see a large figure covered in scales. The creatures belly gently rises and falls with each forceful breath. Realization hits you...it's a sleeping dragon! It's here to guard the treasure!
        </span>
    );
    const fifthMessage = (
        <span>
            "I AM TYLZAR THE WISE" the dragon booms at you. "WHY HAVE YOU COME TO MY LAIR? DO YOU SEEK THE GREAT TREASURE THAT ANCIENT PROPHESIES HAVE TOLD OF?" Tylzar sees the magical book in your sack and bellows "AHHHH!!! YOU HAVE THE AID OF THE MAGICAL BOOK! THAT'S HOW YOU FOUND ME! WELL, IF YOU HOPE TO GAIN THIS TREASURE, YOU MUST WITHSTAND AN OLD DRAGONS MIND CONTROL!"
        </span>
    );
    const sixthMessage = (
        <span>
            Tylzar takes in a humongous breath, pulling you forward and causing you to lose balance. Then, with dramatic flair, he swings his head toward you and erupts a bright orange flame of fire!!! Time seems to slow as you feel its dreaded heat race towards you. The gold around you seems to become soft at the extreme temperature. Can you defend against this attack?
        </span>
    );
    const firstComment = "\"\"\"\n- While |doorSpellStrength| is greater than five, print\n|castSpell| and subtract 1 from |doorSpellStrength|.\n- Once the while loop ends, print |doorOpened|.\n\"\"\"\ndef taskOne(doorSpellStrength, castSpell, doorOpened):\n  # Place your code below this line\n  while";
    const secondComment = "\"\"\"\n- Using the for loop, print |lightTorch| ten times. Print\nthe number that you are on along with |lightTorch|.\n- After the for loop finishes, print |allTorchesLit|.\n\"\"\"\ndef taskTwo(lightTorch, allTorchesLit):\n  # Place your code below this line\n  for in range():"; 
    const thirdComment = "\"\"\"\nWhile |numOfSymbols| is greater than five, do the following:\n- If the remainder of |numOfSymbols| divided by two is zero, set |symbolsGlow| to True.\n- If the remainder of |numOfSymbols| divided by two is greater than zero, and |numOfSymbols| is less than ten, set |symbolsGlow| to True.\n- Otherwise, set symbolsGlow to False.\n- If symbolsGlow is True, subtract three from |numOfSymbols|.\n- If |symbolsGlow| is False, add one to |numOfSymbols|.\n- Print numOfSymbols each iteration.\n- Once |numOfSymbols| is less than five, print |doorFinallyOpened|.\n\"\"\"\ndef taskThree(numOfSymbols, symbolsGlow, doorFinallyOpened):\n  # Place your code below this line\n  while";
    const fourthComment = "\"\"\"\n- While |dragonIsAsleep| is True, do the following:\n- Print \"You have taken ___ steps\", where ___ is\nreplaced with the value of |numOfSteps|.\n- If |numOfSteps| is less than five, set dragonIsAsleep to\nFalse.\n- Subtract one from numOfSteps.\n- Once |dragonIsAsleep| is False, print |theDragonAwakes|.\n\"\"\"\ndef taskFour(dragonIsAsleep, numOfSteps, theDragonAwakes):\n  # Place your code below this line\n  ";
    const fifthComment = "\"\"\"\n- Using a for loop, print |resistMindControl| ten times. Use\nformat() to add the loop counter onto the print statement.\n- After the loop, print |yourMagicIsStrong|.\n\"\"\"\ndef taskFive(resistMindControl, yourMagicIsStrong):\n  # Place your code below this line\n  ";
    const sixthComment = "\"\"\"\n- While |tylzarBlowsFire| is True, do the following:\n- Write a for loop that uses |numOfFallingRocks| as it's\nrange. For each number in the range, add the value of the\nnumber to |rocksThatHitTylzar|.\n- Print |aRockHitsTylzar| using format() and\n|numOfFallingRocks|.\n- If |rocksThatHitTylzar| is greater than or equal to 20,\nset |tylzarBlowsFire| to False.\n- If |rocksThatTylzarThrowsAtYour| is greather than zero,\nprint |dodgeRocks|.\n- Otherwise, print |castFireProtectionSpell|.\n- After the while loop finishes, print |youDefeatedTylzar|.\n\"\"\"\ndef taskSix(tylzarBlowsFire, numOfFallingRocks, rocksThatHitTylzar, rocksTylzarThrowsAtYou, aRockHitsTylzar, dodgeRocks, castFireProtectionSpell, youDefeatedTylzar):\n  # Place your code below this line\n  ";
    
    const firstHint = "while (doorSpellStrength > 5):\n  print(castSpell)\n  doorSpellStrength - 1\n\nprint(doorOpened)";
    const secondHint = "for i in range(0, 10):\n  print(lightTorch + \" \" + str(i))\n\nprint(allTorchesLit)";
    const thirdHint = "while(numOfSymbols > 5):\n  if numOfSymbols % 2 == 0:\n    symbolsGlow = True\n  elif (numOfSymbols % 2 > 0) and numOfSymbols < 10:\n    symbolsGlow = True\n  else:\n    symbolsGlow = False\n  if symbolsGlow:\n    numOfSymbols - 3\n  else:\n    numOfSymbols + 1\n  print(numOfSymbols)\n\nprint(doorFinallyOpened)";
    const fourthHint = "while dragonIsAsleep:\n  print(\"You have taken \" + str(numOfSteps) + \" steps\")\n  if numOfSteps > 5:\n    dragonIsAsleep = False\n  numOfSteps = numOfSteps + 1\n\nprint(theDragonAwakes)";
    const fifthHint = "for i in range(1, 11):\n  print(resistMindControl.format(i))\nprint(yourMagicIsStrong)";
    const sixthHint = "while(tylzarBlowsFire):\n  for i in range(0, numOfFallingRocks):\n    rocksThatHitTylzar = rocksThatHitTylzar + i\n  print(aRockHitsTylzar.format(numOfFallingRocks))\n  if(rocksThatHitTylzar >= 20):\n    tylzarBlowsFire = False\n  elif(rocksThatTylzarThrowsAtYou > 0):\n    print(dodgeRocks)\n  else:\n    print(castFireProtectionSpell)\n\nprint(youDefeatedTylzar)";

    return {
        messages: [firstMessage, secondMessage, thirdMessage, fourthMessage, fifthMessage, sixthMessage],
        comments: [firstComment, secondComment, thirdComment, fourthComment, fifthComment, sixthComment],
        images: ["img/module3/3-1.webp", "img/module3/3-2.webp", "img/module3/3-3.webp", "img/module3/3-4.webp", "img/module3/3-5.webp", "img/module3/3-6.webp"],
        totalTasks: 6,
        codeHint: [firstHint, secondHint, thirdHint, fourthHint, fifthHint, sixthHint],
    };
}

function module4() {
    const firstMessage = (
        <span>
            Module four level 1
        </span>
    );
    const secondMessage = (
        <span>
            Module four level 2
        </span>
    );
    const thirdMessage = (
        <span>
            Module four level 3
        </span>
    );
    const fourthMessage = (
        <span>
            Module four level 4
        </span>
    );
    const firstComment = "\"\"\"\n4-1\n\"\"\"";
    const secondComment = "\"\"\"\n4-2\n\"\"\""; 
    const thirdComment = "\"\"\"\n4-3\n\"\"\""; 
    const fourthComment = "\"\"\"\n4-4\n\"\"\"";
    return {
        messages: [firstMessage, secondMessage, thirdMessage, fourthMessage],
        comments: [firstComment, secondComment, thirdComment, fourthComment],
        images: ["img/module4/Griffin.jpg", "img/module4/Werewolf.png", "img/module4/Fairy.png", "img/module4/Vampire.png"],
        totalTasks: 4,
        codeHint: ["whats cookin", "whats cookin", "whats cookin", "whats cookin"],
    };
}

export default getModuleData;