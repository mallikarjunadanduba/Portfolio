import React from 'react';
import { Typography, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionDiv = motion.div;

const SkillCard = ({ skill, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        textAlign: 'center',
        boxShadow: '0px 0px 10px #000',
        borderRadius: 16,
        padding: 5,
      }}
    >
      <CardContent>
        <img
          src={skill.icon}
          alt={skill.name}
          style={{
            width: '70px',
            height: '70px',
            marginBottom: '10px',
            objectFit: 'contain',
          }}
        />
        <Typography sx={{ color: '#ccc', fontSize: '14px', fontWeight: 500 }}>
          {skill.name}
        </Typography>
      </CardContent>
    </MotionDiv>
  );
};

export default SkillCard;
