// Use this line to import the function, made possible by
// the export default line in the other file
import leapYear  from './index';

//The it function is invoked by Jest, it takes two parameters, a String describing the test and the test function itself.
it('should NOT be a leap year if divisible by 100, not 400', () => {
  const input = 1900;
  const expectedOutput = false; 
  //In Jest, the expect function provides several matchers such as toBe() for you to check your output
  expect(leapYear(input)).toBe(expectedOutput);
});

it('should be a leap year if divisible by 4, not 100', () => {
    const input = 1984;
    const expectedOutput = true;
    const actualOutput = leapYear(input);
    expect(actualOutput).toBe(expectedOutput);
  });

it('should NOT be a leap year if not divisible by 4', () => {
    expect(leapYear(1983)).toBe(false);
});
  
it('should be a leap year if divisible by 400', () => {
    expect(leapYear(2000)).toBe(true);
});
  
it('should throw an error for years before 1582', () => {
    expect(() => {
      leapYear(1568);
    }).toThrow();
});