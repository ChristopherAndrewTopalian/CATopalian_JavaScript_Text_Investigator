// detectPattern.js

function detectPattern(whichText)
{
    let pattern = /the/gi;

    let matches = whichText.match(pattern);

    let matchCount;

    if (matches)
    {
        matchCount = matches.length;
    }
    else
    {
        matchCount = 0;
    }

    return matchCount;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

