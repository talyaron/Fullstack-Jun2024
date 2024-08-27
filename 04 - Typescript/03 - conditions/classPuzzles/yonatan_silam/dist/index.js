var score = Number(prompt("pls enter a score."));
// debugger;
var endScore = "";
checkScore(score);
function checkScore(number) {
    if (number >= 0 && number <= 200) {
        endScore = giveScore(number);
        document.write(endScore);
    }
    else {
        var score_1 = Number(prompt("pls enter a score between 0-100."));
        checkScore(score_1);
    }
}
function giveScore(number) {
    try {
        if (number < 0 || number > 100)
            throw new Error("Score should be between 0-100");
        if (number <= 59)
            return "F";
        else if (number <= 69)
            return "d";
        else if (number <= 79)
            return "c";
        else if (number <= 89)
            return "b";
        else
            (number <= 100);
        return "A";
    }
    catch (e) {
        console.error(e);
        return "error";
    }
}
