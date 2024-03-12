const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 8000;
    actual = sum(6000, 2000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-7, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 4;
    actual = sum(0, 4);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small numbers', () => {
    expected = 3;
    actual = subtract(5, 2);
    expect(actual).toBe(expected);
  });

  test('can subtract two large numbers', () => {
    expected = 5000000;
    actual = subtract(6000000, 1000000);
    expect(actual).toBe(expected);
  });
});

describe('multiply', () => {

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(0, 15);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 64;
    actual = multiply(-4, -16);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  
  test('can divide two numbers', () => {
    expected = 7;
    actual = divide(49, 7);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 4;
    actual = divide(-16, -4);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {

  test('can find the modulus of two small numbers', () => {
    expected = 1;
    actual = modulus(5, 2);
    expect(actual).toBe(expected);
  });

  test('can find the modulus of two large numbers', () => {
    expected = 20000;
    actual = modulus(290000, 90000);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {
  
  describe('even', () => {
    test('can check if a small number is even', () => {
      expect(even(2)).toBe(true);
    });
  
    test('can check if a large number is even', () => {
      expect(even(25654659)).toBe(false);
    });
  });
});

describe('odd', () => {

});
