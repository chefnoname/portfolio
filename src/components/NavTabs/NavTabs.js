import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

import "./NavTabs.css";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const NavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        background:
          "linear-gradient(90deg, rgba(10,25,41,1) 80%, rgba(100,120,124,1) 100%)",
        position: "fixed",
        zIndex: "100",
      }}
    >
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab
          label="About"
          href="/drafts"
          sx={{ fontWeight: "bolder", color: "white" }}
        />
        <LinkTab
          label="Projects"
          href="#projects"
          sx={{ fontWeight: "bolder", color: "white" }}
        />
        <LinkTab
          label="Algorithims"
          href="#projects"
          sx={{ fontWeight: "bolder", color: "white" }}
        />
        <LinkTab
          label="Testimonials"
          href="/spam"
          sx={{ fontWeight: "bolder", color: "white" }}
        />
        <LinkTab
          label="Contact"
          href="/spam"
          sx={{ fontWeight: "bolder", color: "white" }}
        />
      </Tabs>
    </Box>
  );
};

export default NavTabs;
