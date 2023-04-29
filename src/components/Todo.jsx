import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Todo = () => {
    return (
        <>

            <Box sx={{
                flexGrow: 1,
                backgroundColor: "#55516E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 5rem",
                minHeight: "90vh",
            }}>

                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}

                    sx={{ backgroundColor: "brown", }}

                >

                    <Grid item xs={6}>
                        <Item>
                            <Box className="inputDiv">

                                <input type="text" />
                                <Button>Add</Button>

                            </Box>



                            <Box className="outputDiv">

                                <Box className="todo">
                                    <input type="text" />
                                    <Button>Edit</Button>
                                    <Button>Delete</Button>
                                </Box>

                                <Box className="todo">
                                    <input type="text" />
                                    <Button>Edit</Button>
                                    <Button>Delete</Button>
                                </Box>

                                <Box className="todo">
                                    <input type="text" />
                                    <Button>Edit</Button>
                                    <Button>Delete</Button>
                                </Box>

                                <Box className="todo">
                                    <input type="text" />
                                    <Button>Edit</Button>
                                    <Button>Delete</Button>
                                </Box>


                            </Box>


                        </Item>
                    </Grid>


                </Grid>
            </Box>

        </>
    );
}

export default Todo;

