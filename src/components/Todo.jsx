import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Toolbar } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Item = styled('div')(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    // borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    // padding: theme.spacing(1),
    // borderRadius: '4px',
    textAlign: 'center',
}));
const Todo = () => {

    // let array = [];
    let array = [1, 2, 3, 4, 5];

    return (
        <>

            <Box sx={{
                flexGrow: 1,
                backgroundColor: "#55516E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem 7rem",
                minHeight: "81vh",
            }}>


                <Box sx={{
                    width: '60%',
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: '10px',
                    padding: "2rem 2rem 2rem 4rem",
                    // padding: "0 5rem",
                    // minHeight: "90vh",
                }}>

                    <Box sx={{
                        // padding: "2rem 4rem",
                        width: '100%',
                        height: 'auto'
                    }}>

                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >



                            {/* input section */}

                            <Grid xs={11}>
                                <Box className="inputDiv"
                                    sx={{
                                        mr: 2,
                                        mb: 4,
                                        mt: 4,
                                        // border: "1px solid white",
                                        backgroundColor: "#DECFCF",
                                    }}
                                >
                                    <TextField id="outlined-basic" placeholder="Type here to add" variant="outlined" fullWidth sx={{
                                        outline: 'none'
                                    }} />
                                </Box>
                            </Grid>


                            <Grid xs={1} >
                                <IconButton color="white" aria-label="delete"
                                    sx={{
                                        // border: "1px solid white",
                                        mb: 4,
                                        mt: 4,
                                        color: 'white',
                                        backgroundColor: "green",
                                        fontSize: 60
                                    }}>
                                    <AddRoundedIcon />
                                </IconButton>
                            </Grid>


                            {/* to do list section */}


                            {array.map((item, id) => {

                                return (
                                    <>

                                        <Grid xs={10}>
                                            <Box component="div" sx={{
                                                whiteSpace: 'normal',
                                                backgroundColor: "#DECFCF",
                                                // border: "1px solid white",
                                                mr: 2,
                                                mt: 2,
                                                p: 2,
                                            }}>
                                                todo notes {item}
                                            </Box>
                                        </Grid>


                                        <Grid xs={1}>
                                            <IconButton color="secondary" aria-label="edit"
                                                sx={{
                                                    // border: "1px solid white",
                                                    mt: 2,
                                                    color: 'white',
                                                    backgroundColor: "#670098",
                                                }}>
                                                <EditRoundedIcon />
                                            </IconButton>
                                        </Grid>



                                        <Grid xs={1}>
                                            <IconButton color="warning" aria-label="delete"
                                                sx={{
                                                    // border: "1px solid white",
                                                    mt: 2,
                                                    color: 'white',
                                                    backgroundColor: "#FF5555",
                                                }}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Grid>
                                    </>

                                );

                            })}

                        </Grid>
                    </Box>
                </Box>
            </Box >




            {/* <Box sx={{
                flexGrow: 1,
                backgroundColor: "#55516E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 5rem",
                minHeight: "90vh",
                width: '50%'
            }}>

                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={12}

                    sx={{ backgroundColor: "brown", }}

                >

                    <Grid xs={7}>
                        <Item>
                            <Box className="inputDiv">
                                <TextField id="outlined-basic" label="Type here to add" variant="outlined" />
                            </Box>
                        </Item>

                    </Grid>

                    <Grid xs={1}>
                        <Item>
                            <IconButton color="primary" aria-label="delete">
                                <NoteAddRoundedIcon />
                            </IconButton>
                        </Item>
                    </Grid>






                    <Grid xs={6}>
                        <Item>
                            <Box className="outputDiv">
                                <Box className="todo">
                                    <Box component="div" sx={{
                                        whiteSpace: 'normal',
                                        backgroundColor: "green"
                                    }}>
                                        todo notes 1
                                    </Box>
                                </Box>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid xs={1}>
                        <Item>
                            <IconButton color="secondary" aria-label="edit">
                                <EditRoundedIcon />
                            </IconButton>
                        </Item>
                    </Grid>
                    <Grid xs={1}>
                        <Item>
                            <IconButton color="warning" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </Item>
                    </Grid> */}


            {/* </Grid>
            </Box > */}

        </>
    );
}

export default Todo;

