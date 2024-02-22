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
            In order to access the library, you must tell the guardian your wizard name.
        </span>
    );
    const thirdMessage = (
        <span>
            Now that you've worked with Magnus, you next meet Elowen Mistwood. A master witch, she is capable of writing code and spells that could hack the pentagon and turn her enemies into a frog at the same time! Fortunately for you, her days of converting people to toads are long gone. Now she specializes in sharing her knowledge with others!
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
    const firstComment = "\"\"\"\nUse a print statement to output your wizard name!\n\"\"\"\ndef taskOne():";
    const secondComment = "\"\"\"\nMagnus wants you to learn the different data types in\nprogramming! Create a variable of the following dataypes in order:\n\nBoolean, Integer, String, Float\n\nOnce you have created them, print each of their types\nto the console.\n\"\"\"\ndef taskTwo():"; 
    const thirdComment = "\"\"\"\nElowen wants you to learn how to write conditional coding\nstatements. Write an if statement that will cast either the \nspell Hackius Computerus, or the spell Frogiation Convertium,\ndepending on the type of enemy you encounter!\n\"\"\"\ndef taskThree():"; 
    const fourthComment = "\"\"\"\nPrint the fire spell \"pyralight\"\n\"\"\"\ndef taskFour():";
    const fifthComment = "\"\"\"\nCreate a variable called spell and set its value to \n\"pyralight\" and print out the variable. Then set the variable \nto the water spell \"hydrovortex\" and print out the variable a \nsecond time.\n\"\"\"\ndef taskFive():";
    const sixthComment = "\"\"\"\nChange the spell to \"invisicloak\" then use concatenation \nto print out your name and the spell\n\"\"\"\ndef taskSix():";

    return {
        messages: [firstMessage, secondMessage, thirdMessage, fourthMessage, fifthMessage, sixthMessage],
        comments: [firstComment, secondComment, thirdComment, fourthComment, fifthComment, sixthComment],
        images: ["img/module1/Wizard.jpg", "img/module1/Wizard2.jpg", "img/module3/Witch.png", "img/module1/Dragon.jpg", "img/module1/Dragon.jpg", "img/module1/Dragon.jpg"],
        totalTasks: 6,
    };
}

function module2() {
    const firstMessage = (
        <span>
            Module two level 1
        </span>
    );
    const secondMessage = (
        <span>
            Module two level 2
        </span>
    );
    const thirdMessage = (
        <span>
            Module two level 3
        </span>
    );
    const fourthMessage = (
        <span>
            Module two level 4
        </span>
    );
    const firstComment = "\"\"\"\n2-1\n\"\"\"";
    const secondComment = "\"\"\"\n2-2\n\"\"\""; 
    const thirdComment = "\"\"\"\n2-3\n\"\"\""; 
    const fourthComment = "\"\"\"\n2-4\n\"\"\"";
    return {
        messages: [firstMessage, secondMessage, thirdMessage, fourthMessage],
        comments: [firstComment, secondComment, thirdComment, fourthComment],
        images: ["img/module2/Dwarf.jpg", "img/module2/Elf.jpg", "img/module2/Ogre.jpg", "img/module2/Pegasus.jpg"],
        totalTasks: 4,
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