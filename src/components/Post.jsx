import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVert from "@mui/icons-material/MoreVert";

const Post = () => {
    return (
        <Card sx={{margin: 5}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }}>
                        S
                    </Avatar>
                }
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
                title="Suman Osti"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://www.luxuryholidaynepal.com/uploads/articles/images/mardi-himal-trek.jpg"
                alt="Mardi himal"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    On the Mardi Himal Trek you get the views without the crowds. Expect authentic teahouses, stunning rhododendron forests and the most terrific views of the Annapurna Mountain Range.
                    You will get eye in eye with giants like Mardi Himal, Machhapuchhre, Annapurna South and Hiunchuli. What more do you want?
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;
