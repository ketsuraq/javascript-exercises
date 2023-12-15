const sumAll = function(first, second) {
    if (first < 1 || second < 1){
        return "ERROR";
    }
    if (typeof first != "number" || typeof second != "number"){
        return "ERROR";
    }
    if (first > second){
        let temp = first;
        first = second;
        second = temp;
    }
    return (second * (second + 1) / 2) - ((first - 1) * (first) / 2);
};

// Do not edit below this line
module.exports = sumAll;
