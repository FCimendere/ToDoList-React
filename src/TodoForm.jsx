import { ListItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Create } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


export default function TodoForm({addTodo}) {
    const [form, setForm] = useState("");
    const handleChange = (i) => {
        setForm(i.target.value)  
    }
    const handleSubmit = (i) => {
        i.preventDefault();
        addTodo(form);
        setForm("");
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
            <TextField 
            id="outlined-basic" 
            label="Add Todo" 
            variant="outlined"
            onChange={handleChange} 
            value={form} 
            InputProps=
                {{ endAdornment : (
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="create todo"
                        edge="end"
                        type="submit"
                        >
                            <Create/>
                        </IconButton>
                    </InputAdornment> 
                ),
                }}
            />
          </form>
        </ListItem>
    )
}
