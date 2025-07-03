import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import profileImg from '../assets/avatar.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Create MotionBox
const MotionBox = motion(Box);

const skills = [
    'Build responsive and scalable web applications using Java and React.js',
    'Develop RESTful APIs with Spring Boot and integrate with frontend',
    'Manage databases using MySQL, Oracle with PL/SQL & JDBC',
    'Handle end-to-end project development including UI/UX and backend logic',
];

const AboutMe = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <Box
            sx={{
                backgroundColor: '#1E1E1E',
                color: '#fff',
                py: { xs: 6, sm: 8, md: 10 },
                px: { xs: 3, sm: 6, md: 12 },
                mt: -2,
            }}
        >
            <div ref={ref}>
                <MotionBox
                    initial={{ opacity: 0, y: 60 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            gap: { xs: 3, md: 3 },
                        }}
                    >
                        {/* Animated Image Section */}
                        <Box
                            sx={{
                                width: { xs: '100%', md: '40%' },
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                            }}
                        >
                            <MotionBox
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                sx={{
                                    width: '100%',
                                    maxWidth: 350,
                                    borderRadius: 2,
                                    border: '6px solid #1c1c1c',
                                    boxShadow: '0px 0px 15px #000',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={profileImg}
                                    alt="Profile"
                                    sx={{
                                        width: '100%',
                                        borderRadius: 2,
                                    }}
                                />
                            </MotionBox>
                        </Box>

                        {/* Text Section */}
                        <Box sx={{ width: { xs: '100%', md: '60%' }, maxWidth: 600 }}>
                            <Typography variant="subtitle2" sx={{ color: '#ccc', mb: 1 }}>
                                About Me
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    color: '#fff',
                                    mb: 2,
                                    lineHeight: 1.3,
                                }}
                            >
                                <Box component="span" sx={{ color: '#ff0050' }}>Passionate</Box>, self-driven <br />
                                Full Stack <Box component="span" sx={{ color: '#ff0050' }}>Developer</Box>
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 0, color: '#aaa' }}>
                                I’m a <b>Java Full Stack Developer</b> currently working at <b>WalkinSoftwares</b> in <b>Rajajinagar, Bengaluru</b>. I specialize in developing <b>end-to-end web applications</b> using <b>Java, Spring Boot, React.js</b>, and <b>SQL</b>. With hands-on experience in both frontend and backend development, I focus on building responsive interfaces and optimizing backend performance. I’m eager to learn, adapt, and work in collaborative environments that value innovation and quality code.
                            </Typography>
                            <List dense>
                                {skills.map((skill, index) => (
                                    <ListItem key={index} disableGutters sx={{ color: '#eee' }}>
                                        <ListItemIcon sx={{ minWidth: 40 }}>
                                            <CheckCircleIcon sx={{ color: '#ff0050', fontSize: 20 }} />
                                        </ListItemIcon>
                                        <ListItemText primary={skill} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </MotionBox>
            </div>
        </Box>
    );
};

export default AboutMe;
