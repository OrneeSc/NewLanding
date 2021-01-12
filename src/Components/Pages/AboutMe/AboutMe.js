import React from 'react';
import './AboutMe.scss';

const AboutMe = () => {

    let text= 'Me egresé en ADA ITW como Desarrolladora Frontend Jr. Mi objetivo es seguir capacitándome día a día para crecer de manera personal y poder insertarme laboralmente. Me considero resolutiva, curiosa y responsable. Siempre predispuesta para enfrentar nuevos desafíos.'
    return (
        <div className='aboutMe'>
            <div className='aboutMe-content'>
                <p className='aboutMe-p'>{text}</p>
            </div>
            
        </div>
    )
}

export default AboutMe;