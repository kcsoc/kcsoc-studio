import React from "react";
import { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import PosterTemplateSocialMedia from "./SocialMediaInput";
import PosterTemplateLocation from "./LocationInput";
import DateTimeInput from "./DateTimeInput";
import TitleInput from "./TitleInput";
import StepChangeButtons from "./StepChangeButtons";
import { Grid, Button } from "@material-ui/core";
import Dropzone from "./Dropzone";
import UploadDataModal from "./UploadDataModal";

export default function UploadPosterWizard() {
	const [currentStep, setCurrentStep] = useState(1);
	const [title, setTitle] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [instaHandle, setInstaHandle] = useState("");
	const [facebookUrl, setFacebookUrl] = useState("");
	const [facebookInputError, setFacebookInputError] = useState(false);
	const [instagramInputError, setInstagramInputError] = useState(false);
	const [locationLine1, setLocationLine1] = useState("");
	const [locationLine2, setLocationLine2] = useState("");
	const [locationLine1Error, setLocationLine1Error] = useState(false);
	const [locationLine2Error, setLocationLine2Error] = useState(false);
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());
	const [speaker, setSpeaker] = useState("");
	const [zoomUrl, setZoomUrl] = useState("");
	const [imageData, setImageData] = useState({});
	const [modalOpen, setModalOpen] = React.useState(false);
	const [imageName, setImageName] = useState("");

	const next = () => {
		setCurrentStep(currentStep + 1);
	};
	const prev = () => {
		setCurrentStep(currentStep - 1);
	};

	return (
		<React.Fragment>
			<UploadDataModal
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				data={{
					unformattedDate: date,
					unformattedTime: time,
					title,
					instaHandle,
					facebookUrl,
					zoomUrl,
					speaker,
					locationLine1,
					locationLine2,
					imageData,
					setImageData,
					imageName,
				}}
			/>
			<Grid
				container
				direction="column"
				style={{
					position: "absolute",
					paddingTop: "20vh",
				}}
				justify="center"
				spacing={0}
			>
				<StepChangeButtons
					next={next}
					prev={prev}
					currentStep={currentStep}
					endAt={5}
				/>
				<TransitionGroup
					childFactory={(child) => React.cloneElement(child)}
					style={{ position: "relative", marginTop: "20px" }}
				>
					<Dropzone
						currentStep={currentStep}
						setStep={next}
						setImageData={setImageData}
						setImageName={setImageName}
					/>

					<TitleInput
						currentStep={currentStep}
						showOnStep={2}
						title={title}
						setTitle={setTitle}
						setStep={next}
						titleError={titleError}
						setTitleError={setTitleError}
						speaker={speaker}
						setSpeaker={setSpeaker}
					/>
					<PosterTemplateSocialMedia
						currentStep={currentStep}
						showOnStep={3}
						setInstaHandle={setInstaHandle}
						setFacebookUrl={setFacebookUrl}
						setStep={next}
						instaHandle={instaHandle}
						facebookUrl={facebookUrl}
						facebookInputError={facebookInputError}
						setFacebookInputError={setFacebookInputError}
						instagramInputError={instagramInputError}
						setInstagramInputError={setInstagramInputError}
						zoomUrl={zoomUrl}
						setZoomUrl={setZoomUrl}
					/>
					<PosterTemplateLocation
						currentStep={currentStep}
						showOnStep={4}
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
						showOnStep={5}
						setDate={setDate}
						setTime={setTime}
						generatePosterComponent={
							<Button
								variant="contained"
								color="secondary"
								onClick={() => {
									setModalOpen(true);
								}}
							>
								Upload to KCSOC database
							</Button>
						}
					/>
				</TransitionGroup>
			</Grid>
		</React.Fragment>
	);
}
