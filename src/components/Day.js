import React from "react";
import { FaArrowsAltH, FaArrowUp, FaArrowDown } from "react-icons/fa";

const Day = ({ data, getLocalDateTime }) => {
  return (
    <div className="day">
      <div className="dayDetailDiv dNRDetailDiv">
        <div className="header">
          <div className="name">DAY</div>
          <div className="time">{getLocalDateTime(data.Date, true)}</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="icon-temp">
              <img
                src={`../../images/weatherIcons/${data.Day.Icon}.png`}
                className={"icon"}
              />
              <div className="temp">
                <div className="actual">
                  <span>
                    {Math.round(data.Temperature.Maximum.Value)}
                    &#176;
                  </span>
                  {data.Temperature.Maximum.Unit.toLowerCase()}Hi
                </div>
              </div>
            </div>
            <div className="weather-text">{data.Day.LongPhrase}</div>
          </div>
          <div className="right">
            <div className="real-feel">
              <div className="top">
                RealFeel&reg;&ensp;
                {Math.round(data.RealFeelTemperature.Maximum.Value)}
                &#176;
                {data.RealFeelTemperature.Maximum.Unit.toLowerCase()}
              </div>
              <span className="bottom">
                {data.RealFeelTemperature.Maximum.Phrase}
              </span>
            </div>
            <div className="real-feel-shade">
              <div className="top">
                RealFeelShade&reg;&ensp;
                {Math.round(data.RealFeelTemperatureShade.Maximum.Value)}
                &#176;
                {data.RealFeelTemperatureShade.Maximum.Unit.toLowerCase()}
              </div>
              <span className="bottom">
                {data.RealFeelTemperatureShade.Maximum.Phrase}
              </span>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="left">
            <div className="wind">
              <div>Wind</div>
              <div className="value">
                {data.Day.Wind.Direction.English}
                &ensp;
                {data.Day.Wind.Speed.Value}&nbsp;
                {data.Day.Wind.Speed.Unit}
              </div>
            </div>
            <div className="windGust">
              <div>Wind Gust</div>
              <div className="value">
                {data.Day.WindGust.Speed.Value}&nbsp;
                {data.Day.WindGust.Speed.Unit}
              </div>
            </div>
            <div className="cloudCover">
              <div>Cloud Cover</div>
              <div className="value">{data.Day.CloudCover}%</div>
            </div>
            <div className="hrsOfSun">
              <div>Hours of Sun</div>
              <div className="value">{data.HoursOfSun}&nbsp;hrs</div>
            </div>
            <div className="solarIrradiance">
              <div>Solar Irradiance</div>
              <div className="value">
                {data.Day.SolarIrradiance.Value}&nbsp;
                {data.Day.SolarIrradiance.Unit}
              </div>
            </div>
            <div className="uvIndex">
              <div>Max UV Index</div>
              <div className="value">
                {data.AirAndPollen[5].Value}&nbsp;
                {data.AirAndPollen[5].Category}
              </div>
            </div>
          </div>
          <div className="right">
            <div className="probOfPrec">
              <div>Prob. of Precipitation</div>
              <div className="value">{data.Day.PrecipitationProbability}%</div>
            </div>
            <div className="hrsOfPrec">
              <div>Hours of Precipitation</div>
              <div className="value">
                {data.Day.HoursOfPrecipitation}&nbsp;hrs
              </div>
            </div>
            <div className="probOfThunStorm">
              <div>Prob. of Thunderstorm</div>
              <div className="value">{data.Day.ThunderstormProbability}%</div>
            </div>
            <div className="rain">
              <div>Rain</div>
              <div className="value">
                {data.Day.Rain.Value}&nbsp;
                {data.Day.Rain.Unit.toLowerCase()}
              </div>
            </div>
            <div className="snow">
              <div>Snow</div>
              <div className="value">
                {data.Day.Snow.Value}&nbsp;
                {data.Day.Snow.Unit.toLowerCase()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day;
