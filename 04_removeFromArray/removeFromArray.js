const removeFromArray = function(array, ...value) {
    let array2 = [];
    array.forEach((item) => {
        if (!value.includes(item)) {
            array2.push(item);
        }
    })
    return array2;
};

// Do not edit below this line
module.exports = removeFromArray;
