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
            Legend has it that thousands of years ago, an ancient wizard learned the secrets to becoming a CODING GURU. This powerful knowledge has kept him alive for thousands of years, but nobody knows where he is. However, if found, the wizard will instruct you on becoming a coding GURU. You, realizing how much power this knowledge will give you, have decided to embark on an epic quest to find this wizard, obtain his hidden knowledge, and become the <span className='logo-color'>MOST POWERFUL CODING GURU</span>.
        </span>
    );
    const secondMessage = (
        <span>
            Module one Level Two
        </span>
    );
    const thirdMessage = (
        <span>
            Module one Level Three
        </span>
    );
    const fourthMessage = (
        <span>
            Module one Level Four
        </span>
    );
    const firstComment = "\"\"\"\nFirst, please print your wizard name to the console!\n\"\"\"";
    const secondComment = "\"\"\"\nlevel two\n\"\"\""; 
    const thirdComment = "\"\"\"\nlevel three\n\"\"\""; 
    const fourthComment = "\"\"\"\nlevel four\n\"\"\"";
    return {
        messages: [firstMessage, secondMessage, thirdMessage, fourthMessage],
        comments: [firstComment, secondComment, thirdComment, fourthComment],
        images: ["img/module1/Wizard.jpg", "img/module1/Wizard2.jpg", "img/module1/Goblin.jpg", "img/module1/Dragon.jpg"],
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
        images: ["img/module4/Griffin.jpg", "img/module4/Werewolf.png", "img/module1/Goblin.jpg", "img/module4/Vampire.jpg"],
    };
}

export default getModuleData;