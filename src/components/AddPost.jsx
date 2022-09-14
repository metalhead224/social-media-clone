import { Avatar, Button, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ImageIcon from '@mui/icons-material/Image';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SendIcon from '@mui/icons-material/Send';
import { Box } from "@mui/system";


const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px"
})


const AddPost = () => {

    const [open, setOpen] = useState(false);
    return (
        <div>
            <Tooltip onClick={e => setOpen(true)} sx={{ position: "fixed", bottom: 20, left: { xs: "calc(45%)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={200} bgcolor="white" p={4} borderRadius={5}>
                    <Typography variant="h6" color="grey" textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar
                            src="https://media-exp1.licdn.com/dms/image/C5603AQEkMnktnUwoFA/profile-displayphoto-shrink_800_800/0/1661491457359?e=1668643200&v=beta&t=dUA4eIGRabIbgdlZ0vBSngnz-RUS5gn3hvx0MnpqdWg"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography>Hi, Suman!</Typography>
                    </UserBox>
                    <TextField
                        sx={{width: "100%", mt:2 }}
                        id="standard-multiline-static"
                        multiline
                        rows={2}
                        placeholder="Share something..."
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={3} mb={3}>
                        <EmojiEmotionsIcon color="primary" />
                        <AddLocationIcon color="primary"/>
                        <CameraAltIcon color="secondary"/>
                        <VideocamIcon color="secondary"/>
                        <FlightTakeoffIcon color="success"/>
                        <ImageIcon color="secondary"/>
                        <PersonAddIcon color="error"/>
                    </Stack>
                    <Button variant="contained" fullWidth sx={{gap: 2, width:"100%"}}>Post <SendIcon /></Button>
                </Box>
            </StyledModal>
        </div>


    )
}

export default AddPost;