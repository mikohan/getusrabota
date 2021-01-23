import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { Grid } from '@material-ui/core';
import PersonalRow from './PersonalRowComponent';
import { translateText } from '../translate/personal';
import { ThemeContext } from '../context/ThemeContext';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// some comment

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    verticalGap: {
      marginBottom: theme.spacing(5),
    },
  })
);

const images = [
  {
    original: require('../assets/podium.jpg'),
    thumbnail: require('../assets/podium_thumb.jpg'),
    originalTitle: 'Four 1st places at Abzakovo Cup',
  },
  {
    original: require('../assets/four_medal2.jpg'),
    thumbnail: require('../assets/four_medal_tmb.jpg'),
  },
  {
    original: require('../assets/izevsk_podium1.jpg'),
    thumbnail: require('../assets/izevsk_podium1_tmb.jpg'),
  },
  {
    original: require('../assets/izevsk_podium1.jpg'),
    thumbnail: require('../assets/izevsk_podium1_tmb.jpg'),
  },
];
const imagesAviation = [
  {
    original: require('../assets/aviation_lic.jpg'),
    thumbnail: require('../assets/aviation_lic.jpg'),
    originalTitle: 'Four 1st places at Abzakovo Cup',
  },
  {
    original: require('../assets/avia2.jpg'),
    thumbnail: require('../assets/avia2.jpg'),
  },
  {
    original: require('../assets/avia3.jpg'),
    thumbnail: require('../assets/avia3.jpg'),
  },
  {
    original: require('../assets/avia1.jpg'),
    thumbnail: require('../assets/avia1.jpg'),
    originalTitle: 'Four 1st places at Abzakovo Cup',
  },
];
//https://youtu.be/um1PiGKCBi4
function PersonalityPage() {
  const context = useContext(ThemeContext);
  let { language } = context;
  const {
    pageTitle,
    cheer,
    freeDiving,
    ski,
    snowboard,
    skateBoard,
    acrobe,
    aviation,
    rollerBlade,
  } = translateText[language];
  const classes = useStyles();
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>{pageTitle}</h1>
        </Grid>
        <Grid className={classes.verticalGap} item xs={12}>
          <PersonalRow
            title={aviation.title}
            text={aviation.text}
            items={imagesAviation}
            imageVideo={true}
            vidUrl={[
              'https://youtu.be/4crO3dc2Fb0',
              'https://youtu.be/4crO3dc2Fb0',
            ]}
          />
        </Grid>
        <Grid className={classes.verticalGap} item xs={12}>
          <PersonalRow
            title={acrobe.title}
            text={acrobe.text}
            items={images}
            imageVideo={false}
            vidUrl={[
              'https://youtu.be/bWny3cBI6qk',
              'https://youtu.be/dR49g_MAStU',
            ]}
          />
        </Grid>
        <Grid className={classes.verticalGap} item xs={12}>
          <PersonalRow
            title={skateBoard.title}
            text={skateBoard.text}
            items={images}
            imageVideo={false}
            vidUrl={[
              'https://youtu.be/Ufuslz3-n-Q',
              'https://youtu.be/r4MRwrWiKDQ',
            ]}
          />
        </Grid>
        <Grid className={classes.verticalGap} item xs={12}>
          <PersonalRow
            title={snowboard.title}
            text={snowboard.text}
            items={images}
            imageVideo={true}
            vidUrl={[
              'https://youtu.be/aEYRJWz9pFE',
              'https://youtu.be/um1PiGKCBi4',
            ]}
          />
        </Grid>
        <Grid className={classes.verticalGap} item xs={12}>
          <PersonalRow
            title={ski.title}
            text={ski.text}
            items={images}
            imageVideo={false}
            vidUrl={[
              'https://youtu.be/Mm-FVcaaNpc',
              'https://youtu.be/5f7aa0vYoGE',
            ]}
          />
        </Grid>
        <Grid className={classes.verticalGap} item xs={12}>
          <PersonalRow
            title={freeDiving.title}
            text={freeDiving.text}
            items={images}
            imageVideo={false}
            vidUrl={[
              'https://youtu.be/c1siyJH_ofk',
              'https://youtu.be/NF2dpZyx0JY',
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <PersonalRow
            title={cheer.title}
            text={cheer.text}
            items={images}
            imageVideo={false}
            vidUrl={[
              'https://youtu.be/g2gzxLlMg7Y',
              'https://youtu.be/NfWgx9b3VjY',
            ]}
          />
        </Grid>
        <Grid className={classes.verticalGap} item xs={12}>
          <PersonalRow
            title={rollerBlade.title}
            text={rollerBlade.text}
            items={images}
            imageVideo={false}
            vidUrl={[
              'https://youtu.be/tL0cQXJ6Pss',
              'https://youtu.be/rcr4WD5uhg8',
            ]}
          />
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default PersonalityPage;
