import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  background-color: white;
  padding: 40px;
  color: #121330;
  text-align: center;
  margin-top: 20px; // Default margin for larger screens

   @media (max-width: 768px) {
    margin-top: 300px; // Apply 600px margin-top for smaller screens
    padding: 20px;
  }

  @media (max-width: 1024px) {
    margin-top: 350px; // Apply 600px margin-top for smaller screens
    padding: 20px;
  }
  @media (max-width: 576px) {
    margin-top: 600px; // Maintain 600px margin for very small screens
    padding: 10px;
  }
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subheading = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
  line-height: 1.5;
`;

const VideoContainer = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const Video = styled.iframe`
  width: 100%;
  max-width: 800px;
  height: 450px;
  border-radius: 10px;
`;

const DiagramContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const OldWayContainer = styled.div`
  text-align: left;
  background-color: #1a1a3d;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  max-width: 100%;
`;

const WithBeelinxContainer = styled.div`
  text-align: left;
  background-color: #1a1a3d;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  max-width: 100%;
`;

const DiagramHeading = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Box = styled.div`
  background-color: #e9f9f9;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  color: #000;
  font-size: 14px;
  text-align: center;
`;

const BoxHighlight = styled(Box)`
  background-color: #ffdd57;
  font-weight: bold;
`;

const CentralBox = styled(Box)`
  background-color: #00d877;
  color: #fff;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background-color: #00d877;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonOutline = styled(Button)`
  background-color: transparent;
  color: #00d877;
  border: 2px solid #00d877;
`;

const EnterpriseSection = () => {
  return (
    <Container id="benefits">
      <Heading>Our Story - Company History</Heading>
      <Subheading>
        Founded in [Year], Beelinx has become a trusted leader in the technology services industry. Our journey started
        with a clear vision: to revolutionize how businesses interact with technology. Over the years, we've adapted and
        grown to meet the evolving needs of our clients. Today, we proudly serve businesses of all sizes across a
        diverse range of industries, helping them achieve their goals through cutting-edge technology solutions. Key
        milestones along the way include the launch of our flagship product, Beelinx, which transformed business
        operations; expansion into new global markets, establishing a worldwide presence; the introduction of Beelinx
        Business Suite, which expanded our product offerings; and the achievement of significant industry
        certifications, further solidifying our reputation for quality and innovation.
      </Subheading>

      {/* Video Section */}
      <VideoContainer>
        <Video
          src="Enterprise Video.mp4" // Replace with your desired video URL
          title="Beelinx Overview Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Video>
      </VideoContainer>

      {/* <DiagramContainer>
        <OldWayContainer>
          <DiagramHeading>The old way</DiagramHeading>
          <Box>Finance</Box>
          <Box>Operations</Box>
          <BoxHighlight>Any delays expected?</BoxHighlight>
          <Box>PM & Engineering</Box>
          <BoxHighlight>Project deadline was missed</BoxHighlight>
          <Box>Legal</Box>
          <Box>Professional Services</Box>
          <BoxHighlight>There are some errors in the report</BoxHighlight>
          <Box>Sales</Box>
        </OldWayContainer>
        <WithBeelinxContainer>
          <DiagramHeading>With Beelinx</DiagramHeading>
          <Box>IT</Box>
          <Box>Finance</Box>
          <Box>Operations</Box>
          <CentralBox>Beelinx</CentralBox>
          <Box>HR & Admin</Box>
          <Box>PM & Engineering</Box>
          <Box>Legal</Box>
          <Box>Professional Services</Box>
          <Box>Marketing & Creative</Box>
        </WithBeelinxContainer>
      </DiagramContainer> */}

      <ButtonContainer>
        <Button>Try Beelinx for free</Button>
        <ButtonOutline>Contact sales</ButtonOutline>
      </ButtonContainer>
    </Container>
  );
};

export default EnterpriseSection;
