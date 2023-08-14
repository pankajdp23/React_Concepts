# React useMemo vs. useCallback: A pragmatic guide

https://blog.logrocket.com/react-usememo-vs-usecallback/


# What is useCallback?
When React re-renders a component, function references inside the component get re-created. If you pass a callback function to a memoized (with React.memo) child component via props, it may get re-rendered even if the parent component doesn’t apparently change the child component’s props. Each parent component re-rendering phase creates new function references for callbacks, so inequal callback props can trigger an unwanted child component re-render silently even visible props don’t get changed.

The useCallback React Hook returns a memoized function reference based on a function and dependencies array. So, we can use it to create optimized callbacks that don’t cause unwanted re-renders. This Hook returns a cached (memoized) function reference if dependencies aren’t changed.

# Wrap functions with useCallback when:

1. React.memo()-wrapped component accepts a callback function as a prop
2. Passing a callback function as a dependency to other Hooks (i.e., useEffect)