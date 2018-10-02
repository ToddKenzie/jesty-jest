const functions = require('./function');

test('Adds 2 + 2 to equal 4' , () => {
    expect(functions.add(2, 2)).toBe(4);
})


test('FizzBuzz of 1 is 1', function() {
    expect(functions.fizzBuzz(1)).toBe('1');
});

test('FizzBuzz of 2 is 2', function() {
    expect(functions.fizzBuzz(2)).toBe('2');
});

test('FizzBuzz of 3 is Fizz', function() {
    expect(functions.fizzBuzz(3)).toBe('Fizz');
});

test('FizzBuzz of 5 is Buzz', function() {
    expect(functions.fizzBuzz(5)).toBe('Buzz');
});

test('FizzBuzz of 15 is FizzBuzz', function() {
    expect(functions.fizzBuzz(15)).toBe('FizzBuzz');
});

test('user fetched films totals 5', () => {
    expect.assertions(1);
    return functions.fetchLuke()
    .then(data => {
        expect(data.films.length).toEqual(5);
    })
});