Completed up to lecture 31

Conditional Rendering: https://reactjs.org/docs/conditional-rendering.html
Lists & Keys: https://reactjs.org/docs/lists-and-keys.html

More on CSS Modules
CSS Modules are a relatively new concept (you can dive super-deep into them here: https://github.com/css-modules/css-modules). With CSS modules, you can write normal CSS code and make sure, that it only applies to a given component.

It's not using magic for that, instead it'll simply automatically generate unique CSS class names for you. And by importing a JS object and assigning classes from there, you use these dynamically generated, unique names. So the imported JS object simply exposes some properties which hold the generated CSS class names as values.

Example:

In Post.css File

.Post {
color: red;
}
In Post Component File

import classes from './Post.css';

const post = () => (
<div className={classes.Post}>...</div>
);
Here, classes.Post refers to an automatically generated Post property on the imported classes object. That property will in the end simply hold a value like Post**Post**ah5_1 .

So your .Post class was automatically transformed to a different class (Post**Post**ah5_1 ) which is unique across the application. You also can't use it accidentally in other components because you don't know the generated string! You can only access it through the classes object. And if you import the CSS file (in the same way) in another component, the classes object there will hold a Post property which yields a different (!) CSS class name. Hence it's scoped to a given component.

By the way, if you somehow also want to define a global (i.e. un-transformed) CSS class in such a .css file, you can prefix the selector with :global .

Example:

:global .Post { ... }

Now you can use className="Post" anywhere in your app and receive that styling.

Useful Resources & Links
Using CSS Modules in create-react-app Projects: https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2
More information about CSS Modules: https://github.com/css-modules/css-modules

section06

- 81 error boundaries
  - Error Boundaries: https://reactjs.org/docs/error-boundaries.html
  - Chrome Devtool Debugging: https://developers.google.com/web/tools/chrome-devtools/javascript/
  - [ErrorBoundaries](https://jonbellah.com/articles/react-error-boundary/)

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

# Component Lifecycle

    * Only available in Class-based Components!
    * "Lifecycle Hooks" != "React Hooks"!

| name                       | notes | examples |
| -------------------------- | ----- | -------- | --- |
| constructor()              | ---   | ---      |
| getDerivedStateFromProps() | ---   | ---      |
| getSnapshotBeforeUpdate()  | ---   | ---      |
| componentDidCatch()        | ---   | ---      |
| componentWillUnmount()     | ---   | ---      |
| shouldComponentUpdate()    | ---   | ---      | --- |
| componentDidUpdate()       | ---   | ---      |
| componentDidMount()        | ---   | ---      | --- |
| render()                   | ---   | ---      |

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

# component creation

- differentiate between:
  - rendered when something changes
    - ex: props changing
  - rendered when something is created for the first time
    - part of a list
    - conditionally showed

## constructor()

- executes (default ES6 class feature)
- receives the props
- have to call super(props) if you add your own constructor
- for basic initilization, setting initial state
- should not cause side effects
  - ex: sending an http request
  - ex: storing data in the browser
  - ex: sending data to Google Analytics
  - side effects cause unneccessary rerenders
  - side effects can impact performance needlessly

## getDerivedStateFromProps(props, state)

- whenever props change in a class-based Component, you can sync state to them
- rarely used
- allows you to sync local state as derived from props
- don't cause side effects here!

## render()

- prepare, structure, render JSX
- don't cause side effects here!
- don't block the rendering process
- ### render child components() if defined

## componentDidMount()
- very important, used a lot with class-based components
- side effects OK here
- but don't setState() here syncronously, 
	- ex: unless it is in a `.then` block of a `Promise`
	- syncronous setState() triggers re-render cycle, impacting performance

## getSnapshotBeforeUpdate()

-
-
-

## componentDidCatch()

-
-
-

## componentWillUnmount()

-
-
-

## shouldComponentUpdate()

-
-
-

## componentDidUpdate()

-
-
-

-
-
