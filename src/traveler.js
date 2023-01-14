import { Trip } from "./Trips.js"
class Traveler {
    constructor(peopleData) {
        this.id = peopleData.id
        this.name = peopleData.name
        this.travelerType = peopleData.travelerType
    }
    getFirstName() {
        const firstName = this.name.split(' ')
        return firstName[0]
    }
    getUserTrips(trips, year) {
        const allUserTrips = trips.reduce((acc, trip) => {
            if(trip.status === 'approved' && trip.date.includes(year)) {
                acc += trip.calculateTripCost()
            }
            console.log(acc)
            return acc
        }, 0)
        return allUserTrips
    }
    sortTrips(trips, date) {
        return trips.reduce((acc, trip) => {
            const todaysDate = Date.parse(new Date(date))
            const tripDate = Date.parse(new Date(trip.date))
            if (trip.status === 'pending') {
                acc.pending.push(trip)
            } else if (tripDate < todaysDate) {
                acc.past.push(trip)
            } else {
                acc.upcoming.push(trip)
            }

            return acc
        }, {
            past: [],
            pending: [],
            upcoming: []
        })
    }
    
}


export default Traveler