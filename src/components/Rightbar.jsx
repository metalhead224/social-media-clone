import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import imageDatas from "./datas/datas";

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>

            <Box position="fixed" width={300}>
                <Typography variant="h6">
                    Online Friends
                </Typography>
                <AvatarGroup max={6} width="100%" sx={{position: "absolute" ,ml: 0}}>
                    <Avatar alt="Umang" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/79660686_2800267863385970_7899677843670433792_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rCTUP7hWh_MAX9jSKbp&_nc_ht=scontent.fktm8-1.fna&oh=00_AT98dnogLCVtSZSjvYw2g1UjyPSXbDyhijy0eK4UUSzdUA&oe=634784F5" />
                    <Avatar alt="Travis Howard" src="" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Travis Howard" src="" />
                    <Avatar alt="Travis Howard" src="" />
                </AvatarGroup>
                <Typography variant="h6" mt={6} mb={2}>
                    Latest posts
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    {
                        imageDatas.map(imageData => {

                            return (
                                <ImageListItem key={imageData.id}>
                                    <img
                                        src={imageData.src}
                                        alt={imageData.alt}
                                    />
                                </ImageListItem>
                            );
                        })
                    }
                </ImageList>

                <Typography variant="h6" mt={2} mb={1}>
                    Latest Conversations
                </Typography>

                <List sx={{ width: '100%'}}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/79660686_2800267863385970_7899677843670433792_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rCTUP7hWh_MAX9jSKbp&_nc_ht=scontent.fktm8-1.fna&oh=00_AT98dnogLCVtSZSjvYw2g1UjyPSXbDyhijy0eK4UUSzdUA&oe=634784F5" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Ghumna janey ho?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Umang
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Yashraj" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/301690896_1720703814956932_5516188497877223379_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=G6CWWQGZ3IcAX_8XR4n&_nc_ht=scontent.fktm8-1.fna&oh=00_AT8kAZEAigmKWLFGQcp3hLUXMyjYK1F7CSzEmTdM095t2A&oe=63257AB0" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="K cha?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to suman, Yashraj
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Dost aauna taw"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Nabin
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>

        </Box>
    )
}

export default Rightbar;