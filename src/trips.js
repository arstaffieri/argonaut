import Destination from "./destination";

class Trip {
    constructor(tripData) {
        this.id = tripData.id;
        this.userID = tripData.userID;
        this.destinationID = tripData.destinationID;
        this.travelers = tripData.travelers;
        this.date = tripData.date;
        this.duration = tripData.duration;
        this.status = tripData.status;
        this.suggestedActivities = tripData.suggestedActivities
        this.destination = {}
    }

    storeDestination(destinationData) {
        const tripDestination = destinationData.find(destination => destination.id === this.destinationID)
        if (tripDestination) {
            this.destination = new Destination(tripDestination)
        }
    }

    calculateTripCost() {
        const lodging = this.destination.lodgingCost * this.duration
        const flight = this.destination.flightCost * this.travelers
        return ((lodging + flight) * 1.1).toFixed(2)
    }
}

export default Trip