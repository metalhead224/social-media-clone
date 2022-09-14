import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import React from "react";
import AddPost from "./components/AddPost";

function App() {


  return (
    <Box bgcolor={"backgroundColor.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <AddPost />

    </Box>
  );
}

export default App;
