document.getElementById('flight-search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;

    // Dummy flight data
    const flights = [
        { airline: 'Air India', time: '10:00 AM', price: '$150', duration: '3h' },
        { airline: 'IndiGo', time: '12:30 PM', price: '$120', duration: '2.5h' },
        { airline: 'SpiceJet', time: '4:00 PM', price: '$100', duration: '3h 15m' }
    ];

    // Display results
    const results = document.getElementById('results');
    results.innerHTML = <h2>Available Flights</h2>;
    flights.forEach(flight => {
        results.innerHTML += `
            <div class="flight-card">
                <p><strong>Airline:</strong> ${flight.airline}</p>
                <p><strong>Time:</strong> ${flight.time}</p>
                <p><strong>Price:</strong> ${flight.price}</p>
                <p><strong>Duration:</strong> ${flight.duration}</p>
            </div>
        `;
    });
});