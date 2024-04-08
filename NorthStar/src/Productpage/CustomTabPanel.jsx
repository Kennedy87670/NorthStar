import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Reviews(0)" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography
          sx={{
            width: 1144,
            lineHeight: 1.6,
            fontSize: 16,
            fontWeight: 400,
            color: "#555555",
          }}
        >
          A key objective is engaging digital marketing customers and allowing
          them to interact with the brand through servicing and delivery of
          digital media. Information is easy to access at a fast rate through
          the use of digital communications.
          <span
            style={{
              display: "block",
              paddingTop: "30px",
            }}
          >
            Users with access to the Internet can use many digital mediums, such
            as Facebook, YouTube, Forums, and Email etc. Through Digital
            communications it creates a Multi-communication channel where
            information can be quickly exchanged around the world by anyone
            without any regard to whom they are.[28] Social segregation plays no
            part through social mediums due to lack of face to face
            communication and information being wide spread instead to a
            selective audience.
          </span>
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        No Review
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
