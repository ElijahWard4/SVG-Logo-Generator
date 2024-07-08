SVG Logo Generator
## SVG Logo Generator

The SVG Logo Generator is a command-line application that prompts the user for input to generate a customized SVG logo. The user can choose the text, text color, shape, and shape color, and the application will create an SVG file based on these inputs.

## Demo Video


https://github.com/ElijahWard4/SVG-Logo-Generator/assets/97565223/bff45890-a3d3-4891-9633-0dfba36521e2



## Installation
Clone the repository:

```
git clone https://github.com/yourusername/svg-logo-generator.git
```

Navigate to the project directory:

```
cd svg-logo-generator
```

Install the required dependencies:

```
npm install
```
## Usage

Run the application:

```
node index.js
```

Answer the prompts:

- Enter 3 characters for your logo
- Choose a color for the characters(OR a hexadecimal number)
- Choose a shape for the logo (Triangle, Circle, Square)
- Choose a color for the shape(OR a hexadecimal number)

Your logo will be generated and saved as `assets/images/logo.svg`.

## File Structure

```
svg-logo-generator
├── assets
│   ├── images
│   │   └── logo.svg
│   └── lib
│       └── shapes
│           └── shapes.js
├── index.js
├── package.json
└── README.md
```

## Tests

To run the tests, use the following command:

```
npm test
```

The tests will check if the shapes (Triangle, Square, Circle) are rendered correctly with the specified colors.

## Code Overview

### index.js

This file contains the main logic for the application, including:

- Prompting the user for input
- Generating the SVG based on user input
- Writing the SVG to a file

### shapes.js

This file defines the shape classes (triangle, square, circle) and their rendering methods.

## License

This project is licensed under the MIT License.

## Contact

Author: Eli Ward
Email: elijah.ward014@gmail.com
GitHub: ElijahWard4
