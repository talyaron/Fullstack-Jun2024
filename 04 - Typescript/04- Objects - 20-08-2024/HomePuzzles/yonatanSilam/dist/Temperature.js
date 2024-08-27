function convertTemperature(temp) {
    var value = temp.value;
    var units = temp.units;
    if (units != null)
        units = units === null || units === void 0 ? void 0 : units.toLowerCase();
    try {
        if (units == "" || units == null)
            throw new Error("unvaild input");
        if (units == "c") {
            value = (value * 1.8) + 32;
            var newTemp_1 = {
                value: value,
                units: "F"
            };
            return newTemp_1;
        }
        else if (units == "f") {
            value = (value - 32) / 1.8;
            var newTemp_2 = {
                value: value,
                units: "C"
            };
            return newTemp_2;
        }
        else
            throw new Error("enter in units f/c");
    }
    catch (e) {
        console.error(e);
        var newTemp_3 = {
            value: 0,
            units: ""
        };
        return newTemp_3;
    }
}
function newTemp() {
    var value = Number(prompt("enter a temp!"));
    var units = prompt("enter the unit!");
    if (units != null) {
        var newTemp_4 = {
            value: value,
            units: units
        };
        return newTemp_4;
    }
    else {
        var newTemp_5 = {
            value: 0,
            units: ""
        };
        return newTemp_5;
    }
}
var temp = convertTemperature(newTemp());
document.write("the degree is " + temp.value + " of " + temp.units);
