# HNG-Backend-Stack-0

## Description
This is a simple Node.js server that listens on a specified port and responds with a JSON object containing the developer's email, the current date and time, and the GitHub URL of the project.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/ObiyomBright/HNG-Backend-Stack-0.git
    ```
2. Navigate to the project directory:
    ```sh
    cd HNG-Backend-Stack-0
    ```
3. Install the dependencies (if any):
    ```sh
    npm install
    ```

## Usage
1. Start the server:
    ```sh
    npm start
    ```
2. The server will start running on the specified port (default is 8000). You will see the following message in the console:
    ```
    Server is currently running on 8000
    ```

## Endpoints
### GET /
- **Description**: Returns a JSON object with the developer's email, the current date and time, and the GitHub URL of the project.
- **Response**:
    ```json
    {
        "email": "brightobiyom2@gmail.com",
        "current_datetime": "2023-10-05T14:48:00.000Z",
        "github_url": "https://github.com/ObiyomBright/HNG-Backend-Stack-0.git"
    }
    ```

### 404 Not Found
- **Description**: Any other endpoint will return a 404 error with a JSON object indicating that the page was not found.
- **Response**:
    ```json
    {
        "error": "Page not found"
    }
    ```

## Environment Variables
- : The port number on which the server will listen. Default is `8000`.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author
Obiyom Bright Chibuike