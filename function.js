const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,

    fizzBuzz: num => {
        value = '';
        if (num % 3 == 0) value += 'Fizz';
        if (num % 5 == 0) value += 'Buzz';
        if (value != '') return value;
        return num + '';
    },

    fetchLuke: () => axios.get('https://swapi.co/api/people/1')
    .then(res => res.data)
    .catch(error => 'error')

};

module.exports = functions;