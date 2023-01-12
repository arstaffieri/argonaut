class Destination {
    constructor(destinationData) {
        this.destinationData = destinationData
    }
    getDestinationByID(destinationId) {
        const destination = this.destinationData.find((destination) => destination.id === destinationId);
        return destination;
    }
    getDestinationByName = (destinationName) => {
        const destination = this.destinationData.find((destination) => destination.destination === destinationName);
        return destination;
    }

}

export default Destination