import React from 'react';
import "../../index.scss";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemText, InputBase, Avatar, Button } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Person, Notifications, PhoneAndroid, Share, Search, ChevronRight, ChevronLeft, Menu, BusinessCenter } from '@material-ui/icons/';
import Logo from '../../../src/assets/img/birkan.png'
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: 'relative',
    border: "1px solid white",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "transparent",
    '&:hover': {
      backgroundColor: "transparent",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  menuLogoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

type Props = {
  children: JSX.Element,
};

const Header: React.FC<Props> = ({
  children
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedTab, setSelectedTab] = React.useState(0)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleTabClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedTab(index);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className={classes.menuLogoWrapper}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Menu />
            </IconButton>
            <Link to="/"><img src={Logo} /></Link>
          </div>
          <div className="menu-icon-wrapper">
            <Person />
            <BusinessCenter />
            <Notifications />
          </div>

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <div className='header-avatar-wrapper'>
            {/*Waiting for img source from endpoint*/}
            <Avatar src='' className={classes.large}>OS</Avatar>
            <p className='header-avatar-name'>Birkan Özcan</p>
            <p className='header-avatar-title'>Senior Frontend Developer</p>
            <p className='header-avatar-company'>DOĞUŞ TEKNOLOJİ</p>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[{ name: 'ANASAYFA', url: '/' }, { name: 'ROLLER', url: '/roles' }, { name: 'KULLANICI LİSTESİ', url: '/user-list' }, { name: 'FİRMALAR', url: '/firms' }, { name: 'GRUPLAR', url: '/groups' }, { name: 'ÇIKIŞ YAP', url: '/' }].map((item, index) => (
            <Link key={item.name} to={item.url}>
              <ListItem
                key={item.name}
                selected={selectedTab === index}
                onClick={(e) => handleTabClick(e, index)}
                button>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div >
  );
}

export default Header