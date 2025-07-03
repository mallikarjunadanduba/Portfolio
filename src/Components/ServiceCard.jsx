import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionDiv = motion.div;

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card
        sx={{
          maxWidth: 340,
          height: 180,
          mx: 'auto',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          py: 3,
          px: 2,
          boxShadow: '0px 0px 10px #000',
        }}
      >
        {service.icon}
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 0 }}>
          {service.title.toUpperCase()}
        </Typography>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            {service.description}
          </Typography>
        </CardContent>
      </Card>
    </MotionDiv>
  );
};

export default ServiceCard;
