### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  `React Router` is a library that handles and manages pages on client side.

- What is a single page application?

  `Single page` is a term that indicates web apps that fetches neccessary resources(html,js,css) from servers at once and execute the scripts to render the page and manage navigating at the client side.

- What are some differences between client side and server side routing?

  Client side routing is handled by the scripts on the client on and not initiate GET request to servers.

  By the other hand, server side routing is required the server return appropriate responses base on the request url

- What are two ways of handling redirects with React Router? When would you use each?

  1. Use `Link` component with setting `to` prop.
  2. Use `useNavigate` to handle redirect based on side effects.

- What are two different ways to handle page-not-found user experiences using React Router? 

  1. Redirect to another page.
  2. Define a default `page-not-found` page to catch the `page-not-found` error.

- How do you grab URL parameters from within a component using React Router?

  use `useParams` hook to get the URL parameters.

- What is context in React? When would you use it?

  `Context` is a convenient way to pass global states deep down into Component Tree.

- Describe some differences between class-based components and function
  components in React.

  |       | Class-based | Function |
  | ----- | -----       | -------- |
  | props | use **this**.props | use function parameters as props |
  | states | use class property | **useState** hook |
  | side effect | define **componentDidMount** method | **useEffect** hook |

- What are some of the problems that hooks were designed to solve?

  Hooks help for managing local states and its reactivity, caching states, and react to side effects