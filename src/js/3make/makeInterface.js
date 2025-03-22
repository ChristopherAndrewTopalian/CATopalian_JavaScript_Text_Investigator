// makeInterface.js

function makeInterface()
{
    let mainContainer = ce('div');
    mainContainer.id = 'mainContainer';
    mainContainer.style.position = 'absolute';
    mainContainer.style.left = '20px';
    mainContainer.style.top = '25px';
    ba(mainContainer);

    //-//

    let textInput = ce('textarea');
    textInput.id = 'textInput';
    textInput.placeholder = 'Enter words here...';
    mainContainer.append(textInput);

    //-//

    let btnDivInternetData = ce('div');
    btnDivInternetData.style.display = 'flex';
    btnDivInternetData.style.flexDirection = 'row';
    btnDivInternetData.style.overflowX = 'auto';
    btnDivInternetData.style.whiteSpace = 'nowrap';

    // horizontal scrolling mouse wheel, without needing to hold shift button
    btnDivInternetData.addEventListener('wheel', function(event)
    {
        if (event.deltaY !== 0)
        {
            btnDivInternetData.scrollLeft += event.deltaY;
            event.preventDefault();
        }
    });
    mainContainer.append(btnDivInternetData);

    //-//

    let latestEarthquakeButton = ce('button');
    latestEarthquakeButton.className = 'buttonStyle001';
    latestEarthquakeButton.textContent = 'Earthquake (Latest)';
    latestEarthquakeButton.title = 'Get most recent Earthquake data from the internet';
    latestEarthquakeButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    latestEarthquakeButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = fetchMostRecentEarthquakeData();
    };
    btnDivInternetData.append(latestEarthquakeButton);

    //-//

    let allEarthquakesButton = ce('button');
    allEarthquakesButton.className = 'buttonStyle001';
    allEarthquakesButton.textContent = 'Earthquake (All)';
    allEarthquakesButton.title = 'Get all Earthquake data from the internet';
    allEarthquakesButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    allEarthquakesButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = fetchAllEarthquakeData();
    };
    btnDivInternetData.append(allEarthquakesButton);

    //-//

    let randomJokeButton = ce('button');
    randomJokeButton.className = 'buttonStyle001';
    randomJokeButton.textContent = 'Get Random Joke';
    randomJokeButton.title = 'Get a random joke from the internet';
    randomJokeButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    randomJokeButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = fetchRandomJoke();
    };
    btnDivInternetData.append(randomJokeButton);

    //-//

    let btnDivAnalyzeText = ce('div');
    btnDivAnalyzeText.style.display = 'flex';
    btnDivAnalyzeText.style.flexDirection = 'row';
    btnDivAnalyzeText.style.overflowX = 'auto';
    btnDivAnalyzeText.style.whiteSpace = 'nowrap';

    // horizontal scrolling mouse wheel, without needing to hold shift button
    btnDivAnalyzeText.addEventListener('wheel', function(event)
    {
        if (event.deltaY !== 0)
        {
            btnDivAnalyzeText.scrollLeft += event.deltaY;
            event.preventDefault();
        }
    });
    mainContainer.append(btnDivAnalyzeText);

    //-//

    let wordCountButton = ce('button');
    wordCountButton.className = 'buttonStyle001';
    wordCountButton.textContent = 'Word Count';
    wordCountButton.title = 'Count the number of words';
    wordCountButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    wordCountButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = getWordCount(textInput.value);
    };
    btnDivAnalyzeText.append(wordCountButton);

    //-//

    let wordFrequencyButton = ce('button');
    wordFrequencyButton.className = 'buttonStyle001';
    wordFrequencyButton.textContent = 'Word Frequency';
    wordFrequencyButton.title = 'Count the frequency of each word';
    wordFrequencyButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    wordFrequencyButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = getWordFrequency(textInput.value);
    };
    btnDivAnalyzeText.append(wordFrequencyButton);

    //-//

    let patternRecognitionButton = ce('button');
    patternRecognitionButton.className = 'buttonStyle001';
    patternRecognitionButton.textContent = 'Pattern Recognition';
    patternRecognitionButton.title = 'Search for Pattern of word THE';
    patternRecognitionButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    patternRecognitionButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = detectPattern(textInput.value);
    };
    btnDivAnalyzeText.append(patternRecognitionButton);

    //-//

    let avgWordLengthButton = ce('button');
    avgWordLengthButton.className = 'buttonStyle001';
    avgWordLengthButton.textContent = 'Average Word Length';
    avgWordLengthButton.title = 'Average length of words';
    avgWordLengthButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    avgWordLengthButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = calculateAvgWordLength(textInput.value);
    };
    btnDivAnalyzeText.append(avgWordLengthButton);

    //-//

    let sentimentRatingButton = ce('button');
    sentimentRatingButton.className = 'buttonStyle001';
    sentimentRatingButton.textContent = 'Sentiment Rating';
    sentimentRatingButton.title = 'The general intention of the text';
    sentimentRatingButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    sentimentRatingButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = detectSentiment(textInput.value);
    };
    btnDivAnalyzeText.append(sentimentRatingButton);

    //-//

    let extractKeywordsButton = ce('button');
    extractKeywordsButton.className = 'buttonStyle001';
    extractKeywordsButton.textContent = 'Extract Keywords';
    extractKeywordsButton.title = 'Get Keywords without getting common link words';
    extractKeywordsButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    extractKeywordsButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = extractKeywords(textInput.value);
    };
    btnDivAnalyzeText.append(extractKeywordsButton);

    //-//

    let extractKeywordsUppercaseButton = ce('button');
    extractKeywordsUppercaseButton.className = 'buttonStyle001';
    extractKeywordsUppercaseButton.textContent = 'Extract Keywords Uppercase';
    extractKeywordsUppercaseButton.title = 'Uppercase extracted keywords';
    extractKeywordsUppercaseButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    extractKeywordsUppercaseButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = extractKeywordsUppercase(textInput.value);
    };
    btnDivAnalyzeText.append(extractKeywordsUppercaseButton);

    //-//

    let titleCaseKeywordsButton = ce('button');
    titleCaseKeywordsButton.className = 'buttonStyle001';
    titleCaseKeywordsButton.textContent = 'Titlecase Keywords';
    titleCaseKeywordsButton.title = 'Titlecases the words';
    titleCaseKeywordsButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    titleCaseKeywordsButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = titleCaseKeywords(textInput.value);
    };
    btnDivAnalyzeText.append(titleCaseKeywordsButton);

    //-//

    let categorizeWordsButton = ce('button');
    categorizeWordsButton.className = 'buttonStyle001';
    categorizeWordsButton.textContent = 'Categorize Words';
    categorizeWordsButton.title = 'Put words into categories';
    categorizeWordsButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    categorizeWordsButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = categorizeWords(textInput.value);
    };
    btnDivAnalyzeText.append(categorizeWordsButton);

    //-//

    let btnDivFormatting = ce('div');
    btnDivFormatting.style.display = 'flex';
    btnDivFormatting.style.flexDirection = 'row';
    btnDivFormatting.style.overflowX = 'auto';
    btnDivFormatting.style.whiteSpace = 'nowrap';

    // horizontal scrolling mouse wheel, without needing to hold shift button
    btnDivFormatting.addEventListener('wheel', function(event)
    {
        if (event.deltaY !== 0)
        {
            btnDivFormatting.scrollLeft += event.deltaY;
            event.preventDefault();
        }
    });
    mainContainer.append(btnDivFormatting);

    //-//

    let capitalizeTextButton = ce('button');
    capitalizeTextButton.className = 'buttonStyle001';
    capitalizeTextButton.textContent = 'Capitalize Text';
    capitalizeTextButton.title = 'Capitalizes all words';
    capitalizeTextButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    capitalizeTextButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = capitalizeText(textInput.value);
    };
    btnDivFormatting.append(capitalizeTextButton);

    //-//

    let lowercaseTextButton = ce('button');
    lowercaseTextButton.className = 'buttonStyle001';
    lowercaseTextButton.textContent = 'Lowercase Text';
    lowercaseTextButton.title = 'Lowercases all words';
    lowercaseTextButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    lowercaseTextButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = lowercaseText(textInput.value);
    };
    btnDivFormatting.append(lowercaseTextButton);

    //-//

    let capitalizeFirstLetterButton = ce('button');
    capitalizeFirstLetterButton.className = 'buttonStyle001';
    capitalizeFirstLetterButton.textContent = 'Capitalize 1st Letter';
    capitalizeFirstLetterButton.title = 'Capitalizes the 1st Letter of each word';
    capitalizeFirstLetterButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    capitalizeFirstLetterButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = capitalizeFirstLetters(textInput.value);
    };
    btnDivFormatting.append(capitalizeFirstLetterButton);

    //-//

    let boldTextButton = ce('button');
    boldTextButton.className = 'buttonStyle001';
    boldTextButton.textContent = 'Bold Text';
    boldTextButton.title = 'Bold all words';
    boldTextButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    boldTextButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = boldText(textInput.value);
    };
    btnDivFormatting.append(boldTextButton);

    //-//

    let normalTextButton = ce('button');
    normalTextButton.className = 'buttonStyle001';
    normalTextButton.textContent = 'Normal Text';
    normalTextButton.title = 'Normalize all words';
    normalTextButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    normalTextButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = normalText(textInput.value);
    };
    btnDivFormatting.append(normalTextButton);

    //-//

    let italicTextButton = ce('button');
    italicTextButton.className = 'buttonStyle001';
    italicTextButton.textContent = 'Italic Text';
    italicTextButton.title = 'Italicize all words';
    italicTextButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    italicTextButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = italicText(textInput.value);
    };
    btnDivFormatting.append(italicTextButton);

    //-//

    let underlineTextButton = ce('button');
    underlineTextButton.className = 'buttonStyle001';
    underlineTextButton.textContent = 'Underline Text';
    underlineTextButton.title = 'Underline all words';
    underlineTextButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    underlineTextButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = underlineText(textInput.value);
    };
    btnDivFormatting.append(underlineTextButton);

    //-//

    let bulletedListButton = ce('button');
    bulletedListButton.className = 'buttonStyle001';
    bulletedListButton.textContent = 'Format as Bulleted List';
    bulletedListButton.title = 'Format words as Bullet List';
    bulletedListButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    bulletedListButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        ge('resultContainer').textContent = formatAsBulletedList(textInput.value);
    };
    btnDivFormatting.append(bulletedListButton);

    //-//

    let resultContainer = ce('div');
    resultContainer.id = 'resultContainer';
    resultContainer.style.minHeight = '100px';
    mainContainer.append(resultContainer);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

