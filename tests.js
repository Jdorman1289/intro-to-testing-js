// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should be of the "string" type', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the phrase "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the phrase "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the phrase "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the phrase "Hello, World!" by default.', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the phrase "Hello, World!" when true is passed.', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the phrase "Hello, World!" when false is passed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return true if the input is the number five', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false if the input is not a number', function () {
        expect(isFive("bro")).toBe(false);
        expect(isFive("apple")).toBe(false);
    });
    it('should return true if the input is the numeric string "5"', function () {
        expect(isFive("5")).toBe(true);
    });
})

// returns false when called without an argument like isEven()

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven("Hi")).toBe("boolean");
    });
    it('should return true when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when called with isEven("banana")', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should true when called with isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when called with isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with a boolean input like isEven(true) or isEven(false)', function () {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called without an argument like isEven()', function () {
        expect(isEven()).toBe(false);
    });
})

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should always return a boolean', function () {
        expect(typeof isVowel("anything")).toBe("boolean");
    });
    it('isVowel("a") should return true', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('isVowel("A") should return true', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('isVowel("y") should return false', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('isVowel(4) should return false ', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('isVowel(true) or isVowel(false) should both return false', function () {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('isVowel("banana") should return false', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('isVowel() should return false', function () {
        expect(isVowel()).toBe(false);
    });
})

describe("add", function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe("function");
    });
    it('should return 5 when passed 2 and 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return 11 when passed "5" and 6', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return -12 when -3 and -9 are passed', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 6 when "-4" and "10" are passed', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when "banana" and "split are passed', function () {
        expect(add("banana", "split")).toBe("NaN");
    });
    it('add(2, "apples") should return NaN', function () {
        expect(add(2, "apples")).toBe("NaN");
    });
    it('add() should return NaN', function () {
        expect(add()).toBe("NaN");
    });
})