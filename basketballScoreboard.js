let homeScore = 0
let homeScoreEl = document.getElementById("homeScore")
let guestScore = 0
let guestScoreEl = document.getElementById("guestScore")

function plusOneH(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function plusTwoH(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function plusThreeH(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function plusOneG(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function plusTwoG(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function plusThreeG(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetScore(){
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}