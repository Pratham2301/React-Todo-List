import React, { useState } from 'react';
import './Todo.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
// import { Toolbar } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


// clean local storage
// localStorage.removeItem('DATA');



// set local storage
let curr = localStorage.getItem('DATA');

if (curr === null) {
   let list = JSON.stringify([]);
   localStorage.setItem('DATA', list);
}



const Todo = () => {


   const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('DATA')));
   const [currdata, setCurrdata] = useState("");

   ///////////////////////////////////////////////////////////////////////////////

   const addTask = () => {

      if (currdata === "") {
         alert("Please type something to add");
         return;
      }

      let temp = localStorage.getItem('DATA');
      let list = JSON.parse(temp);

      list.push(currdata);

      // console.log("updated list = ", list);

      let str = JSON.stringify(list);
      localStorage.setItem('DATA', str);

      setCurrdata("");
      setTodoList(list);

   }

   ///////////////////////////////////////////////////////////////////////////////

   const deleteTask = (id) => {

      let temp = localStorage.getItem('DATA');
      let list = JSON.parse(temp);


      let newlist = list.filter((value, index) => {
         return index !== id;
      })

      let str = JSON.stringify(newlist);
      localStorage.setItem('DATA', str);

      setTodoList(newlist);

   }

   ///////////////////////////////////////////////////////////////////////////////

   const editTask = (id) => {

      let temp = localStorage.getItem('DATA');
      let list = JSON.parse(temp);


      let task = list[id];

      setCurrdata(task);

      let newlist = list.filter((value, index) => {
         return index !== id;
      })

      let str = JSON.stringify(newlist);
      localStorage.setItem('DATA', str);

      setTodoList(newlist);

   }

   ///////////////////////////////////////////////////////////////////////////////


   const clearAll = () => {

      let newlist = [];

      let str = JSON.stringify(newlist);
      localStorage.setItem('DATA', str);

      setTodoList(newlist);
   }

   ///////////////////////////////////////////////////////////////////////////////








   return (
      <>

         <Box id="maindiv" sx={{
            flexGrow: 1,
            backgroundColor: "#55516E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 7rem",
            minHeight: "81vh",
         }}>


            <Box id="resp-box" sx={{
               width: '60%',
               backgroundColor: "#FFFFFF",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               borderRadius: '10px',
               padding: "2rem 2rem 2rem 4rem",
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

                     <Grid item xs={12} sm={12} md={11} lg={11}>
                        <Box className="inputDiv"
                           sx={{
                              mr: 2,
                              mb: 4,
                              mt: 4,
                              // border: "1px solid white",
                              backgroundColor: "#DECFCF",
                           }}
                        >

                           <TextField
                              id="outlined-basic"
                              placeholder="Type here to add" variant="outlined"
                              fullWidth
                              value={currdata}
                              onChange={(e) => setCurrdata(e.target.value)}
                              sx={{
                                 outline: 'none'
                              }} />


                        </Box>
                     </Grid>


                     <Grid item xs={12} sm={12} md={1} lg={1} >
                        <IconButton color="white" aria-label="delete"
                           onClick={() => addTask()}
                           sx={{
                              // border: "1px solid white",
                              mb: 4,
                              mt: 4,
                              color: 'white',
                              backgroundColor: "#037E00",
                              fontSize: 60,
                              ':hover': {
                                 backgroundColor: "#026700",
                              },
                           }}>
                           <AddRoundedIcon fontSize="large" />
                        </IconButton>
                     </Grid>


                     {/* to do list section */}


                     {todoList.map((item, id) => {

                        return (

                           <React.Fragment key={id}>

                              <Grid item xs={12} sm={12} md={10} lg={10}
                                 sx={{
                                    // display: "flex",
                                    // alignItems: "center",
                                    // justifyContent: "center",
                                 }}>

                                 <Typography component="div" >

                                    <Box component="div" sx={{
                                       whiteSpace: 'normal',
                                       backgroundColor: "#DECFCF",
                                       // border: "1px solid black",
                                       borderRadius: "3px",
                                       mr: 2,
                                       mt: 2,
                                       p: 2,
                                       // textAlign: 'center',
                                       fontWeight: '400',
                                    }}>
                                       {item}
                                    </Box>

                                 </Typography>



                              </Grid>


                              <Grid item xs={6} sm={6} md={1} lg={1}
                                 sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // backgroundColor: "red",
                                 }}>
                                 <IconButton
                                    color="secondary"
                                    aria-label="edit"
                                    onClick={() => editTask(id)}
                                    sx={{
                                       // border: "1px solid white",
                                       mt: 2,
                                       color: 'white',
                                       backgroundColor: "#670098",
                                       ':hover': {
                                          backgroundColor: "#3B0057",
                                       },
                                    }}>
                                    <EditRoundedIcon />
                                 </IconButton>
                              </Grid>



                              <Grid item xs={6} sm={6} md={1} lg={1}
                                 sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // backgroundColor: "blue",

                                 }}>
                                 <IconButton
                                    color="warning"
                                    aria-label="delete"
                                    onClick={() => deleteTask(id)}
                                    sx={{
                                       // border: "1px solid white",
                                       mt: 2,
                                       color: 'white',
                                       backgroundColor: "#FF5555",
                                       ':hover': {
                                          backgroundColor: "#CB0707",
                                       },
                                    }}>
                                    <DeleteIcon />
                                 </IconButton>
                              </Grid>

                           </React.Fragment>

                        );

                     })}


                     {(todoList !== []  & todoList!==null & todoList.length>0) ? (
                        <>

                           <Grid item xs={12} sm={12} md={12} lg={12} sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mt: 5
                           }}>
                              <Button variant="contained"
                              onClick={()=>clearAll()}
                              sx={{
                                 backgroundColor: "#222C89",
                              }}
                              >
                                 Clear All
                                 </Button>
                           </Grid>


                        </>
                     ) : (
                        <></>
                     )}

                  </Grid>
               </Box>
            </Box>
         </Box >




      </>
   );
}

export default Todo;

