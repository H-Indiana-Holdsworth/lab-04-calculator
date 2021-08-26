// IMPORT MODULES under test here:
import { add } from '../calculator.js';

// import { add } from '../calculator.js';

const test = QUnit.test;

// name your test by what it is testing
test('add two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 1;
    const y = 3;
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

import { subtract } from '../calculator.js';

const bing = QUnit.test;

bing('subtract function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = subtract(3, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
