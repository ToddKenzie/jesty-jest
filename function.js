const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,

    fizzBuzz: num => {
        value = '';
        if (num % 3 == 0) value += 'Fizz';
        if (num % 5 == 0) value += 'Buzz';
        if (num % 7 == 0) value += 'Qix';

       value += functions.fizzBuzzValue(num);
        if (value != '') return value;
        return num + '';
    },

    fizzBuzzValue: num => {
        value = '';
        for(var i = num; i > 0; i = Math.floor(i / 10)) {
            if (i % 10 == 3) value = 'Fizz' + value; 
            if (i % 10 == 5) value = 'Buzz' + value;
            if (i % 10 == 7) value = 'Qix' + value;
        }
        return value;
    },

    fetchLuke: () => axios.get('https://swapi.co/api/people/1')
    .then(res => res.data)
    .catch(error => 'error')

};

module.exports = functions;