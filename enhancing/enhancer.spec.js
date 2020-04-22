const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: 'Diamond Pickaxe',
    durability: 75,
    enhancement: 12
}

//testing the file
describe('enhancer.js', function() {

    //testing the first function succeed()
    describe('succeed()', function () {
        it('Enhancement will increase by 1', () => {
            expect(enhancer.succeed(item)).toEqual({...item, enhancement: item.enhancement + 1})
        })
        it('Enhancement will not increase if enhancement level = 20', () => {
            expect(enhancer.succeed({...item, enhancement: 20})).toEqual({...item, enhancement: 20})
        })
        it('Durability of item will not decrease', () => {
            expect(enhancer.succeed({...item, durability: item.durability})).toEqual({...item, enhancement: item.enhancement + 1,durability: item.durability})
        })
    })

    //testing the second function fail()
    describe('fail()', function () {
        it('if the enhancment is < 15, decrease durability by 5', () =>{
            expect(enhancer.fail(item)).toEqual({...item, durability: item.durability - 5})
        })
        it('if enhancement is >= 15, durability decreases by 10', () => {
            expect(enhancer.fail({...item, enhancement: 15})).toEqual({...item, enhancement: 15, durability: item.durability -10})
        })
        it('if the enhancement is > 16, decrease enhancement by 1', () => {
            expect(enhancer.fail({...item, enhancement: 17})).toEqual({...item, enhancement: 16, durability: item.durability -10})
        })
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