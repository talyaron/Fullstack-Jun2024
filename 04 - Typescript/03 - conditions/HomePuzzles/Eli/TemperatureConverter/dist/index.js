var userTemp = Number(prompt("enter a temparture degrees"));
var userFC = String(prompt("enter a temparture scale unit (\"C\" for Celcius \"F\" for Fahrenheit)"));
function tempConverter(temNum, temUnit) {
    if (temUnit == "F" || temUnit == "f") {
        return ((temNum - 32) * 5) / 9;
    }
    if (temUnit == "C" || temUnit == "c") {
        return (9 / 5) * temNum + 32;
    }
    return 0;
}
function tempRecommend(temNumed, temUnited, convertedRes) {
    if (temUnited == "F" || temUnited == "f") {
        if (temNumed < 32) {
            return (temNumed +
                temUnited +
                "(" +
                convertedRes +
                " C)" +
                "It's freezing! Wear a heavy coat.");
        }
        else if (temNumed < 50) {
            return (temNumed +
                temUnited +
                "(" +
                convertedRes +
                " C)" +
                "It's cold. Bring a jacket.");
        }
        else if (temNumed < 68) {
            return (temNumed +
                temUnited +
                "(" +
                convertedRes +
                " C)" +
                "It's cool. A light sweater should be fine.");
        }
        else if (temNumed < 86) {
            return (temNumed +
                temUnited +
                "(" +
                convertedRes +
                " C)" +
                "It's warm. T-shirt weather!");
        }
        else
            return (temNumed +
                temUnited +
                "(" +
                convertedRes +
                " C)" +
                "It's hot! Stay cool and hydrated.");
    }
    else {
        if (temNumed < 0) {
            return (temNumed +
                temUnited +
                "(" +
                convertedRes +
                " F)" +
                "It's freezing! Wear a heavy coat.");
        }
        else if (temNumed < 10) {
            return (temNumed +
                temUnited +
                "(" +
                convertedRes +
                " F)" +
                "It's cold. Bring a jacket.");
        }
        else if (temNumed < 20) {
            return (temNumed +
                temUnited +
                "(" +
                convertedRes +
                " F)" +
                "It's cool. A light sweater should be fine.");
        }
        else if (temNumed < 30) {
            return (temNumed +
                temUnited +
                "(" +
                convertedRes +
                " F)" +
                "It's warm. T-shirt weather!");
        }
        else
            return (temNumed +
                temUnited +
                "(" +
                convertedRes +
                " F)" +
                "It's hot! Stay cool and hydrated.");
    }
    return "send help";
}
var resConvert = tempConverter(userTemp, userFC);
var resRecommended = tempRecommend(userTemp, userFC, resConvert);
document.write(resRecommended);
/*- Below 32°F (0°C): "It's freezing! Wear a heavy coat."
- 32°F to 50°F (0°C to 10°C): "It's cold. Bring a jacket."
- 51°F to 68°F (11°C to 20°C): "It's cool. A light sweater should be fine."
- 69°F to 86°F (21°C to 30°C): "It's warm. T-shirt weather!"
- Above 86°F (30°C): "It's hot! Stay cool and hydrated."
*/
