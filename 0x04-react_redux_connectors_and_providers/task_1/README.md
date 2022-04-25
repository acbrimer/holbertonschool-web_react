# Task 1

## 3. Update mapStateToProps

- `src/App/App.js`:
  - Update the mapStateToProps function to also pass to the component the value for `displayDrawer`. It should be connected to the Reducer attribute `isNotificationDrawerVisible`
  - Update the render function of the component to use the value `displayDrawer` coming from the props instead of the state

## 4. Connect action creators

- `src/App/App.js`:
  - Connect to the component the actions creators `displayNotificationDrawer` and `hideNotificationDrawer`
  - You should use the simplified version for the `mapDispatchToProps`. No need to import `bindActionCreators`
  - Modify the render function of the component to use the functions passed within the props instead of the action within the Class component

## 5. Refactor

- `src/App/App.js`:
  - Delete the old function `handleDisplayDrawer`
  - Delete the old function `handleHideDrawer`
  - Remove any state property related to the display of the drawer
  - Remove any binding in the constructor
