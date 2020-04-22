const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: 'Diamond Pickaxe',
    durability: 75,
    enhancment: 12
}

//testing the file
describe('enhancer.js', function() {

    //testing the first function succeed()
    describe('succeed()', function () {
        it.todo('Enhancement will increase by 1')
        it.todo('Enhancement will not increase if enhancement level = 20')
        it.todo('The durability of the item will not change')
    })

    //testing the second function fail()
    describe('fail()', function () {
        it.todo('if the enhancment is < 15, decrease durability by 5')
        it.todo('if enhancement is > 15, durability decreases by 10')
        it.todo('if the enhancement is > 16, decrease enhancement by 1')
    })
    
    //testing the third function repair()
    describe('repair()', function () {
        it('if the item durability is < 100 then make it 100', function () {
            expect(enhancer.repair(item)).toEqual({...item, durability: 100});
        })
    })

    //stretch goal
    //testing the fourth function get()
    describe('get()', function () {
        it.todo('')
    })
    //end of function testings
})
//end of file testing