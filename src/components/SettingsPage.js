import React from "react";

const SettingsPage = ({ setIsMetric, isMetric }) => {
  const handleToggleUnits = () => {
    setIsMetric((prev) => !prev);
  };

  const handleToggleTheme = () => {};

  return (
    <div className="settingsPage">
      <div className="settingsCon tile">
        <div className="header">SETTINGS</div>
        <div className="body">
          <div className="units">
            <div className="name">Units</div>
            <div className="value">
              <span>Metric (&#176;C, km/h, mm)</span>
              <div
                className={`toggleDiv ${isMetric ? "lefty" : "righty"}`}
                onClick={handleToggleUnits}
              >
                <div className="ball"></div>
              </div>
              <span>Imperial (&#176;F, mi/h, in)</span>
            </div>
          </div>
          <div className="theme">
            <div className="name">Theme</div>
            <div className="value">
              <span>Dark</span>
              <div className="toggleDiv" onClick={handleToggleTheme}>
                <div className="ball"></div>
              </div>
              <span>Light</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
