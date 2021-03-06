import React from 'react';
import { Paper, Typography, Grid, Divider, Chip } from '@material-ui/core';
import { useStyles } from '../../styles/AboutPageTestStylesl';
import DoneIcon from '@material-ui/icons/Done';
import { resume } from '../../translate/resume';

interface IProps {
  language: string;
}

export default function CVComponent({ language }: IProps) {
  const classes = useStyles();
  return (
    <Paper style={{ padding: '5rem' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography
            align="left"
            variant="h3"
            className={classes.fullStackDeveloper}
          >
            Vladimir Vostrikov
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography
            className={classes.fullStackDeveloper}
            align="left"
            variant="h3"
          >
            Full Stack Developer
          </Typography>
          <Typography className={classes.fontWght} align="left" variant="h5">
            angara99@gmail.com
          </Typography>
          <Typography className={classes.fontWght} align="left" variant="h5">
            +7.916.215.1508
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography align="left" variant="h4">
            Skills
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Front End Skils</Typography>
        </Grid>
        <Grid item xs={8}>
          {resume.frontSkills.map((line: string[]) => (
            <Typography align="left" variant="body1">
              {line.map((skill: string) => (
                <Chip
                  className={classes.myChip}
                  label={skill}
                  clickable
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
              ))}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Back End Skils</Typography>
        </Grid>
        <Grid item xs={8}>
          {resume.backSkills.map((line: string[]) => (
            <Typography align="left" variant="body1">
              {line.map((skill: string) => (
                <Chip
                  className={classes.myChip}
                  label={skill}
                  clickable
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
              ))}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">DataBases</Typography>
        </Grid>
        <Grid item xs={8}>
          {resume.dbSkills.map((line: string[]) => (
            <Typography align="left" variant="body1">
              {line.map((skill: string) => (
                <Chip
                  className={classes.myChip}
                  label={skill}
                  clickable
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
              ))}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">OS Skills</Typography>
        </Grid>
        <Grid item xs={8}>
          {resume.osSkills.map((line: string[]) => (
            <Typography align="left" variant="body1">
              {line.map((skill: string) => (
                <Chip
                  className={classes.myChip}
                  label={skill}
                  clickable
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
              ))}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">General Skills</Typography>
        </Grid>
        <Grid item xs={8}>
          {resume.generalSkills.map((line: string[]) => (
            <Typography align="left" variant="body1">
              {line.map((skill: string) => (
                <Chip
                  className={classes.myChip}
                  label={skill}
                  clickable
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
              ))}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Marketing Skills</Typography>
        </Grid>
        <Grid item xs={8}>
          {resume.marketingSkills.map((line: string[]) => (
            <Typography align="left" variant="body1">
              {line.map((skill: string) => (
                <Chip
                  className={classes.myChip}
                  label={skill}
                  clickable
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
              ))}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Other Skills</Typography>
        </Grid>
        <Grid item xs={8}>
          {resume.otherSkills.map((line: string[]) => (
            <Typography align="left" variant="body1">
              {line.map((skill: string) => (
                <Chip
                  className={classes.myChip}
                  label={skill}
                  clickable
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
              ))}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">IDE</Typography>
        </Grid>
        <Grid item xs={8}>
          {resume.ide.map((line: string[]) => (
            <Typography align="left" variant="body1">
              {line.map((skill: string) => (
                <Chip
                  className={classes.myChip}
                  label={skill}
                  clickable
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
              ))}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography align="left" variant="h4">
            Education
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}>
          <Typography align="left" variant="h6">
            IRKUTSK NATIONAL RESEARCH TECHNICAL UNIVERSITY
          </Typography>
          <Typography align="left" variant="body1">
            Master of Mechanical and Electrical Engineering
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography align="left" variant="h4">
            Work Experience
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}>
          <Typography align="left" variant="h6">
            ANGARA LTD
          </Typography>
          <Typography className={classes.fontWght} align="left" variant="h6">
            Master of Mechanical and Electrical Engineering
          </Typography>
          <Typography className={classes.fontWght} align="left" variant="body1">
            MAY 2007 - PRESENT, MOSCOW, RUSSIA
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.myDivider}>
          <Divider />
        </Grid>
      </Grid>
    </Paper>
  );
}
