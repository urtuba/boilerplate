# Enhanced Express API Boilerplate

Elevate your application development experience with this enhanced Express API boilerplate. Designed to be both minimal and complete, it provides a solid foundation, streamlining your project right from the inception.

## Quick Start

Follow these steps to get started:

1. **Clone the Repository:**

   - Clone this repository to your local machine to have your own version of the boilerplate. Use the command `git clone <repository-url>`.

2. **Install Dependencies:**

   - Execute `npm install` to install all the necessary dependencies to get you started.

3. **Local Development:**

   - Use `npm run dev` to start the local development server. It's time to build something amazing!

4. **Run Tests:**
   - Make sure your code is robust and works as expected by running tests with `npm run test`.

## Features

### Express API

Embark on your development journey with a pre-configured Express application and a server. The separation of the `buildApp` function ensures you test your app, not the 3rd party middlewares. It also offers additional configuration options, including:

- Executing code after app creation but before the server starts.
- Running another server instance with the same application.

### Testing

Equipped with `jest` and `supertest`, this boilerplate supports both unit and e2e testing. Sample tests are included, but you can delve into the [Jest documentation](https://jestjs.io/docs/getting-started) to create tests as per your needs. A jest coverage report is included to keep track of your test coverages.

The project includes MongoDB integration for testing, with automatic setup and teardown of database connections. This ensures your tests run with a real database connection, making them more reliable.

### Continuous Integration

GitHub workflow is configured to run tests automatically with MongoDB integration. The workflow:
- Runs on push to main branch
- Runs on pull request creation and updates
- Sets up a MongoDB service
- Installs dependencies
- Runs tests

### Environment Management

Experience seamless development with `nodemon` and `babel`. The added environment utility ensures you never face issues with missing required environment variables; it notifies and stops execution if any are missing. Expand and manage your environment variables and controls by enhancing the `src/utils/environment.js`.

```js
import ENV from 'environment'

// Example usage
if (ENV.isTest) {
  // Code specific to the test environment
}
```

### Coding Style

Maintain a clean and consistent codebase with the enforced coding style powered by Biome.js. The project includes:

- Pre-configured Biome settings
- Pre-commit hooks to check code quality
- Automatic linting and formatting

Use these commands to maintain code quality:
```bash
# Check for linting issues
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

The pre-commit hook automatically checks your code for errors before allowing commits, ensuring high-quality code in your repository. Warnings are reported but don't block commits, while errors must be fixed before the code can be committed.
