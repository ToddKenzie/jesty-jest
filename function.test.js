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

test('FizzBuzz of 3 is FizzFizz', function() {
    expect(functions.fizzBuzz(3)).toBe('FizzFizz');
});

test('FizzBuzz of 5 is BuzzBuzz', function() {
    expect(functions.fizzBuzz(5)).toBe('BuzzBuzz');
});

test('FizzBuzz of 15 is FizzBuzzBuzz', function() {
    expect(functions.fizzBuzz(15)).toBe('FizzBuzzBuzz');
});

test('Fizzbuzz of 7 will return QixQix', function() {
    expect(functions.fizzBuzz(7)).toBe('QixQix');
});

test('Fizzbuzz of 21 will return FizzQix', function() {
    expect(functions.fizzBuzz(21)).toBe('FizzQix');
});

test('FizzBuzz of 35 will return BuzzQixFizzBuzz', function() {
    expect(functions.fizzBuzz(35)).toBe('BuzzQixFizzBuzz');
});

test('FizzBuzz of 735 will return FizzBuzzQixQixFizzBuzz', function() {
    expect(functions.fizzBuzz(735)).toBe('FizzBuzzQixQixFizzBuzz');
});

test('user fetched films totals 5', () => {
    expect.assertions(1);
    return functions.fetchLuke()
    .then(data => {
        expect(data.films.length).toEqual(5);
    })
});