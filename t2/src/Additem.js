

import React, { useEffect,useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {CheckLogin} from "./checkLogin";


export default function Additem() {
    const {data,setData} = useContext(CheckLogin);

    const [user, setUse] = useState({});
    
    function handleChange(e) {
        setUse({ ...user, [e.target.name]: e.target.value });
    }
  
    function handleAddItem(){
            setData(user)
    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField id="outlined-text" label="category" name="category" type="text" onChange={handleChange} />

            </div>
            <div>
                <TextField id="outlined-text" label="title" name="title" type="text" onChange={handleChange} />
            </div>
            <div>
                <TextField id="outlined-text" label="description" name="des" type="text" onChange={handleChange} />

            </div>


            <Stack direction="row">
                <Button onClick={handleAddItem} variant="contained" color="success">
                    add
                </Button>

            </Stack>
        </Box>
    );
}