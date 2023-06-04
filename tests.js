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