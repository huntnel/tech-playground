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
    return {
        messages: [firstMessage, secondMessage, thirdMessage, fourthMessage, fifthMessage, sixthMessage],
        comments: [firstComment, secondComment, thirdComment, fourthComment, fifthComment, sixthComment],
        images: ["img/module2/2-1.webp", "img/module2/2-2.webp", "img/module2/2-3.webp", "img/module2/2-4.webp", "img/module2/2-5.webp", "img/module2/2-6.webp"],
        totalTasks: 6,
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
            You enter into the cave and it's dark! You need to find a way to get light into the cave. You see torches along the wall but they aren't lit yet.
        </span>
    );
    const thirdMessage = (
        <span>
            You arrive at the end of the cave but the door is sealed! You must use the correct spell to open the door. The door has different markings that will let you know which spell you should cast to open the door.
        </span>
    );
    const fourthMessage = (
        <span>
            The door opens and reveals the treasure inside! But in front of the treasure is a sleeping dragon! You need to get around the dragon to get to the treasure but be careful not to wake the dragon.
        </span>
    );
    const fifthMessage = (
        <span>
            Oh no, as you reach the treasure the dragon wakes up! You need your wand to fight the dragon but you left it near the cave entrance. Dodge around the piles of gold in the room so you can to your wand.
        </span>
    );
    const sixthMessage = (
        <span>
            Now that you have your wand you need to fight off the dragon to get the treasure!
        </span>
    );
    const firstComment = "\"\"\"\nWrite a while loop so that while the cave is equal to \"sealed\", castSpell will still be equal to true\n\"\"\"\ndef taskOne():\n  # Place your code below this line\n  ";
    const secondComment = "\"\"\"\nWrite a for loop so that when the variable i is between 1 and 11 you will light the torch.\n\"\"\"\ndef taskTwo():\n  # Place your code below this line\n  "; 
    const thirdComment = "\"\"\"\nWhile doorClosed is true, continue trying to open the door. If doorMarkings <10, print the spell \"open\". If door markings are >10, print the spell \"unlock\". Otherwise print the spell \"uncover\"\n\"\"\"\ndef taskThree():\n  # Place your code below this line\n  "; 
    const fourthComment = "\"\"\"\nCreate a while loop that checks if the dragon is sleeping. While the dragon, keep sneaking around.\n\"\"\"\ndef taskFour():\n  # Place your code below this line\n  ";
    const fifthComment = "\"\"\"\nCreate a for loop so that when the variable x is between 1 and 7 you will run and dodge behind the different piles of gold until you reach your wand.\n\"\"\"\ndef taskFive():\n  # Place your code below this line\n  ";
    const sixthComment = "\"\"\"\nCreate a while loop that continues while the dragon is attacking. If the dragon shoots fire at you, cast a spell to shield yourself, if the dragon tries to swipe at you with its tail, dodge away, and if the dragon tries to bite you, cast a spell to take down the dragon.\n\"\"\"\ndef taskSix():\n  # Place your code below this line\n  ";
    return {
        messages: [firstMessage, secondMessage, thirdMessage, fourthMessage, fifthMessage, sixthMessage],
        comments: [firstComment, secondComment, thirdComment, fourthComment, fifthComment, sixthComment],
        images: ["img/module3/3-1.webp", "img/module3/3-2.webp", "img/module3/3-3.webp", "img/module3/3-4.webp", "img/module3/3-5.webp", "img/module3/3-6.webp"],
        totalTasks: 6,
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
    };
}

export default getModuleData;