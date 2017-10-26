`use strict`;

var expect = require('chai').expect;
var mediumParser = require('../index');

let url = 'https://medium.com/the-mission/use-einsteins-educational-philosophy-to-boost-your-learning-e07ea60a9146';
let badURL = 'https://medium.com/@Chef_BoyarDEJI/8-signs-of-a-successful-life-that-have-nothing-to-do-with-money-or-fame-467948ce0e63';

describe('#mediumParser', function() {
    it('should return an object with data', function() {
        mediumParser(url).then((result) => {
            expect(result).to.be.an('object');
        });
    })

    it('should return an error', function() {
        mediumParser(badURL).then((result) => {
            //wont return anything
        }, (error) => {
            //will throw error
            expect(error).to.be.an('error');
        });
    })
})
