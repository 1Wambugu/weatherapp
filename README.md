# Weather Application

A simple and elegant weather application built with Node.js and Express that allows users to check weather conditions for any location.

## Features

- Real-time weather data retrieval
- Clean and responsive user interface
- Location-based weather information
- Error handling for invalid locations
- 404 page for undefined routes

## Technologies Used

- Node.js
- Express.js
- Handlebars (HBS) for templating
- dotenv for environment variable management
- nodemon for development
- request for API calls

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- A weather API key (stored in .env file)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd weather
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```
PORT=3000
WEATHER_API_KEY=your_api_key_here
```

## Running the Application

1. Start the development server:

```bash
npm start
```

2. Open your browser and navigate to `http://localhost:4000`

## Project Structure

```
weather/
├── public/          # Static files (CSS, JS, images)
├── src/             # Source files
│   └── app.js       # Main application file
├── templates/       # HBS templates
│   ├── views/       # Main views
│   └── partials/    # Reusable template parts
├── utils/           # Utility functions
├── .env            # Environment variables
├── .gitignore      # Git ignore file
├── package.json    # Project dependencies and scripts
└── README.md       # Project documentation
```

## API Endpoints

- `GET /`: Home page
- `GET /weather?address=<location>`: Get weather data for a specific location

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Weather data provided by [Weather API]
- Built with Express.js and Node.js
