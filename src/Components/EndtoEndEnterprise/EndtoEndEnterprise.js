import React from "react";

const EnterpriseSection = () => {
  return (
    <div style={styles.container} id="benefits">
      <h1 style={styles.heading}>
      Our Story - Company History
      </h1>
      <p style={styles.subheading}>
      Founded in [Year], Beelinx has become a trusted leader in the technology services industry. Our journey started with a clear vision: to revolutionize how businesses interact with technology. Over the years, we've adapted and grown to meet the evolving needs of our clients. Today, we proudly serve businesses of all sizes across a diverse range of industries, helping them achieve their goals through cutting-edge technology solutions. Key milestones along the way include the launch of our flagship product, Beelinx, which transformed business operations; expansion into new global markets, establishing a worldwide presence; the introduction of Beelinx Business Suite, which expanded our product offerings; and the achievement of significant industry certifications, further solidifying our reputation for quality and innovation.
      </p>

      {/* Video Section */}
      <div style={styles.videoContainer}>
        <iframe
          style={styles.video}
          src="Enterprise Video.mp4" // Replace with your desired video URL
          title="Beelinx Overview Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div style={styles.diagramContainer}>
        <div style={styles.oldWayContainer}>
          <h2 style={styles.diagramHeading}>The old way</h2>
          <div style={styles.box}>Finance</div>
          <div style={styles.box}>Operations</div>
          <div style={styles.boxHighlight}>Any delays expected?</div>
          <div style={styles.box}>PM & Engineering</div>
          <div style={styles.boxHighlight}>Project deadline was missed :(</div>
          <div style={styles.box}>Legal</div>
          <div style={styles.box}>Professional Services</div>
          <div style={styles.boxHighlight}>
            There are some errors in the report
          </div>
          <div style={styles.box}>Sales</div>
        </div>
        <div style={styles.withBeelinxContainer}>
          <h2 style={styles.diagramHeading}>With Beelinx</h2>
          <div style={styles.box}>IT</div>
          <div style={styles.box}>Finance</div>
          <div style={styles.box}>Operations</div>
          <div style={styles.centralBox}>Beelinx</div>
          <div style={styles.box}>HR & Admin</div>
          <div style={styles.box}>PM & Engineering</div>
          <div style={styles.box}>Legal</div>
          <div style={styles.box}>Professional Services</div>
          <div style={styles.box}>Marketing & Creative</div>
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Try Beelinx for free</button>
        <button style={styles.buttonOutline}>Contact sales</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    padding: "40px",
    color: "#121330",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "16px",
    marginBottom: "40px",
    lineHeight: "1.5",
  },
  videoContainer: {
    marginBottom: "40px",
    textAlign: "center",
  },
  video: {
    width: "100%",
    maxWidth: "800px",
    height: "450px",
    borderRadius: "10px",
  },
  diagramContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "40px",
  },
  oldWayContainer: {
    textAlign: "left",
    backgroundColor: "#1A1A3D",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
  },
  withBeelinxContainer: {
    textAlign: "left",
    backgroundColor: "#1A1A3D",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
  },
  diagramHeading: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  box: {
    backgroundColor: "#E9F9F9",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    color: "#000",
    fontSize: "14px",
    textAlign: "center",
  },
  boxHighlight: {
    backgroundColor: "#FFDD57",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    color: "#000",
    fontSize: "14px",
    textAlign: "center",
    fontWeight: "bold",
  },
  centralBox: {
    backgroundColor: "#00D877",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    color: "#fff",
    fontSize: "14px",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    backgroundColor: "#00D877",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonOutline: {
    backgroundColor: "transparent",
    color: "#00D877",
    padding: "10px 20px",
    fontSize: "16px",
    border: "2px solid #00D877",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default EnterpriseSection;
