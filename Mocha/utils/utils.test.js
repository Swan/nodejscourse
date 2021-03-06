const expect = require('expect');

const utils = require('./utils.js');

describe('utils', () => {
    describe('#add', () => {
        it('should add two numbers.', () => {
            let res = utils.add(33, 11);

            expect(res)
                .toBe(44)
                .toBeA('number');

        });

        it ('should async add two numbers.', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    describe('#square', () => {
        it('should square a number.', () => {
            let res = utils.square(5);

            expect(res)
                .toBe(25)
                .toBeA('number');
        });

        it('should async square a number.', (done) => {
            utils.asyncSquare(4, (product) => {
                expect(product)
                    .toBe(16)
                    .toBeA('number');
                done();
            });
        });
    });

    describe('#user',  () => {
        it('should expect some values.', () => {
            // expect(12).toNotBe(11);
            // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
            // expect([2,3,4]).toInclude(4);
            expect({
                name: 'Andrew', 
                age: 25,
                location:  'Philadelphia'
            }).toInclude({
                age: 25
            })
        });

        it('Should verify first and last names are set.', () => {
            let user = {
                age: 19,
                location: 'Boston'
            }

            let res = utils.setName(user, "Joe Swanson");

            expect(res).toInclude({
                firstName: 'Joe',
                lastName: 'Swanson'
            });

        });
    });

})





