import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
  Language,
  DesignServices,
  PhoneIphone,
  Code,
  Payment,
  Group,
} from '@mui/icons-material';
import ServiceCard from './ServiceCard'; // <--- new component

const services = [
  {
    title: 'Web Development',
    icon: <Language sx={{ fontSize: 40, color: '#ff0050' }} />,
    description: 'Modern and mobile-ready websites built using React, HTML, CSS, and Spring Boot.',
  },
  {
    title: 'UI/UX Design',
    icon: <DesignServices sx={{ fontSize: 40, color: '#ff0050' }} />,
    description: 'Crafting intuitive user interfaces blending usability and aesthetics with Tailwind CSS.',
  },
  {
    title: 'App Development',
    icon: <PhoneIphone sx={{ fontSize: 40, color: '#ff0050' }} />,
    description: 'Building full-stack apps using Java, React, and Spring Boot.',
  },
  {
    title: 'API Design / Integration',
    icon: <Code sx={{ fontSize: 40, color: '#ff0050' }} />,
    description: 'Secure, scalable REST APIs with Spring Boot and Hibernate.',
  },
  {
    title: 'Payment Integration',
    icon: <Payment sx={{ fontSize: 40, color: '#ff0050' }} />,
    description: 'Integrating payment gateways like PayPal and M-Pesa.',
  },
  {
    title: 'Mentorship',
    icon: <Group sx={{ fontSize: 40, color: '#ff0050' }} />,
    description: 'Sharing technical knowledge as a Java Full Stack mentor.',
  },
];

const Services = () => {
  return (
    <Box sx={{ backgroundColor: '#1E1E1E', py: 8, mt: -1, px: { xs: 2, sm: 4, md: 8 } }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          color: '#fff',
          mb: 4,
        }}
      >
        My <Box component="span" sx={{ color: '#ff0050' }}>Special Services</Box> For your{' '}
        <Box component="span" sx={{ color: '#ff0050' }}>Business Development</Box>
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard service={service} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
