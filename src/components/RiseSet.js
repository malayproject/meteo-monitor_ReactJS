import React from "react";

const RiseSet = ({ sun, moon, getLocalTime }) => {
  return (
    <div className="riseSet">
      <div className="riseSetDetailDiv dNRDetailDiv">
        <div className="header">RISE/SET</div>
        <div className="footer">
          <div className="left">
            <div className="first">
              <img src="./images/weatherIcons/_1.png" alt="sun img" />
              <div className="period">
                <span className="hours">
                  {Math.floor((sun.EpochSet - sun.EpochRise) / 3600)} hrs
                </span>
                <span className="mins">
                  {Math.floor(
                    ((sun.EpochSet - sun.EpochRise) / 3600 -
                      Math.floor((sun.EpochSet - sun.EpochRise) / 3600)) *
                      60
                  )}{" "}
                  mins
                </span>
              </div>
            </div>
            <div className="rise">
              Rise{" "}
              <div className="value">
                <span>{getLocalTime(sun.Rise)}</span>
              </div>
            </div>
            <div className="set">
              Set{" "}
              <div className="value">
                <span>{getLocalTime(sun.Set)}</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="first">
              <img src="./images/weatherIcons/_1.png" alt="moon img" />
              <div className="period">
                <span className="hours">
                  {Math.floor((moon.EpochSet - moon.EpochRise) / 3600)} hrs
                </span>
                <span className="mins">
                  {Math.floor(
                    ((moon.EpochSet - moon.EpochRise) / 3600 -
                      Math.floor((moon.EpochSet - moon.EpochRise) / 3600)) *
                      60
                  )}{" "}
                  mins
                </span>
              </div>
            </div>
            <div className="rise">
              Rise
              <div className="value">
                <span>{getLocalTime(moon.Rise)}</span>
              </div>
            </div>
            <div className="set">
              Set
              <div className="value">
                <span>{getLocalTime(moon.Set)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiseSet;
