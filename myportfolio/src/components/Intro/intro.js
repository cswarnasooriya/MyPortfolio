import React from 'react'; //rafce used here
import './intro.css';
import bg from '../../assets/myprofile.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>
                Sandaruwan </span><br/>Front End Developer</span>
            <p className='introPara'>I am a beginner of Front End Web  Development and Web designs.</p>
            <Link><button className='btn'><img src={btnImg} alt="" className='btnImg'/>Hire Me</button></Link>

        </div>
        <img src={bg} alt='Profile' className='bg'/>

      </section>
    </div>
  )
}

export default Intro;
