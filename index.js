const inquirer = require('inquirer');
const fs = require('fs');
const {triangle, square, circle} = require('./assets/lib/shapes/shapes.js');

const questions = [
    {
        type: 'input',
        message: 'Enter 3 characters for your logo',
        name: 'logoCharacter'
    },
    {
        type: 'input',
        message: 'What color would you like for your characters',
        name: 'charsColor'
    },
    {
        type: 'list',
        message: 'What shape would you like for your logo',
        choices: ['Triangle', 'Circle', 'Square'],
        name: 'logoShape',
    },
    {
        type: 'input',
        message: 'What is your shapes color',
        name: 'shapeColor'
    }
];

function generateHTML(data) {

    const {logoCharacter, charsColor} = data;
    let shapeChoice;
    if (data.logoShape === 'Triangle') {
        shapeChoice = new triangle();
        shapeChoice = `<polygon points="50,0 100,100 0,100" fill="${data.shapeColor}"/>`;
    } else if (data.logoShape === 'Square') {
        shapeChoice = new square();
        shapeChoice = `<rect width="100" height="100" fill="${data.shapeColor}"/>`;
    } else {
        shapeChoice = new circle();
        shapeChoice = `<circle cx="50" cy="50" r="50" fill="${data.shapeColor}"/>`;
    }
    return '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">' + shapeChoice + `<text x="50" y="50" fontsize="20" text-anchor="middle" fill="${charsColor}">${logoCharacter}</text>` + '</svg>';
};

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const fileName = 'assets/images/logo.svg'
        writeToFile(fileName, generateHTML(data));
    });
}

const {logoCharacter, charsColor, logoShape, shapeColor} = questions;




const validate = (logoCharacter, charsColor, logoShape, shapeColor) => {
    if (logoCharacter.length > 3) {
        return 'Character must be 3 characters long';
    }
    if (charsColor.length === 0) {
        return 'Please enter a color';
    }
    if (logoShape.length === 0) {
        return 'Please choose a shape';
    }
    if (shapeColor.length === 0) {
        return 'Please enter a color';
    }
    return true;
};

init();
validate[logoCharacter, charsColor, logoShape, shapeColor];
