const {triangle} = require('./shapes.js');

describe('triangle', () => {

    it ('should render a triangle with a red background color', () => {
        const testTriangle = new triangle();
        testTriangle.setColor('red');
        const expectedOutput = '<polygon points="50,0 100,100 0,100" fill="red"/>';
        expect(testTriangle.render()).toEqual(expectedOutput);
    });
});