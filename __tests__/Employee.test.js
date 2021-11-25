const Employee = require('../lib/Employee.js');

test('--- Creates an employee ---', () => {
    const employee = new Employee('Calvin', '1', 'pc611652003@hotmail.com');
  
    expect(employee.name).toBe('Calvin');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('pc611652003@hotmail.com');
});

test('--- Test getName ---', () => {
    const employee = new Employee('Calvin', '1', 'pc611652003@hotmail.com');
    
    expect(employee.getName()).toBe('Calvin');
});

test('--- Test getID ---', () => {
    const employee = new Employee('Calvin', '1', 'pc611652003@hotmail.com');
    
    expect(employee.getID()).toBe('1');
});

test('--- Test getEmail ---', () => {
    const employee = new Employee('Calvin', '1', 'pc611652003@hotmail.com');
    
    expect(employee.getEmail()).toBe('pc611652003@hotmail.com');
});

test('--- Test getRole ---', () => {
    const employee = new Employee('Calvin', '1', 'pc611652003@hotmail.com');
    
    expect(employee.getRole()).toBe('Employee');
});