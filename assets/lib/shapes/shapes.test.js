const {triangle, square, circle} = require('./shapes.js');

describe('triangle', () => {

    it ('should render a triangle with a red background color', () => {
        const testTriangle = new triangle();
        testTriangle.setColor('red');
        const expectedOutput = '<polygon points="50,0 100,100 0,100" fill="red"/>';
        expect(testTriangle.render()).toEqual(expectedOutput);
    });
});

describe('square', () => {
    
    it('should render a square with a green background', () => {
        const testSquare = new square();
        testSquare.setColor('green');
        const expectedOutput = '<rect width="100" height="100" fill="green"/>';
        expect(testSquare.render()).toEqual(expectedOutput);
    });
});

describe('circle', () => {
        
        it('should render a circle with a blue background', () => {
            const testCircle = new circle();
            testCircle.setColor('blue');
            const expectedOutput = '<circle cx="50" cy="50" r="50" fill="blue"/>';
            expect(testCircle.render()).toEqual(expectedOutput);
        });
    });