# MyReads

This is a web application that tracks a list of books according to whether you have read them, want to read them, or are currently reading them

### Prerequisites

This project requires node package manager.

### Installing

1. Install node dependencies
    ```
    npm install
    ```
2. Start the application
    ```
    npm start
    ```

Once started, the application will be served at ```localhost:3000``` (the webpage should open automatically on start)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Built With

* [Create React App](https://github.com/facebook/create-react-app)
* [React Router](https://github.com/ReactTraining/react-router)

## Authors

* [**Zak Laughton**](https://github.com/zlaughton)
* This repository was forked from the [MyReads Udacity project repository](https://github.com/udacity/reactnd-project-myreads-starter), which contains most of the original design elements. See the list of [contributors](https://github.com/zlaughton/reactnd-project-myreads-starter/contributors) who participated in this project.