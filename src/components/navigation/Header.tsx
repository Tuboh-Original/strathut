import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import logo from "../../assets/icons/logoWhite.svg";
import East from "@mui/icons-material/East";

const links: { title: string; link: string }[] = [
  { title: "Services", link: "/services" },
  { title: "Work", link: "/work" },
  { title: "About", link: "/about" },
];

const Header = () => {
  return (
    <Box className="absolute left-0 right-0 top-0 text-white w-full flex justify-center">
      <nav className="max-w-[1440px] px-4 md:px-10 py-6 w-full flex items-center justify-between bg-[#111111]">
        <Box className="flex gap-16 items-center">
          <Link underline="none" href={"/"} className="w-32">
            <img src={logo} alt="Strathut white logo" />
          </Link>
          <Box className="flex items-center gap-4 mt-4">
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
        >
          <span>Start a project</span>
          <East />
        </Button>
      </nav>
    </Box>
  );
};

export default Header;
