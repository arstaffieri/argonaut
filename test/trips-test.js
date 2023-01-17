import chai from 'chai';
const expect = chai.expect;
import tripData from './tripdata.js';
import Trip from '../src/trips.js';
import destinationData from './destinationData.js'

describe('Trip', () => {
    let newTrip
    let anotherTrip
    let yetAnotherTrip
    beforeEach(() => {
        newTrip = new Trip(tripData[4])
        anotherTrip = new Trip(tripData[10])
        yetAnotherTrip = new Trip(tripData[3])
    })
    it('Should have an id for each trip', function () {
        expect(newTrip.id).to.equal(5)
    })
    it('Should have a user id for each trip', function () {
        expect(newTrip.userID).to.equal(42)
    })
    it('Should have a destination id for each trip', function () {
        expect(newTrip.destinationID).to.equal(29)
    })
    it('Should have a number of travelers per trip', function () {
        expect(newTrip.travelers).to.equal(3)
    })
    it('Should have a date for each trip', function () {
        expect(newTrip.date).to.equal('2022/04/30')
    })
    it('Should have a duration for each trip', function () {
        expect(newTrip.duration).to.equal(18)
    })
    it('Should have a status of approved or pending', function () {
        expect(newTrip.status).to.equal('approved')
        expect(anotherTrip.status).to.equal('approved')
    })
    it('Should be able to create a new instance of destination', function () {
        expect(anotherTrip.destination).to.deep.equal({})
        expect(anotherTrip.destination).to.deep.equal({})
        anotherTrip.storeDestination(destinationData)
        yetAnotherTrip.storeDestination(destinationData)
        expect(anotherTrip.destination).to.deep.equal({
            id: 5,
            name: 'Madrid, Spain',
            alt: "city with clear skys and a road in the day time",
            lodgingCost: 150,
            flightCost: 650,
            image: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          })
        expect(yetAnotherTrip.destination).to.deep.equal({
            id: 14,
            name: 'Marrakesh, Morocco',
            alt: "people buying oranges and other fruit from a street vendor",
            lodgingCost: 70,
            flightCost: 830,
            image: "https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
          })
    })
    it('Should calucalte the total cost of a trip with a travel agent fee of 10%', function () {
        anotherTrip.storeDestination(destinationData)
        const totalCost = anotherTrip.calculateTripCost()
        expect(totalCost).to.equal('3520.00')
    })
})