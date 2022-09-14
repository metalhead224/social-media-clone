import { AppBar, Avatar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import HikingIcon from '@mui/icons-material/Hiking';
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}><HikingIcon fontSize="large" />Spirit Roam</Typography>
                <HikingIcon fontSize="large" sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="search...." /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>

                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ height: 30, width: 30 }}
                        src="https://media-exp1.licdn.com/dms/image/C5603AQEkMnktnUwoFA/profile-displayphoto-shrink_800_800/0/1661491457359?e=1668643200&v=beta&t=dUA4eIGRabIbgdlZ0vBSngnz-RUS5gn3hvx0MnpqdWg" alt="img"
                        onClick = {e => setOpen(true)}
                    />

                </Icons>
                <UserBox onClick = {e => setOpen(true)}>
                    <Avatar sx={{ height: 30, width: 30 }} src="https://media-exp1.licdn.com/dms/image/C5603AQEkMnktnUwoFA/profile-displayphoto-shrink_800_800/0/1661491457359?e=1668643200&v=beta&t=dUA4eIGRabIbgdlZ0vBSngnz-RUS5gn3hvx0MnpqdWg" alt="img" />
                    <Typography variant="span">suman</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}  //the open in curly braces is from use state hook
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar;