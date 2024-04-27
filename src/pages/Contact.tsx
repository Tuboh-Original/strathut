import Box from "@mui/material/Box";

import Zoom from "../assets/icons/zoom.svg?react";
import Slack from "../assets/icons/slack.svg?react";
import Teams from "../assets/icons/teams.svg?react";
import {
  StratPhoneNumberField,
  StratTextField,
} from "../components/common/StratTextField";
import StratButton from "../components/common/Button";
import Partners from "../components/common/Partners";
import Footer from "../components/navigation/Footer";

const Contact = () => {
  return (
    <Box className="flex flex-col w-full">
      <Box className="flex flex-col items-center bg-gradientPrimary2 overflow-clip">
        <Box className="max-w-[1440px] flex flex-col items-center py-16 sm:py-28 2xl:py-36 px-4 md:px-12 gap-16 w-full">
          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            <p className="text-6xl sm:text-7xl font-medium">We'd love to hear from you</p>
            <p className="text-2xl sm:text-3xl leading-7 text-textBody sm:leading-[2.75rem]">
              Contact us regarding any concerns and inquiries.
            </p>
          </Box>
          <Box className="py-10 sm:py-16 w-full">
            <Box className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <Box className="flex flex-col gap-16">
                <Box className="flex flex-col w-full gap-4">
                  <p className="text-lg">We also take meetings online</p>
                  <Box className="flex gap-5">
                    <Zoom />
                    <Slack />
                    <Teams />
                  </Box>
                </Box>
                <Box className="grid grid-cols-2">
                  <Box className="flex flex-col gap-4">
                    <p className="font-medium text-lg pb-1 border-b border-b-secondary w-fit">
                      United States
                    </p>
                    <p className="text-lg">(+44) 0333 333 3333</p>
                  </Box>
                  <Box className="flex flex-col gap-4">
                    <p className="font-medium text-lg pb-1 border-b border-b-secondary w-fit">
                      Nigeria
                    </p>
                    <p className="text-lg">(+44) 0333 333 3333</p>
                  </Box>
                </Box>
              </Box>
              <Box className="flex flex-col gap-8">
                <Box className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <StratTextField
                    label="First Name"
                    placeholder="Enter your first name"
                    type="hdshjdh"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                  />
                  <StratTextField
                    label="Last Name"
                    placeholder="Enter your last name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                  />
                </Box>
                <StratTextField
                  label="Email"
                  type="email"
                  placeholder="example@email.com"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
                <StratPhoneNumberField
                  defaultCountry="us"
                  label="Phone number"
                  placeholder="+1  201-555-0123"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  countryCodeEditable={false}
                  enableLongNumbers={true}
                  onChange={() => {}}
                />
                <StratTextField
                  label="Message"
                  placeholder="Please provide a short description of your business and any questions you have about Designership design systems."
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  multiline
                  maxRows={4}
                />
                <StratButton id={"button4"} className="mt-24 mx-auto border-[6px] border-opacity-40 border-gray-500 backdrop-blur-[15px]">
                  Send
                </StratButton>
              </Box>
            </Box>
          </Box>
          <Box className="about flex gap-8 justify-between items-center text-xl w-full overflow-visible">
            {[0, 1, 2, 3, 4, 5, 6, 7]?.map((ind) => (
              <p key={ind} className="text-4xl sm:text-6xl">
                hello@strathut.com
              </p>
            ))}
          </Box>
        </Box>
      </Box>
      <Partners />
      <Footer />
    </Box>
  );
};

export default Contact;
