import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/destination';
import destinations from './destinationData';

describe('Destination', () => {
    let destination
    beforeEach(() => {
        destination = new Destination(destinations)
    })
    it('Should be a function', function () {
        expect(Destination).to.be.a('function')
    })
    it('Should be a new instance of Destination', function () {
        expect(destination).to.be.an.instanceOf(Destination)
    })
    it('Should be able to return a destination based on the id', function () {
        expect(destination.getDestinationByID(1)).to.equal(destinations[0])
        expect(destination.getDestinationByID(14)).to.equal(destinations[13])
    })
    it('Should return a destination based on the name', function () {
        expect(destination.getDestinationByName("Toronto, Canada")).to.equal(destinations[9])
    })
})