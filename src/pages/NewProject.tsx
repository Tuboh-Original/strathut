import Box from "@mui/material/Box";
import React, { useState } from "react";
import {
  StratPhoneNumberField,
  StratTextField,
} from "../components/common/StratTextField";
import Partners from "../components/common/Partners";
import Footer from "../components/navigation/Footer";
import StratButton from "../components/common/Button";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Check from "@mui/icons-material/Check";

const services = [
  { title: "uDesign", descr: "UI/UX Design" },
  { title: "proManagement", descr: "Project Management" },
  { title: "branding", descr: "Branding" },
  { title: "softDev", descr: "Software Development" },
  { title: "proDev", descr: "Product Development" },
  { title: "wDesign", descr: "Web Design" },
  { title: "gDesign", descr: "Graphic Design" },
  { title: "others", descr: "Others" },
];

const initOptions: any = {
  uDesign: false,
  proManagement: false,
  branding: false,
  softDev: false,
  proDev: false,
  wDesign: false,
  gDesign: false,
  others: false,
  otherText: "",
};

const NewProject = () => {
  const [page, setPage] = useState(1);

  const [options, setOptions] = useState(initOptions);

  function handleNext() {
    if (page < 3) {
      setPage(page + 1);
    } else {
      setPage(page + 1);
    }
  }
  // const {}

  const handleChange = (event: React.SyntheticEvent<Element, Event>) => {
    const element = event.currentTarget as HTMLInputElement;
    setOptions({
      ...options,
      [element?.name]: element?.checked,
    });
    console.log(options);
  };

  return (
    <Box className="flex flex-col w-full">
      <Box className="flex flex-col items-center bg-gradientPrimary2 overflow-clip">
        <Box className="max-w-[1440px] flex flex-col items-center py-28 2xl:py-36 px-4 md:px-12 gap-24">
          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            <p className="text-7xl font-medium">
              Start a project with Strathut
            </p>
            <p className="text-3xl text-textBody leading-[2.75rem]">
              Ready to create progress together? Tell us a little about your
              project and we’ll connect with you within 24 hours.
            </p>
          </Box>
          <Box className="flex flex-col gap-16 my-10 md:my-16 mx-24 md:mx-48 lg:mx-80">
            <Box className="flex flex-col gap-4">
              <Box className="grid grid-cols-3 gap-5 w-full">
                {[1, 2, 3].map((ind) => (
                  <Box
                    key={ind}
                    className={`h-[0.2rem] rounded-s-full rounded-e-full w-44 ${
                      page >= ind ? "bg-secondary" : "bg-secondary15"
                    }`}
                  ></Box>
                ))}
              </Box>
              <Box className="flex gap-2">
                <p className="font-bold text-3xl">0{page}</p>
                <p className="font-medium text-3xl">
                  {page === 1
                    ? "Contact Information"
                    : page === 2
                    ? "Project Information"
                    : "What services do you require?"}
                </p>
              </Box>
            </Box>
            <Box component={"form"} className="flex flex-col gap-8">
              {page === 1 ? (
                <React.Fragment>
                  <Box className="grid grid-cols-2 gap-8">
                    <StratTextField
                      label="First Name"
                      placeholder="Enter your first name"
                      type="hdshjdh"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                      required
                    />
                    <StratTextField
                      label="Last Name"
                      placeholder="Enter your last name"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                      required
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
                    required
                  />
                  <StratTextField
                    label="Company Name"
                    placeholder="Enter your company name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                    required
                  />
                  <StratTextField
                    label="Website"
                    type="url"
                    placeholder="Enter your company website"
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
                    required
                  />
                </React.Fragment>
              ) : page === 2 ? (
                <React.Fragment>
                  <StratTextField
                    label="Project Summary"
                    placeholder="Please provide a short description of your business and project."
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                    multiline
                    maxRows={3}
                  />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <FormGroup className="gap-2">
                    {services?.map((service, ind) => (
                      <FormControlLabel
                        key={ind}
                        control={
                          <Checkbox color="secondary" checkedIcon={<Check />} />
                        }
                        label={service?.descr}
                        name={service?.title}
                        labelPlacement="start"
                        checked={options[service?.title]}
                        onChange={(e) => handleChange(e)}
                        className={`flex justify-between !ms-0 rounded-s-full rounded-e-full border px-4 text-lg ${
                          options[service?.title]
                            ? "border-secondary text-secondary"
                            : "border-white40 text-white"
                        }`}
                      />
                    ))}
                  </FormGroup>
                  {options?.others && (
                    <StratTextField
                      label="Other Service"
                      placeholder="Please provide other services you require"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  )}
                </React.Fragment>
              )}
              <Box className="flex gap-8 justify-center">
                {page > 1 && (
                  <Button
                    variant="text"
                    sx={{ color: "#fff" }}
                    onClick={() => setPage(page - 1)}
                    className="!capitalize"
                  >
                    Back
                  </Button>
                )}
                {page < 3 ? (
                  <StratButton
                    onButton={() => handleNext()}
                    className="border-[6px] border-opacity-40 border-gray-500 backdrop-blur-[15px]"
                  >
                    Next
                  </StratButton>
                ) : (
                  <StratButton className="border-[6px] border-opacity-40 border-gray-500 backdrop-blur-[15px]">
                    Send
                  </StratButton>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Partners />
      <Footer />
    </Box>
  );
};

export default NewProject;
