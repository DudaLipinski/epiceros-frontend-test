# Epiceros Frontend Test

This application is a frontend test that allows users to create a new employee and show the created employees. It was built using TypeScript and React.

# # Installation
To use this application, you need to install it first:

    npm install

To start the application, run the following command:

    npm start

## Cypress Testing

This application uses Cypress for testing purposes. To start Cypress, you can run the following commands:

    npm run cypress:open
This will open the Cypress navigator, where you can select the tests you want to run.

Alternatively, you can run the tests in the terminal using the following command:

    npm run cypress:run
> **Note:** Make sure that the file `/cypress/constants.ts` has the correct port number the application is running on.

# Stack
For the frontend test project, I decided to use the following stack:

## TypeScript + Create React App
    
 -   TypeScript is a language that I love and have experience with. It provides better type-checking and catches errors at compile time, making the code more reliable and easier to maintain.
        
-   Create React App is a tool that sets up a modern React project with a pre-configured build pipeline. While it is true that there are newer and more performant alternatives available, such as Next.js or Vite, I felt that Create React App was still the best fit for this project. Other alternatives could not match the specific requirements and constraints that I had in mind, and starting from scratch with Webpack would have been more time-consuming.
        
##  TanStack Query
    
 - TanStack Query is a data fetching library that allows developers to handle asynchronous data without the need for a complicated state management library like Redux. It provides a simple and intuitive API that handles caching, optimistic updates, and error handling out of the box.
        
-  By using TanStack Query, I was able to significantly reduce the amount of boilerplate code required to manage data fetching in the project. The library also provided me with the flexibility to handle different types of data fetching requirements as the project evolved, without needing to worry about managing the state or caching myself.
        
## Testing and Quality Control
    
- To ensure the quality of the project, I used a combination of Cypress and Testing Library. One of the main reasons for this choice is that these tools allow for easy accessibility testing using ARIA tags.
        
- I also installed some tools to help with the quality of the code, including Eslint, Prettier, and Husky. Eslint ensures that the code conforms to a set of coding standards and best practices, while Prettier enforces a consistent code formatting style across the codebase. Finally, Husky runs some pre-commit hooks to enforce coding standards and ensure that commit messages follow a certain format.
