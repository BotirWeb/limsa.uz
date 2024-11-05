import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Sling as Hamburger } from "hamburger-react";
import { useTranslation } from "react-i18next";
import "./Header.scss";

export default function HeaderDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  // language dropdown

  const { t, i18n } = useTranslation();
  const languages = localStorage.getItem("i18nextLng");

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;

    i18n.changeLanguage(selectedLanguage);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // Sahifani tegishli bo'limga o'tkazadigan funksiya
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "100%",
        borderTop: "1px solid #ccc",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Close button */}
      <Box
        className="close_button"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignContent: "center",
          alignItems: "center",
          padding: "8px",
        }}
      >
        <span></span>
        <Button
          onClick={toggleDrawer(anchor, false)}
          variant="text"
          color="#60697b"
        >
          <span role="img" aria-label="close" className="anticon anticon-close">
            <span
              role="img"
              aria-label="close"
              className="anticon anticon-close"
            >
              <svg
                fill-rule="evenodd"
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="close"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
              </svg>
            </span>
          </span>
        </Button>
      </Box>
      <Divider />
      <List className="drawer_list">
        {[
          { text: t("biz_haqimizda"), id: "about" },
          { text: t("loyihalar"), id: "projects" },
          { text: t("xizmatlar"), id: "services" },
          { text: t("aloqa"), id: "contact" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => scrollToSection(item.id)}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* Hamburger component with onClick to open the drawer */}
      <Hamburger toggled={state.right} toggle={toggleDrawer("right", true)} />

      {/* Drawer for the right side */}
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}

        {/* drawer contact */}
        <div className="drawer_contact">
          <select
            className="drawer_dropdown"
            defaultValue="uz"
            onChange={handleChange}
            value={languages}
          >
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="eng">Eng</option>
          </select>
          <div className="drawer_phone">
            <a href="tel:+998935138833">+998 (93) 513-88-33</a>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
