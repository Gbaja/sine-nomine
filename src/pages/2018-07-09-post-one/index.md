---
path: "/introduction"
date: "2018-07-09"
title: "Introduction to Testing your Redux Code"
author: "Sine Nomine"
description: "Learn how to test your redux code when you are using axios to make api call and redux thunk middleware."
---

#### Prerequisites for better understanding of post

- Basic understanding of redux
- Basic understanding of Test Driven Development
- Using Jest for testing

#### What you'll learn


- How to test an action creator
- How to test test a reducer
- Useful modules you can use when testing 


### Dismantling redux and its jargons 

Redux is a state(i.e data) management tool for web applications and can be used with many libraries and frameworks.

All state in redux are stored and managed  via  **redux store** and is created using the createStore() method. The create store method takes a **reducer** as its argument.

To update your state in redux you have to dispatch(i.e send) an **action** using an **action creator**. An action is an object containing **type** and oten **payload**. Type describes the action, it is a string and you can name it whatever you want. Paylaod is the data you want to add to your redux store. Data can be of any data type and you can choose to call it something other than payload but payload is commonly used. Actions are used to pass data to your store.
Action creators are functions that return an action object.

The reducer previously mentioned is a function that communicates with the store. It is a pure function, that is, it takes in the previous state and an action as its arguments and always returns a new state. 

### Testing your action creator

#### Setting up for testing

I will be demonstrating by testing a action creator that logs a user out of your web application.

To get started I will create a test support file. I usually call my file test-support.js.

```javascript=
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockAxios = new MockAdapter(axios);

export { mockStore, mockAxios };
```

In the above code, I am importing a few useful modules to help up set up for our test;

- redux-thunk middleware is what I use in development stage to handle my asynchronous actions.
- redux-mock-store is a mock(fake copy) store for testing Redux async action creators and middleware. The mock store will create an array of dispatched actions which serve as an action log for tests.
- axios is a promised based module for creating HTTP requests which I use in my development stage
- axios-mock-adapter is a module for creating a mock HTTP request

The variable middlewares is an array of all the redux middlewares used in development stage, in my case I am only using thunk thus why it is the only one listed. 

The variable mockStore creates a fake store for testing purposes, basically doing the same thing as  when you call the createStore() method in redux.

In line 11, I am exporting both variables so I can use it when testing my action creator. 


#### Action creator

Now that the set up is out of the way, we can move on to testing our action creator. 

I will first define the action type in a variable

```javascript=
const LOGOUT_USER = "LOGOUT_USER";
```

The code below is an action creator that logs out a user from an app. The action creator makes a call to an api route. 

```javascript=
 const logout = () => {
  return dispatch => {
    return axios.get("/api/logout").then(() => {
      dispatch({
        type: LOGOUT_USER,
        payload: false
      });
    });
  };
};
```

In the code below, I am testing that the logout function defined above is returning the right action for logging out a user.

```javascript=
import { mockStore, mockAxios } from "../test-support";
describe("Logout action", () => {
  it("Returns the correct action to log out a user", () => {
  const mockLogout = () => mockAxios.onGet("/api/logout").reply(200);
    const store = mockStore();
    mockLogout();

    const expectedAction = {
      type: LOGOUT_USER,
      payload: false
    };

    store.dispatch(logout()).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
  }
```
In line 1, I am importing our helper variables previously defined in setup stage.

I am going to assume you are familiar with the syntax for testing using jest and not go into much details about that. 

In line 4, I am creating a mock log out function using the mockAxios variable which by default has access to methods built in to the module. 
I am using the onGet method to call our api. Notice how the string we pass in, is the same as the string we pass in to our axios.get method in our real logout function. It is important that it is the same.
The reply method is checking to make sure my request is going through hence why I am passing in the status code 200. 

In line 5, I am creating a variable to call the mockStore function previously defined.

In line 6, I am calling the callback function. We need to call it to make sure that the request is actually been sent.

In line 8, I am creating the expected action. As I assume you know, when testing you are basically comparing the expected outcome to the received outcome.

My original logout function, returns a promise so in line 13 - 15, I am dispatching the logout function and then comparing the action we get from the store to my expected outcome.

Thats it- how to test an action creator.

#### Testing reducer

As we know already, a reducer is the function that returns an action and is responsible for updating your state in the store. 

Below I am declaring an alert reducer which I will be testing.

```javascript=
const alertReducer = (state = {}, action) => {
  switch (action.type) {
  case ADD_ERROR:
    return { state, ...action.payload };
  default:
    return state;
  }
};
```

I will be testing that my state is updating, that is, it does not equal the initial state. I will also be using the deep-freeze which helps to make sure I am not mutating state as that is the rule for a reducer.

```javascript=
import deepFreeze from "deep-freeze";
describe("Alert reducer", () => {
  it("Adds an error", () => {
    const initialState = {
        type:"",
        message:""
    };
    const action = {
      type: ADD_ERROR,
      payload: { type: "error", message: "oops, something went wrong" }
    };
    deepFreeze(initialState);

    const updatedState = alertReducer(initialState, action);

    const expectedState = {
      type: "error",
      message: "oops, something went wrong"
    };
    
    expect(updatedState).toEqual(expectedState);
  });
});
```

In lines 8 - 11, I am declaring my action variable to let redux know what action to dispatch. 

In line 12, I am calling the deepFreeze function on the initialState to make its value "frozen" and ensure it is not been mutated.

In line 14, I am declaring a new variable to be the new value of the returned value of calling the alertReducer function declared earlier.

In line 21, I am comparing the values of the updatedState with that of the expected state.

Thats it! Thats an example of reducer test.

#### Testing the store