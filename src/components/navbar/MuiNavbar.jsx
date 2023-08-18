import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material"
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import { useNavigate } from "react-router-dom";
import './MuiNavbar.module.css';

const MuiNavbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1d39c4" }}>
      <Toolbar>
        <IconButton size="large" edge='start' color="inherit" aria-label="logo" onClick={() => navigate("/")} >
          <SportsMmaIcon/>
        </IconButton>
        <Typography variant="6" component='div' sx={{flexGrow: 1}}>
          Fighters App
        </Typography>
        <Stack direction='row' spaceing={2}>
          <Button color="inherit" onClick={() => navigate("/login")} >Login</Button>
          <Button color="inherit" onClick={() => navigate("/about")} >About us</Button>
          <Button color="inherit" onClick={() => navigate("/card")} >Card</Button>
          <Button color="inherit" onClick={() => navigate("/table")} >Table</Button>
          
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar;