const functions = require('./functions');

test('returnTwo should return 2', () => {
    expect(functions.returnTwo()).toBe(2);
});
test('greeting', () => {
    expect(functions.greeting('James')).toBe("Hello, ${name}.");
    expect(functions.greeting('Jill')).toBe("Hello, ${name}.");
})

test('add', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(5,9)).toBe(14);
})
