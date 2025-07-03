import React from 'react';
import image from '../assets/Mallikarjun.jpg';
import resume from "../assets/Mallikarjuna S MCA.pdf";
import {
  Box,
  Button,
  Typography,
  Stack,
  Grid,
  IconButton,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Instagram,
  YouTube,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const { div: MotionDiv } = motion;

const socialLinks = [
  {
    icon: <GitHub />,
    url: 'https://github.com/mallikarjunadanduba',
    label: 'GitHub',
  },
  {
    icon: <LinkedIn />,
    url: 'https://www.linkedin.com/in/mallikarjuna2002',
    label: 'LinkedIn',
  },
  {
    icon: <Email />,
    url: 'mailto:mallikarjuns5995@gmail.com',
    label: 'Email',
  },
  {
    icon: <Instagram />,
    url: 'https://www.instagram.com/mallikarjun_danduba?igsh=YWozNmZtdGEzdmhw',
    label: 'Instagram',
  },
  {
    icon: <YouTube />,
    url: 'https://youtube.com/@mallikarjundandubaofficial279?si=ix7saplWRJdmMPS_',
    label: 'YouTube',
  },
];



const HeroSection = ({ sectionRefs }) => {
  const handleNavClick = (item) => {
    const ref = sectionRefs[item];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1E1E1E',
        color: '#fff',
        minHeight: '100vh',
        py: { xs: 6, md: 12 },
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        mt: 0,
      }}
    >
      <Grid
        container
        alignItems="center"
        spacing={{ xs: 2, md: 1 }}
        justifyContent="space-between"
        sx={{ width: '100%', margin: 0 }}
      >
        {/* RIGHT - IMAGE */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 1, md: 2 },
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            pr: { md: 4, lg: 8 },
            mt: { xs: 2, md: 0 },
            ml: { xs: 6.8, md: 0 },
          }}
        >
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              sx={{
                width: { xs: 260, sm: 300, md: 350, lg: 380 },
                height: { xs: 260, sm: 300, md: 350, lg: 380 },
                border: '5px solid #FF0050',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mx: { xs: 'auto', md: 0 },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -30,
                  left: 0,
                  right: 0,
                  height: 70,
                  backgroundColor: '#FF0050',
                  borderTopLeftRadius: '100%',
                  borderTopRightRadius: '100%',
                },
              }}
            >
              <Box
                component="img"
                src={image}
                alt="Mallikarjun Danduba"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </Box>
          </MotionDiv>
        </Grid>

        {/* LEFT - TEXT */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ order: { xs: 2, md: 1 } }}
        >
          <MotionDiv
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                px: { xs: 2, sm: 4, md: 6, lg: 6 },
              }}
            >
              <Typography variant="subtitle2" sx={{ color: '#aaa', mb: 1, mt: 1 }}>
                HELLO, MY NAME IS
              </Typography>

              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                <Box component="span" sx={{ color: '#FF0050' }}>Mallikarjun</Box>{' '}
                Danduba
              </Typography>

              <Typography variant="h6" sx={{ color: '#aaa', mt: 1 }}>
                Software Engineer
              </Typography>

              <Typography variant="body1" sx={{ color: '#ccc', mt: 1, maxWidth: 500 }}>
                Currently, I’m working as a <b>Full Stack Developer</b> at WalkinSoftwares, Rajajinagar, Bengaluru.
                I have strong experience in dynamic web development and UI/UX design. Please go through my resume for more details.
              </Typography>

              {/* BUTTONS */}
              <MotionDiv
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  mt={3}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  <Button
                    variant="contained"
                    component="a"
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: '#FF0050',
                      color: '#fff',
                      px: 3,
                      '&:hover': { backgroundColor: '#e60045' },
                    }}
                  >
                    Download Resume
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleNavClick('Contact Me')}
                    sx={{
                      borderColor: '#FF0050',
                      color: '#fff',
                      px: 3,
                      '&:hover': {
                        backgroundColor: '#FF0050',
                        borderColor: '#FF0050',
                      },
                    }}
                  >
                    Contact Me
                  </Button>
                </Stack>
              </MotionDiv>

              {/* SOCIAL ICONS */}
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  mt={4}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  {socialLinks.map((item, index) => (
                    <IconButton
                      key={index}
                      component="a"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      sx={{ backgroundColor: '#2a2a2a', color: '#FF0050' }}
                    >
                      {item.icon}
                    </IconButton>
                  ))}
                </Stack>
              </MotionDiv>
            </Box>
          </MotionDiv>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
