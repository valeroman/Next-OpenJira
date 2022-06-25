import { useContext } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { UIContext } from '../../context/ui';


const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Draft']


export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

    return (
        <Drawer
            anchor="left"
            open={ sidemenuOpen }
            onClose={ closeSideMenu }
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem button key={ text }>
                                <ListItemIcon>
                                    { index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />  }
                                </ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>
                        ))
                    }
                </List>

                <Divider />

                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem button key={ text }>
                                <ListItemIcon>
                                    { index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />  }
                                </ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>
                        ))
                    }
                </List>

            </Box>
        </Drawer>
    )
}
