import React  from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Category = () => {
    
    
    return (
        <>
            <h1>Категории</h1>
            <TextField
                    id="outlined-multiline-flexible"
                    label="Название категории"
                    multiline
                    maxRows={4}
                    sx={{m: 1}}
             />
             <br />
             <TextField
                    id="outlined-multiline-flexible"
                    label="Описание категории"
                    multiline
                    maxRows={4}
                    sx={{m: 1}}
             />
             <br />
              <Button variant="contained" color="success" sx={{m: 1}}>Save</Button>
        </>
    )
}
export default Category