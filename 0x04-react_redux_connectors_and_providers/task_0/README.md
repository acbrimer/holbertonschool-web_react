# Task 0

## 0. Write mapStateToProps

- `src/App/App.js`:
  - Create a function named mapStateToProps. This should connect the uiReducer you created and the property isLoggedIn that your component is already using
  - Import connect from Redux, and connect the mapStateToProps to the component

## 1. Create a small store

- `src/index.js`:
  - Create a store using createStore from Redux that would contain the uiReducer state
- `src/App/App.js`:
  - Implement a provider passing the store that you created to the main App

## 2. Test MapStateToProps
- `src/App/App.js`:
  - Export `mapStateToProps`
- `src/App/App.test.js`
  - Add new suite/test for `mapStateToProps`