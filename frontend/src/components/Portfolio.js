import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./Portfolio.css";

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: "0.375rem 1rem"
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main
    }
  }));


  function Portfolio() {
    const classes = useStyles();
    return (
      <>
        <Navbar />
        <Timeline className="timeline" align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Portfolio
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  CodePen.io
                </Typography>
                <Typography>
                  <img className="portfolio"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAcY8Txz4O4e05ICIWOsvQr0AlR_zisBCEw&usqp=CAU"
                    alt="my work"
                  />
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                My work
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  JsFiddle
                </Typography>
                <Typography>
                  <img className="portfolio"
                    src="data:image/png;base64,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"
                    alt="my work"
                  />
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  CodeSendbox
                </Typography>
                <Typography>
                  <img className="portfolio"
                    src="data:image/jpeg;base64,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hxg9Kh2BJIVVBP0rnA9huJP7yZ92aixyXd7HYrtLO7MxX9EknJHPpOKAEQIhkkSZECZ902MjK9bMlinKWIxVlPqCOYnxENNidnPinqaNqa1Pma+Q71MLaB6kclf/AJT7mbM0HFdBxaplRqdShA7ylwCwz+mjcx98faeb5yae563Wyt3rsU5WytijD7EcxJia9TU0qirWowqqqqPQAYA/cJTs/D+D0gfkNJSOgGAWPsPqdv3mako+J/EUpNJal35BdQ9fjAxzyAQjN6Ej7gzD9drbdS5tvse2w9Xdtxx6D0HsMCTF1sftH8VrG3V6Cvu16fMWgFz7onRfu2f1RNb6zVWXu1t1j22N9TuxZvtz6Dn06CcMTTJERASZEQJiIgIiICIiAiJEBERAREQEREBERAREQ0REiBIiBEMkiTIgTERDRERAREQEREMkREBERAREQJiRECYkRAREQEREBERAREQERENEREBIkyIEiIEQySJMQIkiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBESYgBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z"
                    alt="my work"
                  />
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <RepeatIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Replit
                </Typography>
                <Typography>
                  <img className="portfolio"
                    src="data:image/png;base64,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"
                    alt="my work"
                  />
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </>
    );
  }
  export default Portfolio;

