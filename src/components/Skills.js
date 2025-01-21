import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { Fade } from 'react-awesome-reveal'; 

export default function SkillsTimeline({theme}) {
  const isDark = theme === 'dark';
  return (
    <section
    style={{
      backgroundColor: isDark ? '#111827' : '#e5e7eb',
      color: isDark ? 'white' : '#1a202c',
      padding: '2rem',
    }} id='skills'
    >
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          marginBottom: '2rem',
          color: isDark?'#90caf9':'black',
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3rem' }, 
        }}
      >
        Areas Of Expertise
      </Typography>
      <Timeline
        position="alternate"
        sx={{
          paddingY: 4,
          paddingX: { xs: 2, sm: 4, md: 8, lg: 12 }, 
        }}
      >
        <TimelineItem sx={{ marginBottom: '2rem' }}>
          <TimelineOppositeContent
            sx={{
              m: 'auto 0',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, 
              fontWeight: 600,
              color: isDark?'#90caf9':'blue',
              textAlign: { xs: 'center', sm: 'right' }, 
            }}
          >
            <Fade direction="left">
              Frontend Development
            </Fade>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Fade direction="right">
              <Box
                sx={{
                  backgroundColor: 'white',
                  color: '#1a202c',
                  padding: { xs: '0.75rem', sm: '1rem' }, 
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' }, 
                  }}
                >
                  React.js | Tailwind CSS | HTML5 | CSS
                </Typography>
              </Box>
            </Fade>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ marginBottom: '2rem' }}>
          <TimelineOppositeContent
            sx={{
              m: 'auto 0',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, 
              fontWeight: 600,
              color: isDark?'#90caf9':'blue',
              textAlign: { xs: 'center', sm: 'left' }, 
            }}
          >
            <Fade direction="right">
              Backend Development
            </Fade>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <StorageIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Fade direction="left">
              <Box
                sx={{
                  backgroundColor: 'white',
                  color: '#1a202c',
                  padding: { xs: '0.75rem', sm: '1rem' }, 
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                  }}
                >
                  Flask
                </Typography>
              </Box>
            </Fade>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ marginBottom: '2rem' }}>
          <TimelineOppositeContent
            sx={{
              m: 'auto 0',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              fontWeight: 600,
              color: isDark?'#90caf9':'blue',
              textAlign: { xs: 'center', sm: 'right' },
            }}
          >
            <Fade direction="left">Tools</Fade>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <BuildIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Fade direction="right">
              <Box
                sx={{
                  backgroundColor: 'white',
                  color: '#1a202c',
                  padding: { xs: '0.75rem', sm: '1rem' },
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                  }}
                >
                  Git | GitHub | VS Code 
                </Typography>
              </Box>
            </Fade>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ marginBottom: '2rem' }}>
          <TimelineOppositeContent
            sx={{
              m: 'auto 0',
              fontSize: '1.25rem',
              fontWeight: 600,
              color: isDark?'#90caf9':'blue',
            }}
            align="left"
          >
            <Fade direction="right">
              Languages
            </Fade>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <LanguageIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Fade direction="left">
              <Box
                sx={{
                  backgroundColor: 'white',
                  color: '#1a202c',
                  padding: { xs: '0.75rem', sm: '1rem' }, 
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                  }}
                >
                  Python | Javascript 
                </Typography>
              </Box>
            </Fade>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ marginBottom: '2rem' }}>
          <TimelineOppositeContent
            sx={{
              m: 'auto 0',
              fontSize: '1.25rem',
              fontWeight: 600,
              color: isDark?'#90caf9':'blue',
            }}
            align="right"
          >
            <Fade direction="left">
              Database
            </Fade>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <EmojiObjectsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Fade direction="right">
              <Box
                sx={{
                  backgroundColor: 'white',
                  color: '#1a202c',
                  padding: { xs: '0.75rem', sm: '1rem' },
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                  }}
                >
                  Firebase 
                </Typography>
              </Box>
            </Fade>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
