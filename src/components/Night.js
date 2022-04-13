import React from "react";
import { FaArrowsAltH, FaArrowUp, FaArrowDown } from "react-icons/fa";

const Night = ({ data, getLocalDateTime }) => {
  return (
    <div className="night">
      <div className="nightDetailDiv dNRDetailDiv">
        <div className="header">
          <div className="name">NIGHT</div>
          <div className="time">{getLocalDateTime(data.Date, true)}</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="icon-temp">
              <img
                src={`./images/weatherIcons/${data.Night.Icon}.png`}
                className={"icon"}
              />
              <div className="temp">
                <div className="actual">
                  <span>
                    {Math.round(data.Temperature.Minimum.Value)}
                    &#176;
                  </span>
                  {data.Temperature.Minimum.Unit.toLowerCase()}Lo
                </div>
              </div>
            </div>
            <div className="weather-text">{data.Night.LongPhrase}</div>
          </div>
          <div className="right">
            <div className="real-feel">
              <div className="top">
                RealFeel&reg;&ensp;
                {Math.round(data.RealFeelTemperature.Minimum.Value)}
                &#176;
                {data.RealFeelTemperature.Minimum.Unit.toLowerCase()}
              </div>
              <span className="bottom">
                {data.RealFeelTemperature.Minimum.Phrase}
              </span>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="left">
            <div className="wind">
              <div>Wind</div>
              <div className="value">
                {data.Night.Wind.Direction.English}
                &ensp;
                {data.Night.Wind.Speed.Value}&nbsp;
                {data.Night.Wind.Speed.Unit}
              </div>
            </div>
            <div className="windGust">
              <div>Wind Gust</div>
              <div className="value">
                {data.Night.WindGust.Speed.Value}&nbsp;
                {data.Night.WindGust.Speed.Unit}
              </div>
            </div>
            <div className="cloudCover">
              <div>Cloud Cover</div>
              <div className="value">{data.Night.CloudCover}%</div>
            </div>
            <div className="probOfPrec">
              <div>Prob. of Precipitation</div>
              <div className="value">
                {data.Night.PrecipitationProbability}%
              </div>
            </div>
          </div>
          <div className="right">
            <div className="rain">
              <div>Rain</div>
              <div className="value">
                {data.Night.Rain.Value}&nbsp;
                {data.Night.Rain.Unit.toLowerCase()}
              </div>
            </div>
            <div className="snow">
              <div>Snow</div>
              <div className="value">
                {data.Night.Snow.Value}&nbsp;
                {data.Night.Snow.Unit.toLowerCase()}
              </div>
            </div>
            <div className="hrsOfPrec">
              <div>Hours of Precipitation</div>
              <div className="value">
                {data.Night.HoursOfPrecipitation}&nbsp;hrs
              </div>
            </div>
            <div className="probOfThunStorm">
              <div>Prob. of Thunderstorm</div>
              <div className="value">{data.Night.ThunderstormProbability}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Night;
