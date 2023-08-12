# Context API


1. A Guide to React Context and useContext() Hook
https://dmitripavlutin.com/react-context-and-usecontext/

2. When do you need context?
The main idea of using the context is to allow your components to access global data and re-render when that global data is changed. Context solves the props drilling problem: when you have to pass down props from parents to children.

You can hold inside the context:

> global state
> theme
> application configuration
> authenticated user name
> user settings
> preferred language
> a collection of services

On the other side, you should think carefully before deciding to use context in your application.

First, integrating the context adds complexity. Creating a context, wrapping everything in a provider, and using the useContext() in every consumer — increases complexity.

Secondly, adding context complicates unit testing of components. During testing, you'll have to wrap the consumer components into a context provider. Including the components that are indirectly affected by the context — the ancestors of context consumers!


