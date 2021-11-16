import logo from "../../logo.png";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

import "./NavTabs.css";

const NavTabs = ({ theme }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  const TAB_PROPS = [
    ["About", "#aboutMe"],
    ["Projects", "#projects"],
    ["Algorithms", "#algorithms"],
    ["Contact", "#contact"],
  ];

  return (
    <Box
      sx={{
        width: "100%",
        // display: "flex",
        // justifyContent: "space-between",
        background: `linear-gradient(90deg, ${theme} 80%, rgba(100,120,124,1) 100%)`,
        position: "fixed",
        zIndex: "100",
      }}
    >
      {/* <img src={logo} className="App-logo" alt="" /> */}
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
        {TAB_PROPS.map(([label, href]) => (
          <Tab
            key={href}
            component="a"
            label={label}
            href={href}
            sx={{
              fontWeight: "bolder",
              color: "white",
              scrollBehaviour: "smooth",
              m: '0 auto',
            }}
            className="inactive"
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default NavTabs;
