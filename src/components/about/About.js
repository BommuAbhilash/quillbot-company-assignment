import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./about.css";

function About() {
  const [progress, setProgress] = React.useState(0);
  const [progress1, setProgress1] = React.useState(0);
  const [progress2, setProgress2] = React.useState(0);
  const  circleSize = 180;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 75));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress1((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 100));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress2((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 85));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='outest'>
      <div className="outside-outer-one">Write better, faster, and clearer instantly</div>
      <div className="outside-outer-two">QuillBot is trusted by students, professional writers, and<br></br>business people who want to write more effectively.</div>
      <div className='outer'>
        <div className='inner'>
          <div className='progress'><CircularProgressWithLabel size={circleSize+"px"} className="progress-circle" value={progress} >%time saved</CircularProgressWithLabel></div>
          <div>Average time savings per writing project.</div>
        </div>
        <div className='inner'>
          <div className='progress'><CircularProgressWithLabel size={circleSize+"px"} value={progress1} /></div>
          <div>Trusted by millions worldwide.</div>
        </div>
        <div className='inner'>
          <div className='progress'><CircularProgressWithLabel size={circleSize+"px"} value={progress2} /></div>
          <div>Who reported their grades improved after using QuillBot.</div>
        </div>
      </div>
    </div>
  )
}

export default About;

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex'}}>
      <CircularProgress variant="determinate" {...props} sx={{color: '#499557'}}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography className='progress-content' variant="caption" component="div" color="text.secondary">
          <div className='progress-content-main'>{Math.round(props.value)}%</div>
          <div className='progress-content-caption'>time saved</div> 
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};



