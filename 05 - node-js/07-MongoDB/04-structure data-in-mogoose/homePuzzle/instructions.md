# Home puzzle: setting appointments
based on the previous puzzle, we need to create a new model for appointments. The appointment should have the following fields:

## Level 1 (90 points max)
1) Design a data structure for the appointment, and it's relation to the client and service provider. take a snapshot of the schema and put it in the folder of your HomePuzzle.
2) Finish creating Model, routes and controllers for clients and service providers.
3) create new model, routes and controllers for appointments. The appointment Schema should have the following fields:
    - client: reference to the client
    - serviceProvider: reference to the service provider
    - date: date of the appointment
    - startTime: time of the appointment
    - endTime: end time of the appointment
    - status: status of the appointment (pending, confirmed, canceled)
    - service: reference to the service
    - price: price of the service
    - rating: rating of the service provider by the client
    - review: review of the service provider by the client
 
 Use Postmen to test your routes and controllers.

## Level 2 (95 points max)
Complete level 1. Make sure that there is no overlapping appointments for the same service provider. If a client tries to book an appointment with a service provider at the same time, the system should return an error message.

## Level 3 (100 points max)
build a UI interface for the client to book an appointment with a service provider. The client should be able to see the available time slots for the service provider and book an appointment. The client should also be able to see the list of appointments that he/she has booked.
