import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import logo from "../../assets/icons/logoWhite.svg";
import East from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import React from "react";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuItem from "@mui/material/MenuItem";

const links: { title: string; link: string }[] = [
  { title: "Work", link: "/work" },
  { title: "About", link: "/about" },
];

const serviceLinks: { title: string; link: string }[] = [
  { title: "Web Development", link: "/web-development" },
  { title: "UI/UX design", link: "/ui-ux-design" },
  { title: "Product Development", link: "/product-development" },
  { title: "Brand Development", link: "/brand-development" },
  { title: "App Development", link: "/app-development" },
];

const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="absolute left-0 right-0 top-0 text-white w-full flex justify-center bg-[#111111]">
      <nav className="max-w-[1440px] px-4 md:px-10 py-6 w-full flex items-center justify-between">
        <Box className="flex gap-16 items-center">
          <Link underline="none" href={"/"} className="w-32">
            <img src={logo} alt="Strathut white logo" />
          </Link>
          <Box className="flex items-center gap-4 mt-4">
            <Button
              className="!text-xl !text-white !capitalize"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disableRipple
              disableFocusRipple
              disableTouchRipple
              onClick={handleClick}
              endIcon={
                open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />
              }
              // onMouseEnter={(e) => handleClick(e)}
              // onMouseLeave={() => handleClose()}
            >
              Services
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  backgroundColor: "#111111",
                  "&::before": {
                    color: "#fff",
                  },
                },
              }}
              // transformOrigin={{ horizontal: "right", vertical: "top" }}
              // anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {serviceLinks?.map((link, ind) => (
                <MenuItem className="hover:!text-secondary">
                  <Link
                    key={ind}
                    underline="none"
                    href={link?.link}
                    color="#fff"
                    className="!text-xl hover:!text-secondary"
                  >
                    {link?.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
            {links?.map((link, ind) => (
              <Link
                key={ind}
                underline="none"
                href={link?.link}
                color="#fff"
                className="!text-xl"
              >
                {link?.title}
              </Link>
            ))}
          </Box>
        </Box>
        <Button
          variant="contained"
          className="bg-gradientPrimary3 !rounded-e-full !rounded-s-full !text-2xl !p-4 flex gap-1 !normal-case"
          onClick={() => navigate("/new-project")}
        >
          <span>Start a project</span>
          <East />
        </Button>
      </nav>
    </Box>
  );
};

export default Header;
