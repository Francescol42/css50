let homeCount = 0
let awayCount = 0

let homeWinning = "Home Team is leading "
let awayWinning = "Away Team is leading "
let tie = "The two Teams are tying "

let changeScoreHome = document.getElementById("home-score")
let changeScoreAway = document.getElementById("away-score")
let leading = document.getElementById("leading")
function home1()
{
    homeCount++
    changeScoreHome.textContent = homeCount
    if(homeCount > awayCount)
    {
        leading.textContent = homeWinning + homeCount + " to " + awayCount
    }
    else if(awayCount > homeCount)
    {
        leading.textContent = awayWinning + awayCount + " to " + homeCount
    }
    else 
    {
        leading.textContent = tie + homeCount + " to " + awayCount
    }
}

function home2()
{
    homeCount += 2
    changeScoreHome.textContent = homeCount
    if(homeCount > awayCount)
    {
        leading.textContent = homeWinning + homeCount + " to " + awayCount
    }
    else if(awayCount > homeCount)
    {
        leading.textContent = awayWinning + awayCount + " to " + homeCount
    }
    else 
    {
        leading.textContent = tie + homeCount + " to " + awayCount
    }
}

function home3()
{
    homeCount += 3
    changeScoreHome.textContent = homeCount
    if(homeCount > awayCount)
    {
        leading.textContent = homeWinning + homeCount + " to " + awayCount
    }
    else if(awayCount > homeCount)
    {
        leading.textContent = awayWinning + awayCount + " to " + homeCount
    }
    else 
    {
        leading.textContent = tie + homeCount + " to " + awayCount
    }
}

function away1()
{
    awayCount++
    changeScoreAway.textContent = awayCount
    if(homeCount > awayCount)
    {
        leading.textContent = homeWinning + homeCount + " to " + awayCount
    }
    else if(awayCount > homeCount)
    {
        leading.textContent = awayWinning + awayCount + " to " + homeCount
    }
    else 
    {
        leading.textContent = tie + homeCount + " to " + awayCount
    }
}

function away2()
{
    awayCount += 2
    changeScoreAway.textContent = awayCount
    if(homeCount > awayCount)
    {
        leading.textContent = homeWinning + homeCount + " to " + awayCount
    }
    else if(awayCount > homeCount)
    {
        leading.textContent = awayWinning + awayCount + " to " + homeCount
    }
    else 
    {
        leading.textContent = tie + homeCount + " to " + awayCount
    }
}

function away3()
{
    awayCount += 3
    changeScoreAway.textContent = awayCount
    if(homeCount > awayCount)
    {
        leading.textContent = homeWinning + homeCount + " to " + awayCount
    }
    else if(awayCount > homeCount)
    {
        leading.textContent = awayWinning + awayCount + " to " + homeCount
    }
    else 
    {
        leading.textContent = tie + homeCount + " to " + awayCount
    }
}

function newGame()
{
    homeCount = 0
    awayCount = 0
    changeScoreAway.textContent = awayCount
    changeScoreHome.textContent = homeCount
    leading.textContent = tie + homeCount + " to " + awayCount
}