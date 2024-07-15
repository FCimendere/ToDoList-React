
import List from '@mui/material/List';
import {useState, useEffect} from "react";
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { FormatAlignJustifyRounded, JavascriptOutlined } from '@mui/icons-material';
import { Box, Typography} from '@mui/material';

// const initialTodos = [
//     {id:1, text:"walk the dog", completed: false},
//     {id:2, text:"walk the cat", completed: false},
//     {id:3, text:"walk the racoon", completed: true},
//     {id:4, text:"walk the ducks", completed: true},
// ]

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if(!data) return [];
    return data;
}


export default function TodoList(){
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
     }, [todos]);

    const removeTodo = (id) => {
        setTodos((preTodos) => {
            return preTodos.filter((t) => t.id !== id);
        });
    };

    const toggleTodo = (id) => {
        setTodos((preTodos) => {
            return preTodos.map((todo) => {
            if( id === todo.id){
                return{...todo, completed: !todo.completed};
            } else {
                return todo;
            }  
        });
        });
    };

    const addTodo = (text) => {
        setTodos((preTodos) => {
            return [...preTodos, {id:crypto.randomUUID(), text:text, completed: false}]
        })
    }

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            m: 3
        }}>  
        <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
            ToDo's
        </Typography> 
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {
              return <TodoItem 
              key={todo.id} 
              todo={todo} 
              removeTodo={() => removeTodo(todo.id)} 
              toggleTodo={()=> toggleTodo(todo.id)}
              />    
            })}
            <TodoForm addTodo={addTodo}/>
        </List>
        </Box>
        );
}


