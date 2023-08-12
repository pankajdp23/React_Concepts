# How to Use React useReducer() Hook

https://dmitripavlutin.com/react-usereducer/



useReducer() design is based on the Flux architecture.

The useReducer() hook lets you separate the state management from the rendering logic of the component.

const [state, dispatch] = useReducer(reducer, initialState) accepts 2 arguments: the reducer function and the initial state. Also, the reducer returns an array of 2 items: the current state and the dispatch function.

To update the state call dispatch(action) with the appropriate action object. The action object is then forwarded to the reducer() function that updates the state. If the state has been updated by the reducer, then the component re-renders, and [state, ...] = useReducer(...) hook returns the new state value.

useReducer() fits great to deal with complex state management (requiring at least 2-3 update actions). For simple state management, I recommend useState().