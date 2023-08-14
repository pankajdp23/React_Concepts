# React useMemo vs. useCallback: A pragmatic guide

https://blog.logrocket.com/react-usememo-vs-usecallback/

# What is useMemo?
In some scenarios, we have to include complex calculations in our React components. These complex calculations are inevitable and may slow down the rendering flow a bit. If you had to re-render a component that handles a costly calculation to update another view result (not the result of the costly calculation), the costly calculation may get triggered again, ultimately causing performance issues. This situation can be solved by caching the complex calculation result.

The useMemo Hook serves a similar purpose as useCallback, but it returns a memoized value instead of a function reference. This allows you to avoid repeatedly performing potentially costly operations until necessary. The useMemo Hook typically returns a cached value until a dependency gets changed. If a dependency gets changed, React will re-do the expensive calculation and updates the memoized value.

# Use useMemo when:

1. For expensive calculations that should be cached when unrelated re-renders happen
2. Memoizing a dependency of another Hook