const repeatString = function(line, times) {
    if (times  < 0){
        return "ERROR";
    }
    let text = "";
    for (let i = 0; i < times; i++){
        text += line;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
