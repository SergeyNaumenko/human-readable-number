module.exports = function toReadable (number) {
    if (number === 0 ) {
        return 'zero';
    }

    const dictionary = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    }

    const getValue = (num) => {
        return num <= 20 ? dictionary[num] : `${dictionary[Math.floor(num / 10) * 10]} ${dictionary[Math.floor(num % 10)]}`.trim(); 
    }

    return number < 100 ? getValue(number).trim() : `${dictionary[Math.trunc(number / 100)]} hundred ${getValue(number % 100)}`.trim();
}
