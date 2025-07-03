import React from 'react';
import {
  Box,
  Typography,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ecoCart from  "../assets/skills/eco-cart.jpeg";
import EMS from "../assets/skills/Event.jpeg";
import HMS from "../assets/skills/healthcare.jpeg";



const MotionBox = motion(Box);

const projects = [
  {
    id: 1,
    title: 'Healthcare Management System',
    type: 'Java-Based Application',
    description:
      'A system to manage patient data, appointments, medical records, and staff access for improved healthcare operations.',
    image: HMS,
  },
   {
    id: 2,
    title: 'EcoCart E-commerce Website',
    type: 'Fullstack Web App',
    description:
      'EcoCart is an e-commerce platform with user authentication, product management, and payment integration for a secure shopping experience.',
    image: ecoCart,
  },
  {
    id: 3,
    title: 'Event Management System',
    type: 'Web App',
    description:
      'A digital platform to plan, organize, and execute events efficiently, with tools for both organizers and participants.',
    image: EMS,
  },
];

const ProjectItem = ({ project, isEven, isLast }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Stack
      ref={ref}
      direction={{ xs: 'column', md: isEven ? 'row' : 'row-reverse' }}
      spacing={6}
      alignItems="center"
      justifyContent="center"
      sx={{ mb: isLast ? 4 : 8 }}
    >
      <MotionBox
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        sx={{
          width: { xs: '100%', md: '50%' },
          boxShadow: '0px 0px 30px rgba(255,255,255,0.1)',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        sx={{ width: { xs: '100%', md: '40%' } }}
      >
        <Typography sx={{ color: '#FF0066', fontSize: '1rem', mb: 1 }}>
          {project.type}
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 600, lineHeight: 1.3, mb: 2 }}>
          {project.title}
        </Typography>

        <Typography sx={{ color: '#ccc', fontSize: '1rem' }}>
          {project.description}
        </Typography>

        <Box
          sx={{
            mt: 4,
            width: 50,
            height: 50,
            borderRadius: '50%',
            border: '1px solid #fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#FF0066',
              borderColor: '#FF0066',
            },
          }}
        >
          <Box component="span" sx={{ fontSize: 24 }}>&#8599;</Box>
        </Box>
      </MotionBox>
    </Stack>
  );
};

const ProjectShowcase = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1E1E1E',
        color: '#fff',
        minHeight: '100vh',
        py: { xs: 6, md: 8 },
        px: { xs: 3, md: 8 },
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: '#ccc', textAlign: 'center', mb: 1 }}
      >
        Latest Works
      </Typography>

      <Typography
        variant="h4"
        sx={{ fontWeight: 600, textAlign: 'center', mb: 8 }}
      >
        Explore My Popular{' '}
        <Box component="span" sx={{ color: '#FF0066' }}>
          Projects
        </Box>
      </Typography>

      {projects.map((project, index) => (
        <ProjectItem
          key={project.id}
          project={project}
          isEven={index % 2 === 0}
          isLast={index === projects.length - 1}
        />
      ))}
    </Box>
  );
};

export default ProjectShowcase;
