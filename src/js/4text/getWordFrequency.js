// getWordFrequency.js

function getWordFrequency(whichText)
{
    let words = whichText.toLowerCase().split(/\s+/);

    let frequency = {};

    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        if (word.length > 0)
        {
            if (frequency[word])
            {
                frequency[word]++;
            }
            else
            {
                frequency[word] = 1;
            }
        }
    }

    let frequencyList = '';

    for (let word in frequency)
    {
        if (frequency.hasOwnProperty(word))
        {
            frequencyList += word + ': ' + frequency[word] + '<br>';
        }
    }

    return frequencyList;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

