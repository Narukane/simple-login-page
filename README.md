# Simple Login Page Using React Native

This app demonstrates a simple login page using React Native. It includes the following implementations:
1. `useCallback`
2. `useMemo`
3. `axios`
4. `useState`

## How to Run This App

1. Clone this repository:
    ```bash
    git clone https://github.com/Narukane/simple-login-page.git
    cd simple-login-page
    ```

2. Install the dependencies:
    ```bash
    yarn install
    ```

3. Start the application:
    ```bash
    yarn start
    ```

## Code Implementation

### `useCallback`
`useCallback` is used to memoize the `handleLogin` function to prevent unnecessary re-creations.

### `useMemo`
`useMemo` is used to memoize the email validation function to prevent unnecessary recalculations.

### `axios`
`axios` is used to handle the API POST call to submit email and password.

### `useState`
`useState` is used to manage the state of the email and password inputs.
