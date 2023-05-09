import React, { useState, useEffect } from 'react';

import Header from "../../components/Header";
import { Box } from "@mui/material"


const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const startTimer = () => {
    if (minutes === 0 && seconds === 0) {
      setMinutes(25);
      setSeconds(0);
    }
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="pomodoro-timer">
      <div className="timer">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
        <Box m="20px">
          {/*HEADER*/}
          <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Task To Do" subtitle="Todas tus tareas en un sitio" />
        </Box>
      </Box>
      </div>
    </div>
  );
};

export default PomodoroTimer;
