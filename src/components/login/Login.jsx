import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './Login.modules.css'
import { login } from './auth';




const Login = () => {
  const paperStyle = { padding: 20, height: '50vh', width: 380, margin: '150px auto' };
  const avatarStyle = { backgroundColor: "#5cc55a" };
  const btnStyle = { margin: '8px 0' };
  const signupMargin = { margin: '0 7px' };
  const [username, setUsername] = useState ('');
  const [password, setPasswrod] = useState ('');

  const nameOfPerson =(event) => {
    setUsername(event.target.value)
  };

  const passwordOfPerson =(event) => {
    setPasswrod(event.target.value)
  };

  return (
    <Grid container justifyContent="center">
      <Grid item>
      <Paper elevation={10} style={paperStyle} >
          <Grid align='center'>
          <Avatar style={avatarStyle}>
             <LockOutlinedIcon />
          </Avatar>
            <Typography component="h2" variant="h5">Sign in</Typography>
          </Grid>
          <TextField  value={username} id="standard-basic" label="Username" variant="standard" placeholder='Enter username' fullWidth required onChange={nameOfPerson} />
          <TextField value = {password} id="standard-basic" label="Password" variant="standard" placeholder='Password' type='password' fullWidth required onChange={passwordOfPerson}/>

          <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth onClick= { () =>  login(username,password)} >Login</Button>

    
        </Paper>
      </Grid>
    </Grid>
  )
};

export default Login;
