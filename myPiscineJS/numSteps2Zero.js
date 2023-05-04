/**
 * @param {number} num
 * @return {number}
 */
let numberOfSteps = (num) => {
    let steps = 0;

    while (num !== 0) {
        if (num % 2 !== 0)
            num -= 1;
        else
            num /= 2;
        steps++;
    }
    return (steps);
}