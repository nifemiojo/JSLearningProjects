function isEven(wholeNumber) {
    if (wholeNumber == 0) {
        return true;
    }
    else if (wholeNumber == 1) {
        return false;
    }
    else {
        return wholeNumber > 0 ? isEven(wholeNumber - 2) : isEven(wholeNumber + 2);
    }
}

console.log(isEven(-5));