import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/destination';
import destinations from './destinationData';


describe('Destination', () => {
    let destination1
    let destination2
    let destination3
    beforeEach(() => {
        destination1 = new Destination(destinations[3])
        destination2 = new Destination(destinations[9])
        destination3 = new Destination(destinations[14])
    })
    it('Should be a function', function () {
        expect(Destination).to.be.a('function')
    })
    it('Should be a new instance of Destination', function () {
        expect(destination1).to.be.an.instanceOf(Destination)
    })
   it('Should have a destination id', function () {
    expect(destination1.id).to.equal(4)
    expect(destination2.id).to.equal(10)
    expect(destination3.id).to.equal(15)
   })
   it('Should have a loging cost per day', function () {
    expect(destination1.lodgingCost).to.equal(65)
    expect(destination2.lodgingCost).to.equal(90)
    expect(destination3.lodgingCost).to.equal(40)
   })
   it('Should have a flight cost per traveler', function () {
    expect(destination1.flightCost).to.equal(350)
    expect(destination2.flightCost).to.equal(450)
    expect(destination3.flightCost).to.equal(900)
   })
})