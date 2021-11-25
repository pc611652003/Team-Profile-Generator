const Manager = require('../lib/Manager.js');

test('--- Creates an manager ---', () => {
    const manager = new Manager('Calvin', '1', 'pc611652003@hotmail.com', '123');
  
    expect(manager.name).toBe('Calvin');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('pc611652003@hotmail.com');
    expect(manager.officeNumber).toBe('123');
});

test('--- Test getName ---', () => {
    const manager = new Manager('Calvin', '1', 'pc611652003@hotmail.com', '123');

    expect(manager.getName()).toBe('Calvin');
});

test('--- Test getID ---', () => {
    const manager = new Manager('Calvin', '1', 'pc611652003@hotmail.com', '123');

    expect(manager.getID()).toBe('1');
});

test('--- Test getEmail ---', () => {
    const manager = new Manager('Calvin', '1', 'pc611652003@hotmail.com', '123');

    expect(manager.getEmail()).toBe('pc611652003@hotmail.com');
});

test('--- Test getRole ---', () => {
    const manager = new Manager('Calvin', '1', 'pc611652003@hotmail.com', '123');

    expect(manager.getRole()).toBe('Manager');
});

test('--- Test getOfficeNumber ---', () => {
    const manager = new Manager('Calvin', '1', 'pc611652003@hotmail.com', '123');

    expect(manager.getOfficeNumber()).toBe('123');
});