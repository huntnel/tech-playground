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
            return null; // Or render a default component if needed
    }
}

function module1() {
    const firstMessage = (
        <span>
            In order to access the library, you must tell the guardian your wizard name!
        </span>
    );
    const secondMessage = (
        <span>
            Missing Storyline
        </span>
    );
    const thirdMessage = (
        <span>
            Missing Storyline
        </span>
    );
    const fourthMessage = (
        <span>
            With your new knowledge of spells, practice lighting the fireplace in the library.
        </span>
    );
    const fifthMessage = (
        <span>
            You decide you don't want to have to type out the full spell each time. Let's use a variable to cast a fire spell and a water spell.
        </span>
    );
    const sixthMessage = (
        <span>
            You want to be able to sneak around in the library. You found the invisibility spell but you need to specify who or what will become invisible.
        </span>
    );
    const firstComment = "\"\"\"\nUse a print statement to output your wizard name!\n\"\"\"\ndef taskOne():\n  # Place your code below this line\n  ";
    const secondComment = "\"\"\"\nMissing code comment\n\"\"\"\ndef taskTwo():\n  # Place your code below this line\n  "; 
    const thirdComment = "\"\"\"\nMissing code comment\n\"\"\"\ndef taskThree():\n  # Place your code below this line\n  "; 
    const fourthComment = "\"\"\"\nPrint the fire spell \"pyralight\"\n\"\"\"\ndef taskFour():\n  # Place your code below this line\n  ";
    const fifthComment = "\"\"\"\nCreate a variable called spell and set its value to \n\"pyralight\" and print out the variable. Then set the variable \nto the water spell \"hydrovortex\" and print out the variable a \nsecond time.\n\"\"\"\ndef taskFive():\n  # Place your code below this line\n  ";
    const sixthComment = "\"\"\"\nChange the spell to \"invisicloak\" then use concatenation \nto print out your name and the spell\n\"\"\"\ndef taskSix():\n  # Place your code below this line\n  ";

    return {
        messages: [firstMessage, secondMessage, thirdMessage, fourthMessage, fifthMessage, sixthMessage],
        comments: [firstComment, secondComment, thirdComment, fourthComment, fifthComment, sixthComment],
        images: ["img/module1/1-1.webp", "img/module1/1-2.webp", "img/module1/1-3.webp", "img/module1/1-4.webp", "img/module1/1-5.webp", "img/module1/1-6.webp"],
        totalTasks: 6,
    };
}

function module2() {
    const firstMessage = (
        <span>
            Now you must decide if you'd like to accept this quest! If you accept you must begin your journey.
        </span>
    );
    const secondMessage = (
        <span>
            As you journey into the forest, the path splits into three directions, you must choose if you will follow the talking fox, the fairies, or the mermaid.
        </span>
    );
    const thirdMessage = (
        <span>
            After traveling for many hours through the enchanted forest, you arrive at a bridge with a troll guarding it. You have 2 choices, if you want to cross and have your wand then you can fight the troll, otherwise you'll need to take a different path. 
        </span>
    );
    const fourthMessage = (
        <span>
            After fighting the troll you continue through the forest until you find a cottage in a clearing.
        </span>
    );
    const fifthMessage = (
        <span>
            You stumble inside the cottage of the potions master, Witch Lily Brewbubble. Many of these potions could aid you along your quest! You need to quickly grab some, but be very quiet so you don't wake the witch.
        </span>
    );
    const sixthMessage = (
        <span>
            Oh no, the witch has entered the room! You need to escape before she grabs you! You've grabbed several potions from the shelves, maybe you can use them to help escape.
        </span>
    );
    const firstComment = "\"\"\"\nCreate an if statement that will check if the variable\nacceptQuest is True. If it is true then print out \"Quest\naccepted\". Otherwise, print out \"Quest not accepted\"\n\"\"\"\ndef taskOne(acceptQuest):\n  # Place your code below this line\n  ";
    const secondComment = "\"\"\"\nCreate an if else statement. If the variable decision equals fox,\nthen print out \"I will follow the fox\", if the variable decision\nequals fairies then print out \"I will follow the fairies\", if the\nvariable decision equals mermaid, then print out \"I will follow\nthe mermaid.\"\n\"\"\"\ndef taskTwo(decision):\n  #If the decision is fox, assign path = fox\n  if():\n    path =\n  #If the decision is fairies, assign path = fairies\n  elif():\n    path =\n  #If the decision is mermaid, assign path = mermaid\n  elif():\n    path =\n  print(path)\n  "; 
    const thirdComment = "\"\"\"\nUsing the keyword \"and\", write an if statement so that if\n\"haveWand\" is true and the path = across then print out \"cross\nthe bridge and fight the troll\" otherwise print out \"take a new\npath.\"\n\"\"\"\ndef taskThree():\n  # Place your code below this line\n  "; 
    const fourthComment = "\"\"\"\nUsing your knowledge about if statements, write one that\nsatisfies the following: If cauldron boiling is true then\nenter the cottage. If cauldron boiling is false, then knock.\n\"\"\"\ndef taskFour():\n  # Place your code below this line\n  ";
    const fifthComment = "\"\"\"\nWrite an if statement for gathering potions with the following\ncriteria:\nIf the potion is blue, grab it and put it in your bag.\nIf the potion is yellow, throw it in the fire.\nIf the potion is green, you get to choose what you would like\nto do with it.\nIf you don't like any of the other potions, you are forced to\nleave empty handed.\n\"\"\"\ndef taskFive():\n  # Place your code below this line\n  ";
    const sixthComment = "\"\"\"\nWrite another if statement to escape the cottage. If you grabbed\nthe fire potion and the protection potion then throw the fire at\nthe witch and protect yourself to escape. If you grabbed either\nan invisibility or a shape shifting position then use the potion\nto escape. If you didn't grab any potions you'll need to climb\nout through the window.\n\"\"\"\ndef taskSix():\n  # Place your code below this line\n  ";
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
            Module three level 1
        </span>
    );
    const secondMessage = (
        <span>
            Module three level 2
        </span>
    );
    const thirdMessage = (
        <span>
            Module three level 3
        </span>
    );
    const fourthMessage = (
        <span>
            Module three level 4
        </span>
    );
    const firstComment = "\"\"\"\n3-1\n\"\"\"";
    const secondComment = "\"\"\"\n3-2\n\"\"\""; 
    const thirdComment = "\"\"\"\n3-3\n\"\"\""; 
    const fourthComment = "\"\"\"\n3-4\n\"\"\"";
    return {
        messages: [firstMessage, secondMessage, thirdMessage, fourthMessage],
        comments: [firstComment, secondComment, thirdComment, fourthComment],
        images: ["img/module3/Knight.png", "img/module3/Minotaur.png", "img/module3/Witch.png", "img/module3/Gorgon.png"],
        totalTasks: 4,
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