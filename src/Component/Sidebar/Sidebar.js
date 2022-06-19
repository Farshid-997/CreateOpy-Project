import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { SketchPicker } from "react-color";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";
import "./Sidebar.css";

import template from "./template.png";
import html2canvas from "html2canvas";

const drawerWidth = 350;

function Sidebar(props) {
  // state for the images to show in sidebar
  //const [images, setImages] = useState([]);

  //  state for the images to show in MainComponent
  //const [img, setImg] = useState([]);

  //const [imageactive, setImageActive] = useState(false);

  const [coloractive, setColorActive] = useState(false);

  const [textactive, setTextActive] = useState(false);

  const printRef = useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  // fetch images from the Server
  // useEffect(() => {
  //   fetch("https://intense-badlands-37074.herokuapp.com/images")
  //     .then((res) => res.json())
  //     .then((data) => setImages(data));
  // }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [color, setSelectedColor] = useState("#ccc");
  const [text, setText] = React.useState("");

  // const [para, setPara] = useState("");

  const [belowpara, setBelowPara] = useState("");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // this function responsible for show the from sidebar to main component
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // const handlePara = (e) => {
  //   setPara(e.target.value);
  // };

  const handleBelowPara = (e) => {
    setBelowPara(e.target.value);
  };

  //show images
  // const handleImage = (image) => {
  //   const img = image;
  //   setImg(img);
  // };

  // conditionaly shown the items
  // const showImages = () => {
  //   setImageActive(true);
  // };

  const showColors = () => {
    setColorActive(true);
  };

  const showText = () => {
    setTextActive(true);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <div>
        {/* For shhowing The Headers */}
        <Button variant="text" onClick={showText}>
          Headers
        </Button>{" "}
        <br />
        {textactive && (
          <textarea
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: "50", height: "50", padding: "15px" }}
            onChange={handleChange}
          />
        )}
      </div>

      {/* Midlle paragrah */}

      {/* <div>
       
        <Button variant="text" onClick={showText}>
          Middle Paragraph
        </Button>{" "}
        <br />
        {textactive && (
          <textarea
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: "50", height: "50", padding: "15px" }}
            onChange={handlePara}
          />
        )}
      </div> */}

      {/* below Paragraph */}

      <div>
        {/* For showing The paragraphs*/}
        <Button variant="text" onClick={showText}>
          Below Paragraph
        </Button>{" "}
        <br />
        {textactive && (
          <textarea
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: "50", height: "50", padding: "15px" }}
            onChange={handleBelowPara}
          />
        )}
      </div>

      <br />

      {/* For showing the */}
      <div>
        <Button variant="text" onClick={showColors}>
          Colors
        </Button>
        <div className="colors">
          {coloractive && (
            <SketchPicker
              color={color}
              onChangeComplete={(color) => setSelectedColor(color.hex)}
            />
          )}
          {/* <Button style={{marginTop:'10px'}} variant="text">X</Button> */}
        </div>
      </div>

      <br />

      <Button
        variant="outlined"
        color="success"
        size="large"
        onClick={handleDownloadImage}
      >
        Download As A Image
      </Button>
      <div>
        {/* <Button variant="text" onClick={showImages}>
          Images
        </Button> */}

        {/* <div className="side-img">
          {imageactive &&
            images.map((images) => (
              <div className="img" key={images._id}>
                <img
                  src={`data:image/png;base64,${images.image}`}
                  onClick={() => handleImage(images.image)}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Creatopy Banner
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <br />
      <div
        ref={printRef}
        className="img-div"
        style={{ backgroundColor: color, marginTop: "10%" }}
      >
        <div className="header-txt" style={{ color: "blue" }}>
          <h2 style={{ wordBreak: "break-word" }}>{text}</h2>
        </div>

        {/* <div className="para-text" style={{ color: "blue", fontSize: "15px" }}>
          {" "}
          {para.length <= 30 && (
            <h3 style={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
              {para}{" "}
            </h3>
          )}
        </div> */}

        <div
          className="below-para-text"
          style={{ color: "blue", fontSize: "12px" }}
        >
          <h3 style={{ wordBreak: "break-word" }}>
            {belowpara} <br />
          </h3>
        </div>

        <img
          className="inner-image"
          src={template}
          alt=""
          style={{
            width: "500px",
            height: "500px",
            marginTop: "150px",
            marginLeft: "150px",
          }}
        />

        {/* <img
          src={`data:image/png;base64,${img}`}
          alt=""
          style={{
            width: "280px",
            height: "310px",
            marginLeft: "150px",
            borderRadius: "50%",
          }}
          className="imgs"
        /> */}
      </div>
    </Box>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
