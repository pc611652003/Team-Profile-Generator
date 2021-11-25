const Intern = require('../lib/Intern.js');

test('--- Creates an intern ---', () => {
    const intern = new Intern('Calvin', '1', 'pc611652003@hotmail.com', 'U of U');
  
    expect(intern.name).toBe('Calvin');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('pc611652003@hotmail.com');
    expect(intern.school).toBe('U of U');
});

test('--- Test getName ---', () => {
    const intern = new Intern('Calvin', '1', 'pc611652003@hotmail.com', 'U of U');

    expect(intern.getName()).toBe('Calvin');
});

test('--- Test getID ---', () => {
    const intern = new Intern('Calvin', '1', 'pc611652003@hotmail.com', 'U of U');

    expect(intern.getID()).toBe('1');
});

test('--- Test getEmail ---', () => {
    const intern = new Intern('Calvin', '1', 'pc611652003@hotmail.com', 'U of U');

    expect(intern.getEmail()).toBe('pc611652003@hotmail.com');
});

test('--- Test getRole ---', () => {
    const intern = new Intern('Calvin', '1', 'pc611652003@hotmail.com', 'U of U');

    expect(intern.getRole()).toBe('Intern');
});

test('--- Test getSchool ---', () => {
    const intern = new Intern('Calvin', '1', 'pc611652003@hotmail.com', 'U of U');

    expect(intern.getSchool()).toBe('U of U');
});