// fetchRandomJoke.js

function fetchRandomJoke()
{
    fetch('https://official-joke-api.appspot.com/random_joke')

    .then(function(response)
    {
        return response.json();
    })

    .then(function(data)
    {
        let joke = data.setup + " " + data.punchline;

        ge("textInput").value = joke;
    })

    .catch(function(error)
    {
        console.error('Error fetching joke:', error);
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

