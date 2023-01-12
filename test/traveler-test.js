import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/traveler.js';
import people from '../test/people.js';
import Destination from '../src/destination.js'

describe('Traveler', () => {
  let traveler1
  let traveler2
  let traveler3

  beforeEach(() => {
    traveler1 = new Traveler(people[1])
    
    traveler2 = new Traveler(people[4])
    
    traveler3 = new Traveler(people[5])
  })
  it('Should be a function', function() {
    expect(Traveler).to.be.a('function');
  });
  it('Should be an instance of Traveler', function () {
    expect(traveler2).to.be.an.instanceOf(Traveler)
  })
  it('Should have an id', function () {
    expect(traveler3.id).to.be.a("number")
    expect(traveler3.id).to.equal(6)
  })
  it('Should have a name', function () {
    expect(traveler1.name).to.equal("Rachael Vaughten")
  })
  it('Should have a traveler type', function () {
    expect(traveler2.travelerType).to.equal("thrill-seeker")
  })
});
