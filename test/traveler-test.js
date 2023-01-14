import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/traveler.js';
import people from '../test/people.js';
import Destination from '../src/destination.js'
import tripData from './tripdata.js';
import Trip from '../src/Trips.js';
import destinationData from './destinationData.js'

describe('Traveler', () => {
  let traveler1
  let traveler2
  let traveler3
  let newTrip

  beforeEach(() => {
    traveler1 = new Traveler(people[1])
    traveler2 = new Traveler(people[4])
    traveler3 = new Traveler(people[5])

    newTrip = new Trip(
      {
        id: 23,
        userID: 4,
        destinationID: 24,
        travelers: 6,
        date: "2019/01/02",
        duration: 18,
        status: "approved",
        suggestedActivities: [ ]
        },
        // {
        // id: 24,
        // userID: 4,
        // destinationID: 26,
        // travelers: 5,
        // date: "2019/11/15",
        // duration: 7,
        // status: "approved",
        // suggestedActivities: [ ]
        // },
        // {
        // id: 25,
        // userID: 4,
        // destinationID: 12,
        // travelers: 6,
        // date: "2019/10/26",
        // duration: 9,
        // status: "approved",
        // suggestedActivities: [ ]
        // },
        // {
        // id: 26,
        // userID: 4,
        // destinationID: 15,
        // travelers: 3,
        // date: "2019/12/10",
        // duration: 9,
        // status: "approved",
        // suggestedActivities: [ ]
        // }
    )
    newTrip.storeDestination(destinationData)

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
  it('Should give the first name of the traveler', function () {
    expect(traveler1.getFirstName()).to.equal('Rachael')
    expect(traveler2.getFirstName()).to.equal('Tiffy')
    expect(traveler3.getFirstName()).to.equal('Laverna')
  })
  // it('Should show the cost of trips a user has taken in a given year', function () {
  //   console.log(newTrip)
  //   const howMuch = traveler1.getUserTrips(tripData, 2019)
  //   console.log(howMuch)
  //   expect(howMuch).to.equal()
  // })
  it('Should be able to return sorted trips for a given user', function () {
    const allTrips = traveler1.sortTrips(tripData, '2022/06/29')
    console.log(allTrips.upcoming)
    expect(allTrips.past).to.deep.equal(
      [
        {
          id: 3,
          userID: 3,
          destinationID: 22,
          travelers: 4,
          date: '2022/05/22',
          duration: 17,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 4,
          userID: 43,
          destinationID: 14,
          travelers: 2,
          date: '2022/02/25',
          duration: 10,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 5,
          userID: 42,
          destinationID: 29,
          travelers: 3,
          date: '2022/04/30',
          duration: 18,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 7,
          userID: 37,
          destinationID: 17,
          travelers: 5,
          date: '2022/5/28',
          duration: 20,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 8,
          userID: 36,
          destinationID: 39,
          travelers: 6,
          date: '2022/02/07',
          duration: 4,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 13,
          userID: 14,
          destinationID: 12,
          travelers: 1,
          date: '2022/02/12',
          duration: 11,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 21,
          userID: 12,
          destinationID: 10,
          travelers: 1,
          date: '2022/01/28',
          duration: 18,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 22,
          userID: 22,
          destinationID: 9,
          travelers: 4,
          date: '2022/05/01',
          duration: 19,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 23,
          userID: 14,
          destinationID: 24,
          travelers: 6,
          date: '2022/01/02',
          duration: 18,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 24,
          userID: 46,
          destinationID: 26,
          travelers: 5,
          date: '2019/11/15',
          duration: 7,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 25,
          userID: 18,
          destinationID: 12,
          travelers: 6,
          date: '2019/10/26',
          duration: 9,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 26,
          userID: 25,
          destinationID: 15,
          travelers: 3,
          date: '2019/12/10',
          duration: 9,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 27,
          userID: 43,
          destinationID: 7,
          travelers: 6,
          date: '2019/07/16',
          duration: 5,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 28,
          userID: 48,
          destinationID: 31,
          travelers: 3,
          date: '2020/02/03',
          duration: 14,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 29,
          userID: 42,
          destinationID: 25,
          travelers: 3,
          date: '2019/08/30',
          duration: 4,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 30,
          userID: 33,
          destinationID: 29,
          travelers: 1,
          date: '2020/07/17',
          duration: 5,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 31,
          userID: 11,
          destinationID: 33,
          travelers: 3,
          date: '2020/12/19',
          duration: 15,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 32,
          userID: 34,
          destinationID: 36,
          travelers: 5,
          date: '2020/05/06',
          duration: 6,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 33,
          userID: 6,
          destinationID: 36,
          travelers: 5,
          date: '2020/03/26',
          duration: 19,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 34,
          userID: 32,
          destinationID: 14,
          travelers: 5,
          date: '2019/08/02',
          duration: 5,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 35,
          userID: 36,
          destinationID: 1,
          travelers: 3,
          date: '2020/10/23',
          duration: 16,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 36,
          userID: 30,
          destinationID: 26,
          travelers: 5,
          date: '2019/10/20',
          duration: 17,
          status: 'approved',
          suggestedActivities: []
        }
      ]
    )
    expect(allTrips.upcoming).to.deep.equal(
      [
        {
          id: 1,
          userID: 44,
          destinationID: 49,
          travelers: 1,
          date: '2022/09/16',
          duration: 8,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 2,
          userID: 35,
          destinationID: 25,
          travelers: 5,
          date: '2022/10/04',
          duration: 18,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 6,
          userID: 29,
          destinationID: 35,
          travelers: 3,
          date: '2022/06/29',
          duration: 9,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 9,
          userID: 24,
          destinationID: 19,
          travelers: 5,
          date: '2022/12/19',
          duration: 19,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 10,
          userID: 5,
          destinationID: 50,
          travelers: 6,
          date: '2022/07/23',
          duration: 17,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 11,
          userID: 50,
          destinationID: 5,
          travelers: 4,
          date: '2022/10/14',
          duration: 4,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 12,
          userID: 33,
          destinationID: 33,
          travelers: 6,
          date: '2022/10/17',
          duration: 6,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 14,
          userID: 19,
          destinationID: 35,
          travelers: 1,
          date: '2022/09/24',
          duration: 10,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 15,
          userID: 50,
          destinationID: 13,
          travelers: 3,
          date: '2022/07/04',
          duration: 6,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 16,
          userID: 19,
          destinationID: 27,
          travelers: 1,
          date: '2022/11/20',
          duration: 9,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 17,
          userID: 28,
          destinationID: 31,
          travelers: 1,
          date: '2022/10/30',
          duration: 20,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 18,
          userID: 18,
          destinationID: 2,
          travelers: 2,
          date: '2022/09/25',
          duration: 17,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 19,
          userID: 47,
          destinationID: 47,
          travelers: 4,
          date: '2022/07/21',
          duration: 5,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 20,
          userID: 41,
          destinationID: 19,
          travelers: 4,
          date: '2022/10/05',
          duration: 6,
          status: 'approved',
          suggestedActivities: []
        }
      ]
    )
  })
});
