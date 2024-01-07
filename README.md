# ReactGithub
Everything about React.js



1. What is React
React is a Library of JavaScript, its use for single page web application and its use for made UI Componants, it was created by Jordan Walke (facebook) in 2011.

2. Who made React?
React is created by Jordan Walke who is software engineer in Facebook, firsty it use for Facebook Newsfeed.

3. What is Babel?
Babel is tool for converting HTML tags and JSX to React, JavaScript older version is not supported in browser, so use babel for this.

4. How does Babel convert html code in React into valid code?
however HTML and JSX code is not supported in browser so babel that tool to do this.

ex.
const elemnet = <div> Hello World </div>

to React.

const element = React.createElement('div', {
    className : "test",
    children : "Hello World",
})


5. What is ReactDOM used for? Write an example?
ReactDOM is use for rendreding react elements to the DOM(UI).

<body>
    <div id="root"></div>
</body>
<script>
    const rootElement = React.createElement('div', {
        className: "container",
        children: "Hello React",
    })

    const rootReact = ReactDOM.createRoot(document.getElementById('root'));

    rootReact.render(rootElement);
</script>



6. What are the packages that you need to import for react to work with?
<script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
<script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>



7. How do you add react to a web application?
React web application can written directly in HTML page
firstly create one HTML page.
then after add three script tag including react import link
then write react componants


8. What is React.createElement?
React.createElement is a function and its allow to create a react element and its take three parameter
ex.
const rootElement = React.createElement( 'tag_name', properties, children);



9. What are the three properties that createElement accept?
types of element, its properties and children.


10. What is the meaning of render and root?

render is manupulating rendering react componants to the DOM.
the root element refers to the top-level element that is the parent of all other components in your application. 

