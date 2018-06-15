function reverseNumber(number) {
    number = parseInt(number);

    let reversed = 0,
        remainder;

    while (number !== 0) {
        remainder = number % 10;
        reversed = reversed * 10 + remainder;
        number = Math.floor(number / 10);
    }

    return reversed;

}
