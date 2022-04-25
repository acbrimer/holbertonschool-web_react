# Task 2

## 7. Async actions & Thunk middleware

- `src/index.js`:
  - Apply `redux-thunk` middleware

## 8. Connect LoginRequest to the App

- `src/App/App.js`:
  - Connect the action creator `loginRequest` and map it to the `login` prop
  - Modify the component to use the new `login` function from the props instead of the one within the class
  - Refactor the component to remove any `login` or `logout` function and bind

## 9. Connect user state to the Footer

- `src/Footer/Footer.js`:

  - Create a `mapStateToProps` function
  - Map the `user` props to the `user` within the Redux state
  - Connect the `Footer` component to the function you created
  - Modify the render function and remove any use of the `Context`. Instead use the `user` prop

- `src/Header/Header.js`:
  - Create a `mapStateToProps` function
  - Map the `user` props to the `user` within the Redux state
  - Connect the `Header` component to the function you created
  - Connect the `Header` component to the `logout` action creator
  - Modify the render function and remove any use of the `Context`. Instead use the `user` prop. When the user clicks on the link, it should now dispatch the `logout` action creator
