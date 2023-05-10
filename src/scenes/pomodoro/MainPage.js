import React from "react";
import Main from "./Main";

const MainPage = (props) => {
  const { updateConfigure, pomodoro, pomoBreak } = props;

  return (
    <div className="main__page">

      <Main
        updateConfigure={updateConfigure}
        pomodoro={pomodoro}
        pomoBreak={pomoBreak}
      />
    </div>
  );
};

export default MainPage;
