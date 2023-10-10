import React, { useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import movieLogo from '../Assests/image/3I9xJ0Mrmv.gif';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/actions';

const Header = () => {
  const userDetails = useSelector((state:any) => state.form?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width:600px)'); 

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const Logout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const drawerContent = (
    <List>
      <ListItem button onClick={() => Logout()}>
        <ListItemText primary="Logout" />
      </ListItem>
      <ListItem onClick={()=>navigate('/profile')}>
        <ListItemText primary="profile"></ListItemText>
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Grid container alignItems="center">
            {isSmallScreen? <Grid item xs={2} sm={1}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer()}
              >
                <MenuIcon />
              </IconButton>
            </Grid>:<Grid></Grid>}
           
            <Grid item xs={2} sm={1}>
              <img height={50} src={movieLogo} />
            </Grid>
            <Grid item xs={4} sm={5}>
              <Typography className="font_ShopName" variant="h5" onClick={()=>navigate('/home')}>
                Cinema Gate
              </Typography>
            </Grid>
            {!isSmallScreen && (
              <>
                <Grid item xs={0} sm={4}>
                  <Typography
                    className="content-left-padding underline-on-hover"
                    variant="h5"
                onClick={()=>navigate('/profile')}
                  >
                    {`Hello ${' '} ${userDetails?.name}`}
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2} >
                  <Button color="inherit" onClick={() => Logout()}>
                    Logout
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => toggleDrawer()}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header;
