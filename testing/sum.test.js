//toBe is the matcher
//expect is the function from assertion library and test from test runner

/* const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
 */
/* //string
const { reverseStr, checkPalindrome } = require("./sum");

test('A string should be reversed', () => {
  expect(reverseStr("raj")).toBe("jar");
})

test('checkPalindrome should verify', () => {
  expect(checkPalindrome('madam')).toBeTruthy();

  expect(checkPalindrome('ser')).toBeFalsy();
})
 */
/* 
//integration test
const fib = require("./sum");

test('Integration Test fib', () => {
  expect([0,1,1,2,3]).toEqual(fib(5));
}); */

// how do we test std output from console.log using jest
/* //objects we use to equal
test('object assignment', () => {
    const data = {one: 1};                   
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  }); */


 /*  //not to be
  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  }); */

  /* //truthiness
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  }); */


  /* //numbers
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  }); */


  /* //floating numbers
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  }); */


  //strings

 /*  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  }); */

  //arrays and iterables

  /* const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  }); */