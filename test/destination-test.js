import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/destination';
import destinations from './destinationData';

describe('Destination', () => {
    let destination1
    let destination2
    let destination3
    beforeEach(() => {
        destination1 = new Destination(destinations[1])
        destination2 = new Destination(destinations[2])
        destination3 = new Destination(destinations[3])
    })
    it('Should be a function', function () {
        expect(Destination).to.be.a('function')
    })
    it('Should be a new instance of Destination', function () {
        expect(destination1).to.be.an.instanceOf(Destination)
        expect(destination2).to.be.an.instanceOf(Destination)
        expect(destination3).to.be.an.instanceOf(Destination)
    })
    it('Should have an id for each destination', function () {
        expect(destination1.id).to.equal(2)
        expect(destination2.id).to.equal(3)
        expect(destination3.id).to.equal(4)
    })
    it('Should have a name for each destination', function () {
        expect(destination1.destination).to.equal('Stockholm, Sweden')
        expect(destination2.destination).to.equal('Sydney, Austrailia')
        expect(destination3.destination).to.equal('Cartagena, Colombia')
    })
    it('Should have an estimated cost of loging per day', function () {
        expect(destination1.estimatedLodgingCostPerDay).to.equal(100)
        expect(destination2.estimatedLodgingCostPerDay).to.equal(130)
        expect(destination3.estimatedLodgingCostPerDay).to.equal(65)
    })
    it('Should have an estimated flight cost per person', function () {
        expect(destination1.estimatedFlightCostPerPerson).to.equal(780)
        expect(destination2.estimatedFlightCostPerPerson).to.equal(950)
        expect(destination3.estimatedFlightCostPerPerson).to.equal(350)
    })
})