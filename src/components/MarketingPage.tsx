import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { marketing } from '../translate/marketing';
import { ThemeContext } from '../context/ThemeContext';
import VideoPageComponent from './VideoPageComponent';
import Grid from '@material-ui/core/Grid';
import CertificateComponent from './CertificateComponent';
import { Container } from '@material-ui/core';

function MarketingPage() {
  const context = useContext(ThemeContext);
  let { language } = context;
  const { header, text } = marketing[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Container maxWidth='lg' className='containerClass'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <VideoPageComponent
              header={header}
              text={text}
              vidUrl='https://youtu.be/80-lNQcOBbs'
            />
          </Grid>
          <Grid item container xs={12}>
            <CertificateComponent image={require('../assets/ga_venezo.png')} />
          </Grid>
          <Grid item container xs={12}>
            <CertificateComponent
              image={require('../assets/certs/advords.jpg')}
            />
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

export default MarketingPage;
