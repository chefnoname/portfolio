import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

import "./NavTabs.css";

const NavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TAB_PROPS = [
    ["About", "#aboutMe"],
    ["Projects", "#projects"],
    ["Algorithims", "#algorithims"],
    ["Contact", "#contact"],
  ];

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
            }}
            className="inactive"
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default NavTabs;
