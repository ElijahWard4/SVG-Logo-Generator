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