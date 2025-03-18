// getWordCount.js

function getWordCount(whichText)
{
    let words = whichText.split(/\s+/);

    let wordCount = 0;

    for (let i = 0; i < words.length; i++)
    {
        if (words[i].length > 0)
        {
            wordCount++;
        }
    }

    return wordCount;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

