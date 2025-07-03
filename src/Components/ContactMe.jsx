import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  Instagram,
  YouTube,
  CheckCircle,
  Send,
} from "@mui/icons-material";
import { sendEmail } from "../utils/emailService";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const socialLinks = [
  {
    icon: <GitHub />,
    url: "https://github.com/mallikarjunadanduba",
    label: "GitHub",
  },
  {
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/in/mallikarjuna2002",
    label: "LinkedIn",
  },
  {
    icon: <Email />,
    url: "mailto:mallikarjuns5995@gmail.com",
    label: "Email",
  },
  {
    icon: <Instagram />,
    url: "https://www.instagram.com/mallikarjun_danduba?igsh=YWozNmZtdGEzdmhw",
    label: "Instagram",
  },
  {
    icon: <YouTube />,
    url: "https://youtube.com/@mallikarjundandubaofficial279?si=ix7saplWRJdmMPS_",
    label: "YouTube",
  },
];

const ContactMe = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(formData);
      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px", // adjust as needed
        mx: "auto",
        backgroundColor: "#1E1E1E",
        color: "#fff",
        pt: 10,
        pb: 10,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        mt: -3,
      }}
    >
      <MotionBox
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          px: { xs: 3, md: 12 },
        }}
      >
        {/* Left Side */}
        <Box flex={1}>
          <Typography
            variant="caption"
            sx={{ color: "#aaa", letterSpacing: 1 }}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mt: 2,
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Let’s Talk For your{" "}
            <Box component="span" sx={{ color: "#ff0055" }}>
              Next Projects
            </Box>
          </Typography>
          <Typography sx={{ color: "#ccc", fontSize: "1rem", mb: 4 }}>
            Discuss a project or just want to say hi? Connect with me via email
            or through a phone call.
          </Typography>

          {[
            "Java Full Stack Developer",
            "React.js & Spring Boot Expert",
            "RESTful API Integration",
            "MySQL, Oracle & PL/SQL",
            "UI/UX and Backend Logic",
          ].map((item) => (
            <Box
              key={item}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                fontSize: "1rem",
                color: "#fff",
              }}
            >
              <CheckCircle sx={{ mr: 1, color: "#ff0055" }} />
              {item}
            </Box>
          ))}

          <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
            {socialLinks.map((item, index) => (
              <IconButton
                key={index}
                component="a"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                sx={{ color: "#fff", bgcolor: "#181818" }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Right Side Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: { xs: "100%", md: "500px" },
            maxWidth: { xs: "100%", md: "50%" },
            borderRadius: "16px",
            padding: { xs: 2, md: 2 },
            backgroundColor: "#121212",
            mx: { xs: "auto", md: 0 },
          }}
        >
          <Grid container spacing={3}>
            {[
              { name: "fullName", label: "Full Name" },
              { name: "email", label: "Email Address" },
              { name: "phone", label: "Phone Number" },
              { name: "subject", label: "Subject" },
            ].map((field) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={field.name}
                sx={{ width: { xs: "100%" } }}
              >
                <TextField
                  name={field.name}
                  label={field.label}
                  variant="filled"
                  fullWidth
                  value={formData[field.name]}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { color: "#fff" },
                  }}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  sx={inputStyle}
                />
              </Grid>
            ))}

            <Grid item width="100%">
              <TextField
                name="message"
                label="Message"
                variant="filled"
                fullWidth
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                InputProps={{
                  disableUnderline: true,
                  style: { color: "#fff" },
                }}
                InputLabelProps={{ style: { color: "#fff" } }}
                sx={inputStyle}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<Send />}
                sx={{
                  backgroundColor: "#ff0055",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                  px: 2,
                  py: 1,
                  borderRadius: "12px",
                  fontFamily: "'Orbitron', sans-serif",
                  "&:hover": {
                    backgroundColor: "#e6004d",
                  },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </MotionBox>
    </Box>
  );
};

const inputStyle = {
  backgroundColor: "#181818",
  borderRadius: "10px",
  input: { color: "#fff" },
  label: { color: "#fff" },
  "& .MuiFilledInput-root": {
    backgroundColor: "#181818",
    color: "#fff",
  },
};

export default ContactMe;
