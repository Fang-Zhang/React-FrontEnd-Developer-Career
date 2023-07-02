# Common Questions
1. What are the features of React?
   
   - **JSX**:  JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.
   - **Components**: Components are the building blocks of any React application, and a single app usually consists of multiple components. It splits the user interface into independent, reusable parts that can be processed separately.
   - **Virtual DOM**: React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.
   - **One-way data-binding**: React’s one-way data binding keeps everything modular and fast. A unidirectional data flow means that when designing a React app, you often nest child components within parent components.
   - **High performance**: React updates only those components that have changed, rather than updating all the components at once. This results in much faster web applications.
  
2. What's the JSX?
   
   JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.
   ``` js
   render(){
    return(
        <div>
            <h1> This is a JSX code </h1>
        </div>
    )
   }
   ``` 

3. Can web browsers read JSX directly?
   - Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object 
   - For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use **Babel**
  
4. What's the virtual DOM?
   
   DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.

   React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects. 

5. Why use React instead of other frameworks, like Angular?
   - **Easy creation of dynamic applications**: React makes it easier to create dynamic web applications because it provides less coding and provides more functionality, whereas, with JavaScript applications, code tends to get complex very quickly.
   - **Improved performance**: React uses virtual DOM, which makes web applications perform faster. Virtual DOM compares its previous state and updates only those components in the real DOM, whose states have changed, rather than updating all the components — like conventional web applications.
   - **Reusable components**: Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their own logic and controls, and they can be reused throughout the application, which, in turn, dramatically reduces the development time of an application.
   - **Unidirectional data flow**: React follows a unidirectional data flow. This means that when designing a React app, we often nest child components within parent components. And since the data flows in a single direction, it becomes easier to debug errors and know where the problem occurs in an application at the moment.
   - **Dedicated tools for easy debugging**: Facebook has released a Chrome extension that we can use to debug React applications. This makes the process of debugging React to web applications faster and easier.   

6. what's an event in React?
   An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc. React events are named using camelCase, rather than lowercase in HTML. With JSX, you pass a function as the event handler, rather than a string in HTML.

   ```js
   <Button onPress={lightItUp}/>
   ```   

7.  What're synthetic events in React?
   Synthetic events combine the response of different browsers' native events into one API, ensuring that the events are consistent across different browsers. The application is consistent regardless of the browser it is running in. Here, **preventDefault** is a synthetic event.

   ```js
   function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        console.log('You just clicked a link');
    }
    return (
        <a href="#" onClick={handleClick}>
            Click Me
        </a>
    )
   }
   ```

8.  Explain how lists work in React.
   
   We create lists in React as we do in regular JavaScript. Lists display data in an ordered format. The traversal of lists is done using the map() function.

   ```js
   const names = ['Kohli', 'Saif', 'Arun', 'Aamir', 'Arif'];

   const listOfNames = () => {
    const listItems = names.map((name) => 
        <li key = {name}>
            {name}
        </li>
    );

    return(
        <ul>
            {listItems}
        </ul>
    )
   }
   ```

9.  Why's there a need for using keys in Lists?
    - A key is a unique identifier and it is used to identify which items have changed, been updated, or deleted from the lists
    - It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered
  
10. What're forms in React?
    - Using forms, users can interact with the application and enter the required information whenever needed. The form contains certain elements, such as text fields, buttons, checkboxes, radio buttons, etc
    - Forms are used for many different tasks such as user authentication, searching, filtering, indexing, etc

11. How do you create forms in React?
    
    ```js
    class NameForm extends React.Component{
        this.state = {value: ''};

        handleChange(event){
            this.setState({value: event.target.value});
        }
        handleSubmit(event){
            alert('A name was entered:' + this.state.value);
            event.preventDefault();
        }

        render(){
            return(
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Name;
                        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            )
        }
    }
    ```

12. What's an arrow function and how is it used in React?
    - An arrow function is a short way of writing a function to React.
    - It is unnecessary to bind ‘this’ inside the constructor when using an arrow function. This prevents bugs caused by the use of ‘this’ in React callbacks.
  
  ![Arrow Function](../resources/arrowFunction.jpeg)

# Component Questions
1.  What're the components of React?
   - Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.
   - There are two types of components in React:
     - Functional Components: These types of components have no state of their own and only contain render methods, and therefore are also called stateless components. They may derive data from other components as props (properties).
     - 
2.  What's the use of render() in React?
3.  What's a state in React?
4.  How do you implement state in React?
5.  How do you update the state of a component?
6.  What're props in React?
7.  How do you pass props between components?
8.  What're the differences between state and props?
9.  What's a higher-order component in React?
10. How can you embed two or more components into one?
11. What're the differences between class and functional components?
12. Explain the lifecycle methods of components.

# Redux Questions
31. What's Redux?
32. What're the components of Redux?
33. What's the Flux?
34. How is Redux different from Flux?

# Router Questions
35. What's React Router?
36. Why do we need to React Router?
37. How is React routing different from conventional routing?
38. How do you implement React routing?

# Styling Questions
39. How do you style React components?
40. Explain the use of CSS modules in React.