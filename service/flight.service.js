

const flights = [
    { 
        name: "indigo",
        source: "Delhi",
        destination: "jaipur",
        price: 1614,
        date: new Date("04/15/2023")
    },

    { 
  
        source: "Delhi",
        destination: "jaipur",
        price: 1869,
        name: "airaisa",
        date: new Date("04/15/2023")
    
    },
    

    { 
    
        source: "Delhi",
        destination: "jaipur",
        price: 2133,
        name : "vistra",
        date: new Date("04/15/2023")
    
    },


    { 
        name: "airIndia",
        source: "Delhi",
        destination: "Amritsar",
        price: 13994,
        date: new Date("05/15/2023")
    },

    { 
  
        source: "Delhi",
        destination: "Himachal",
        price: 1869,
        name: "British",
        date: new Date("05/15/2023")
    
    },
    

    { 
    
        source: "Delhi",
        destination: "jaipur",
        price: 2133,
        name : "vistra",
        date: new Date("05/15/2023")
    
    }


]

exports.getFlightPrices =  (source, destination, date) => {
    const filteredFlights = flights.filter(flight => {
       return flight.source == source && flight.destination == destination 
        && flight.date.toDateString() == new Date(date).toDateString()
      
    })
    return {
        flights: filteredFlights
    }
  };