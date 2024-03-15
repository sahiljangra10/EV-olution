import "./Hero.css"
import arrow_btn from '../../assets/arrow_btn.png';
import pause_icon from '../../assets/pause_icon.png';
import play_icon from '../../assets/play_icon.png';

function Hero({ heroData, heroCount, setPlayStatus, setHeroCount, playStatus }) {

  
  return (
    <div className="hero">
      <h1>{heroData[heroCount].text1}<br/>{heroData[heroCount].text2}</h1>
      <div className="input">
        <input type="text" placeholder="Enter the features" id="" />
        <button><img src={arrow_btn} alt="" /></button>
      </div>
      <div className="controls">
        <ul className="radios">
          <li onClick={()=>{setHeroCount(0)}} className={heroCount===0 ? "hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>{setHeroCount(1)}} className={heroCount===1 ? "hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>{setHeroCount(2)}} className={heroCount===2 ? "hero-dot orange":"hero-dot"}></li>
        </ul>
        <button onClick={()=>{setPlayStatus(!playStatus)}}><img src={playStatus?pause_icon:play_icon} alt=""/>See the video</button>
      </div>
    </div>
  )
}

export default Hero