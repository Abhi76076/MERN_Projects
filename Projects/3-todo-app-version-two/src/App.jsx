import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [{
    name:'Buy Milk',
    duedate:'04/08/2024',

  },
{
  name:'Go to college',
  duedate:'04/08/2024',

},
{
  name:'Create App',
  duedate:'04/08/2024',

}

];
return (
    <center className="todo-container">
     <AppName/>
     <AddTodo/>
     <TodoItems todoItems={todoItems}></TodoItems>
     
     
    </center>
  );
}

export default App;
