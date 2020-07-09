import React, { useState } from "react";
import PosterTemplateStep1 from "./PosterTemplateStep1";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PosterTemplateSocialMedia from "./SocialMediaInput";
import PosterTemplateLocation from "./LocationInput";
import DateTimeInput from "./DateTimeInput";
import dateFormat from "dateformat";
import StepChangeButtons from "./StepChangeButtons";

const useStyles = makeStyles((theme) => ({}));

/*State from all the steps will be stored in here*/
export default function PosterTemplateWizard() {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(1);
  const [url, setURL] = useState("");
  const [urlError, setURLError] = useState(false);
  const [instaHandle, setInstaHandle] = useState("");
  const [facebookHandle, setFacebookHandle] = useState("");
  const [facebookInputError, setFacebookInputError] = useState(false);
  const [instagramInputError, setInstagramInputError] = useState(false);
  const [locationLine1, setLocationLine1] = useState("");
  const [locationLine2, setLocationLine2] = useState("");
  const [locationLine1Error, setLocationLine1Error] = useState(false);
  const [locationLine2Error, setLocationLine2Error] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <React.Fragment>
      <p>{currentStep}</p>
      <p>{url}</p>
      <p>{instaHandle}</p>
      <p>{facebookHandle}</p>
      <p>{locationLine1}</p>
      <p>{locationLine2}</p>
      <p>{dateFormat(date, "ddd dS mmm")}</p>
      <p>{dateFormat(time, "h:MM TT")}</p>
      <Grid
        container
        direction="column"
        spacing={4}
        style={{
          paddingTop: "200px",
          paddingBottom: "200px",
        }}
        justify="center"
      >
        <StepChangeButtons next={next} prev={prev} currentStep={currentStep} />
        <PosterTemplateStep1
          currentStep={currentStep}
          setURL={setURL}
          setStep={next}
          urlError={urlError}
          setURLError={setURLError}
        />
        <PosterTemplateSocialMedia
          currentStep={currentStep}
          setInstaHandle={setInstaHandle}
          setFacebookHandle={setFacebookHandle}
          setStep={next}
          instaHandle={instaHandle}
          facebookHandle={facebookHandle}
          facebookInputError={facebookInputError}
          setFacebookInputError={setFacebookInputError}
          instagramInputError={instagramInputError}
          setInstagramInputError={setInstagramInputError}
        />
        <PosterTemplateLocation
          currentStep={currentStep}
          setLocationLine1={setLocationLine1}
          setLocationLine2={setLocationLine2}
          setStep={next}
          locationLine1={locationLine1}
          locationLine2={locationLine2}
          locationLine1Error={locationLine1Error}
          setLocationLine1Error={setLocationLine1Error}
          locationLine2Error={locationLine2Error}
          setLocationLine2Error={setLocationLine2Error}
        />
        <DateTimeInput
          currentStep={currentStep}
          setDate={setDate}
          setTime={setTime}
          setStep={setCurrentStep}
          date={date}
          time={time}
          url={url}
          instaHandle={instaHandle}
          facebookHandle={facebookHandle}
          locationLine1={locationLine1}
          locationLine2={locationLine2}
          setLocationLine1Error={setLocationLine1Error}
          setLocationLine2Error={setLocationLine2Error}
          setInstagramInputError={setInstagramInputError}
          setFacebookInputError={setFacebookInputError}
          setURLError={setURLError}
        />
      </Grid>
    </React.Fragment>
  );
}
