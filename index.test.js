const { sum, sub } = require('./index');

describe('Index', () => {
  // test suite
  describe('Sum', () => {
    // test spec
    it('should add two numbers', () => {
      // arrange
      const expected = 30;

      // act
      const received = sum(10, 20);

      // assert
      expect(received).toBe(expected);
    });

    // test spec
    it('should not add two numbers if any of them is undefined', () => {
      const received = sum(undefined, 20);
      expect(received).toBeNaN();
    });
  });

  describe('Sub', () => {
    // test spec
    it('should subtract two numbers', () => {
      // arrange
      const expected = 30;

      // act
      const received = sub(70, 40);

      // assert
      expect(received).toBe(expected);
    });
  });
});
