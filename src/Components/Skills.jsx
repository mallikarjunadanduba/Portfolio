import React from 'react';
import { Box, Typography } from '@mui/material';
import SkillCard from './SkillCard'; // New component below

// Import all icons
import java from "../assets/skills/java.png";
import SpringBoot from '../assets/skills/Spring.png';
import JavaScript from '../assets/skills/JS.webp';
import ReactJs from '../assets/skills/React.png';
import Html from '../assets/skills/Html.png';
import Sql from '../assets/skills/Sql.webp';
import MySql from '../assets/skills/MySql.png';
import PostgreSql from '../assets/skills/Postgre.png';
import CSS from '../assets/skills/CSS.png';
import Tailwind from '../assets/skills/tailwindCss.png';
import MUI from '../assets/skills/MUI.png';
import Bootstrap from '../assets/skills/Bootstrap.png';
import Eclipse from '../assets/skills/Eclipse.png';
import IntelliJ from '../assets/skills/IntelliJ.png';
import VScode from '../assets/skills/VS code.png';

const skills = [
  { name: 'Java', icon: java },
  { name: 'Spring Boot', icon: SpringBoot },
  { name: 'JavaScript', icon: JavaScript },
  { name: 'React Js', icon: ReactJs },
  { name: 'HTML 5', icon: Html },
  { name: 'Sql', icon: Sql },
  { name: 'MySql', icon: MySql },
  { name: 'PostgreSql', icon: PostgreSql },
  { name: 'CSS 3', icon: CSS },
  { name: 'Tailwind CSS', icon: Tailwind },
  { name: 'Bootstrap', icon: Bootstrap },
  { name: 'Material UI', icon: MUI },
  { name: 'Eclipse IDE', icon: Eclipse },
  { name: 'IntelliJ', icon: IntelliJ },
  { name: 'Visual Studio Code', icon: VScode },
];

const Skills = () => {
  return (
    <Box sx={{ backgroundColor: '#1E1E1E', py: 4, px: { xs: 1, sm: 2, md: 3 }, minHeight: '100vh', mt:-1 }}>
      <Typography variant="h5" align="center" sx={{ color: '#fff', mb: 1 }}>
        My <Box component="span" sx={{ color: '#ff0050' }}>Talent</Box>
      </Typography>
      <Typography variant="h4" align="center" sx={{ color: '#fff', fontWeight: 'bold', mb: 4 }}>
        Professional Skills
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)',
          },
          gap: 3,
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
