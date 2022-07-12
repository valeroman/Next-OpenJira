import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import NextLink from 'next/link';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';

export const Navbar = () => {

  const { openSideMenu } = useContext( UIContext );
  
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
                onClick={ openSideMenu }
            >
                <MenuOutlinedIcon />
            </IconButton>

            <NextLink href="/"  passHref>
              <Link underline='none' color="white">
                <Typography variant='h6'>OpenJira</Typography>
              </Link>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}
