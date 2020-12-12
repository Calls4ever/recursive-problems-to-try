const assert = require('chai').assert
const reverseString=require('../reverseString')

describe('Reversing a String', ()=>{
    describe('#reverseString()',()=>{
    it('Should return "og" when in put is "go"', ()=>{
        assert.equal(reverseString('go'), 'og')
    })
    it('Should return "dab" when in put is "bad"', ()=>{
        assert.equal(reverseString('bad'), 'dab')
    })
    it('Should return "elgoog" when in put is "google"', ()=>{
        assert.equal(reverseString('elgoog'), 'google')
    })
    it('Should return "gniresT" when in put is "Tsering"', ()=>{
        assert.equal(reverseString('Tsering'), 'gniresT')
    })
    it('Should return "ssob" when in put is "boss"', ()=>{
        assert.equal(reverseString('boss'), 'ssob')
    })
    it('Should return "god" when in put is "dog"', ()=>{
        assert.equal(reverseString('dog'), 'god')
    })
    })
})