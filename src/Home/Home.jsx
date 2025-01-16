import React from "react";
import {
  Box,
  Button,
  Grid,
  Grid2,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import Logo from "../image/logo.png";
import mainSec from "../image/home.png";
import FourthSec from "../image/fourth-sec.png";
import Fifth1 from "../image/fifth1.png";
import Fifth2 from "../image/fifth2.png";
import Fifth3 from "../image/fifth3.jpg";
import footerLogo from "../image/logo-footer.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import EastIcon from "@mui/icons-material/East";
import CampaignIcon from "@mui/icons-material/Campaign";
import PaymentsIcon from "@mui/icons-material/Payments";
import MonitorIcon from "@mui/icons-material/Monitor";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleIcon from "@mui/icons-material/People";

const cardData = [
  {
    title: "Post Jobs with Ease",
    description: "Read more",
    image: Fifth1,
  },
  {
    title: "Find Opportunities Instantly",
    description: "Read more",
    image: Fifth2,
  },
  {
    title: "Streamlined Searching Process",
    description: "Read more",
    image: Fifth3,
  },
];

function Home() {
  return (
    <Box>
      {/* Header-Section */}
      <Grid
        container
        className="container"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4, py: 1 }}
      >
        <Grid item>
          <Box
            component="img"
            src={Logo}
            alt="tradeHunter-logo"
            className="logo"
          ></Box>
        </Grid>
        <Grid2 item>
          <Button variant="contained" color="success">
            Coming Soon
          </Button>
        </Grid2>
      </Grid>

      {/* Main-Section */}
      <Grid
        container
        className="container"
        spacing={4}
        alignItems="center"
        sx={{ backgroundColor: "#F5F7FA" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Start Posting Jobs <br /> search for a providers <br /> with the
            click of a button through{" "}
            <span style={{ color: "#32DE84" }}>our website</span> and
            <span style={{ color: "#32DE84" }}> Our App</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            Explore service providers and jobs
          </Typography>
          <Button
            variant="contained"
            color="success"
            endIcon={<EastOutlinedIcon />}
          >
            Coming Soon
          </Button>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            component="img"
            src={mainSec}
            alt="main-sec"
            sx={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>

      <Grid className="container section1" spacing={4} alignItems="center">
        <Box>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 2, color: "#4D4D4D" }}
          >
            Top Category
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "text.secondary",
              mx: "auto",
              mb: 6,
              color: "#717171",
            }}
          >
            We have more than 500+ categories
          </Typography>
        </Box>

        <Grid2 container spacing={4} justifyContent={"center"}>
          <Grid2 item xs={12} sm={6} md={3}>
            <Card
              variant="outlined"
              className="card-category"
              sx={{
                borderRadius: 2,
                marginBottom: "40px",
                py: 2,
                px: 1,
              }}
            >
              <CardContent>
                <SignalCellularAltIcon style={{ fontSize: "40px" }} />
                <p style={{ fontWeight: "bold", margin: "10px 0" }}>
                  Electrician
                </p>

                <a
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  756 jobs available <EastIcon />
                </a>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <Card
              variant="outlined"
              className="card-category"
              sx={{
                borderRadius: 2,
                marginBottom: "40px",
                py: 2,
                px: 1,
              }}
            >
              <CardContent>
                <MonitorIcon style={{ fontSize: "40px" }} />
                <p style={{ fontWeight: "bold", margin: "10px 0" }}>Plumber</p>

                <a
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  756 jobs available <EastIcon />
                </a>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <Card
              variant="outlined"
              className="card-category"
              sx={{
                borderRadius: 2,
                marginBottom: "40px",
                py: 2,
                px: 1,
              }}
            >
              <CardContent>
                <CampaignIcon style={{ fontSize: "40px" }} />
                <p style={{ fontWeight: "bold", margin: "10px 0" }}>
                  Carpenter
                </p>

                <a
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  75 jobs available <EastIcon />
                </a>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <Card
              variant="outlined"
              className="card-category"
              sx={{
                borderRadius: 2,
                marginBottom: "40px",
                py: 2,
                px: 1,
              }}
            >
              <CardContent>
                <PaymentsIcon style={{ fontSize: "40px" }} />
                <p style={{ fontWeight: "bold", margin: "10px 0" }}>
                  Cleaning Staff
                </p>

                <a
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  50 jobs available <EastIcon />
                </a>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Grid>

      <Grid className="container section1" spacing={4} alignItems="center">
        <Box>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 2, color: "#4D4D4D" }}
          >
            Start Accepting jobs with our app and stay busy all the time!
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "text.secondary",
              mx: "auto",
              mb: 6,
              color: "#717171",
            }}
          >
            Looking for manpower
          </Typography>
        </Box>

        {/* <Grid
          container
          spacing={4}
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Grid2 xs={12} md={4} maxWidth={"30%"} className="jobs-finding">
            <Card
              sx={{
                borderRadius: 2,
                marginBottom: "40px",
                border: 0,
                boxShadow: 0,
                py: 2,
                px: 1,
                textAlign: "center",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="card-icon">
                  <GroupsIcon style={{ fontSize: "40px" }} />
                </div>

                <h2 style={{ fontWeight: "bold", margin: "10px 0" }}>
                  Different type of services
                </h2>

                <a>
                  We have more than 500+ Services to choose from tailored to
                  your need
                </a>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={12} md={4} maxWidth={"30%"}>
            <Card
              sx={{
                borderRadius: 2,
                marginBottom: "40px",
                border: 0,
                boxShadow: 0,
                py: 2,
                px: 1,
                textAlign: "center",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="card-icon">
                  <LocationCityIcon style={{ fontSize: "40px" }} />
                </div>
                <h2 style={{ fontWeight: "bold", margin: "10px 0" }}>
                  Available at your place
                </h2>

                <a>
                  Available on your website and app easy sign up process for
                  service hunter and service provider
                </a>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={12} md={4} maxWidth={"30%"}>
            <Card
              sx={{
                borderRadius: 2,
                marginBottom: "40px",
                border: 0,
                boxShadow: 0,
                py: 2,
                px: 1,
                textAlign: "center",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="card-icon">
                  <PeopleIcon style={{ fontSize: "40px" }} />
                </div>
                <h2 style={{ fontWeight: "bold", margin: "10px 0" }}>
                  Trusted by users
                </h2>

                <a>Our platform is served and easy to navigate through</a>
              </CardContent>
            </Card>
          </Grid2>
        </Grid> */}
        <Grid
          container
          spacing={4}
          justifyContent="center" // Centers cards horizontally
          alignItems="stretch" // Ensures all cards have equal height
        >
          <Grid item xs={12} sm={6} md={4} className="jobs-finding">
            <Card
              sx={{
                borderRadius: 2,
                marginBottom: "40px",
                border: 0,
                boxShadow: 0,
                py: 2,
                px: 1,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flexGrow: 1,
                }}
              >
                <div className="card-icon">
                  <GroupsIcon style={{ fontSize: "40px" }} />
                </div>
                <h2 style={{ fontWeight: "bold", margin: "10px 0" }}>
                  Different type of services
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    margin: "0",
                    lineHeight: "1.5",
                    minHeight: "50px", // Ensures consistent height for all text
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  We have more than 500+ Services to choose from tailored to
                  your need
                </p>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 2,
                marginBottom: "40px",
                border: 0,
                boxShadow: 0,
                py: 2,
                px: 1,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flexGrow: 1,
                }}
              >
                <div className="card-icon">
                  <LocationCityIcon style={{ fontSize: "40px" }} />
                </div>
                <h2 style={{ fontWeight: "bold", margin: "10px 0" }}>
                  Available at your place
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    margin: "0",
                    lineHeight: "1.5",
                    minHeight: "50px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Available on our website and app easy sign-up process for
                  service hunters and service providers
                </p>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 2,
                marginBottom: "40px",
                border: 0,
                boxShadow: 0,
                py: 2,
                px: 1,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flexGrow: 1,
                }}
              >
                <div className="card-icon">
                  <PeopleIcon style={{ fontSize: "40px" }} />
                </div>
                <h2 style={{ fontWeight: "bold", margin: "10px 0" }}>
                  Trusted by users
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    margin: "0",
                    lineHeight: "1.5",
                    minHeight: "50px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Our platform is secured and easy to navigate through
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* Fourth-Section */}
      <Grid
        container
        className="container section1"
        spacing={4}
        alignItems="center"
      >
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            component="img"
            src={FourthSec}
            alt="main-sec"
            sx={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Safety First with
            <span style={{ color: "#32DE84" }}>Trade Hunters</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            At Trade Hunter, we prioritize your safety by ensuring a secure
            platform for job postings and applications. Every profile and
            listing is verified to maintain trust and provide peace of mind for
            both employers and job seekers.
          </Typography>
          <Button variant="contained" color="success">
            Coming Soon
          </Button>
        </Grid>
      </Grid>

      {/* Fifth-Section */}
      <Grid className="container section1" spacing={4} alignItems="center">
        <Box>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 2, color: "#4D4D4D" }}
          >
            Trade Hunters: Bridging Clients with service providers in the world
            of success
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "text.secondary",
              mx: "auto",
              mb: 6,
              color: "#717171",
            }}
          >
            Discover a platform designed to simplify job-posting and job hunting
            in the manpower industry. Whether you're looking to post jobs or
            find services, Trade Hunter connects service hunters with skilled
            service providers seamlessly, Empowering businesses and clients to
            grow together!
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{ boxShadow: 3, borderRadius: 2, marginBottom: "40px" }}
              >
                <CardMedia
                  component="img"
                  alt={card.title}
                  src={card.image}
                  style={{
                    height: "100%",
                    position: "relative",
                    maxHeight: "200px",
                  }}
                />
                <div className="card-content">
                  <Typography
                    variant="h5"
                    sx={{ color: "rgba(113, 113, 113, 1)", fontSize: "1rem" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(50, 222, 132, 1)", fontSize: "1rem" }}
                    style={{ marginTop: "10px", fontWeight: "bold" }}
                  >
                    {card.description}
                  </Typography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Sixth-Section */}
      <Grid
        container
        className="container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "rgba(245, 247, 250, 1)",
          py: 5,
        }}
      >
        <Grid item sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{ color: "#52595C", fontWeight: "600", textAlign: "center" }}
          >
            Great platform for the service hunter that is passionate about
            quality work. Grow your business opportunity faster and easier.
          </Typography>
        </Grid>
        <Grid2 item>
          <Button variant="contained" color="success">
            Coming Soon
          </Button>
        </Grid2>
      </Grid>

      <Grid
        container
        className="container"
        sx={{
          width: "100%",
          bgcolor: "#000",
          py: 6,
          justifyContent: "space-between",
          pb: 9,
        }}
      >
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <img src={footerLogo} alt="footer-logo" style={{ width: "100%" }} />
          <p style={{ color: "#fff", marginTop: "18px" }}>
            Copyright © 2024 Trade Hunters.
            <br />
            All rights reserved
          </p>
          {/* <div
            style={{
              display: "flex",
              gap: "18px",
              flexDirection: "row",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          >
            <span
              style={{
                background: " #7b727236",
                padding: "10px",
                height: "44px",
                borderRadius: "50%",
              }}
            >
              <InstagramIcon style={{ color: "#fff" }} />
            </span>
            <span
              style={{
                background: " #7b727236",
                padding: "10px",
                height: "44px",
                borderRadius: "50%",
              }}
            >
              <XIcon style={{ color: "#fff" }} />
            </span>
            <span
              style={{
                background: " #7b727236",
                padding: "10px",
                height: "44px",
                borderRadius: "50%",
              }}
            >
              <YouTubeIcon style={{ color: "#fff" }} />
            </span>
          </div> */}
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 4 }} sx={{ marginBottom: "45px" }}>
          <h2 style={{ color: "#fff", marginBottom: "24px" }}>Contact Us</h2>
          <a
            href="mailto:support@tradehunters.com.au"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            support@tradehunters.com.au
          </a>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <h2 style={{ color: "#fff", marginBottom: "24px" }}>Address</h2>
          <p style={{ color: "#fff", textDecoration: "none" }}>
            Victoria , Australia
          </p>
        </Grid2>
      </Grid>
    </Box>
  );
}

export default Home;
