# TheRightDoctors
A simple Angular Single Page Application (SPG) to manage a list of people.

## Features

- List all people fetched from a REST API
- Edit person details
- Delete a person
- Uses Angular standalone components and HttpClient for API calls

## Tech Stack

- Angular 14 (adapted for better security and stability)
- TypeScript
- RxJS
- REST API: https://jsonplaceholder.typicode.com/users (mock data)

## How to Run

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `ng serve` to start the development server
4. Open `http://localhost:4200` in your browser

## Notes

- The app demonstrates basic CRUD operations using Angular services and routing.
- Data changes are simulated and reflected in the UI, but the mock API does not persist updates.
