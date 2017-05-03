var chai = require('chai');
var expect = chai.expect;
var sut = require('../src/lineReader.js');

describe('lineReader', function(){
  it('must read the date in the beginning with YYYY-MM-DD HH:mm:ss format', function(){
    var instance = sut.createInstance();
    var line = '2017-05-30 11:08:14';
    var result = instance.read(line);

    expect(result.year).to.equal(2017);
    expect(result.month).to.equal(5);
    expect(result.day).to.equal(30);
    expect(result.hour).to.equal(11);
    expect(result.minute).to.equal(8);
    expect(result.second).to.equal(14);
  })
});
