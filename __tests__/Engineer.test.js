const Engineer = require('../lib/Engineer.js');

test('--- Creates an engineer ---', () => {
    const engineer = new Engineer('Calvin', '1', 'pc611652003@hotmail.com', 'pc611652003');
  
    expect(engineer.name).toBe('Calvin');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('pc611652003@hotmail.com');
    expect(engineer.github).toBe('pc611652003');
});

test('--- Test getName ---', () => {
    const engineer = new Engineer('Calvin', '1', 'pc611652003@hotmail.com', 'pc611652003');
    
    expect(engineer.getName()).toBe('Calvin');
});

test('--- Test getID ---', () => {
    const engineer = new Engineer('Calvin', '1', 'pc611652003@hotmail.com', 'pc611652003');
    
    expect(engineer.getID()).toBe('1');
});

test('--- Test getEmail ---', () => {
    const engineer = new Engineer('Calvin', '1', 'pc611652003@hotmail.com', 'pc611652003');
    
    expect(engineer.getEmail()).toBe('pc611652003@hotmail.com');
});

test('--- Test getRole ---', () => {
    const engineer = new Engineer('Calvin', '1', 'pc611652003@hotmail.com', 'pc611652003');
    
    expect(engineer.getRole()).toBe('Engineer');
});

test('--- Test getGitHub ---', () => {
    const engineer = new Engineer('Calvin', '1', 'pc611652003@hotmail.com', 'pc611652003');
    
    expect(engineer.getGithub()).toBe('pc611652003');
});