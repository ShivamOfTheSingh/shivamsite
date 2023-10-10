import React from 'react'
import "./AboutMe.css"

const AboutMe = (props) => {
  return (
        <>
            <div className="AboutMain">
                <div className='TextContainer'>
                  <h1>I am Shivam Singh,</h1>
                  <div className='Facts'>
                      <p>And I am a student at California Polytechnic University, Pomona.</p>
                      <p>And I am pursuing computer science, with a special interest in machine learning
                          and cloud computing.</p>
                      <p> And I am a dog owner</p>
                      <p>And I am proficent in Java, Python, C/C++, JavaScript, and HTML/CSS</p>
                      <p>And I am experienced in TensorFlow/Keras, NumPy, AWS, Google Cloud Services,
                          and React</p>
                      <p>And I am a passionate home cook and an enjoyer of physical activity</p>
                      <p>And, most of all, I am a nerd by heart</p>
                  </div>
                </div>
                <div className='Model'>
                </div>
            </div>
        </>
    )
}

export default AboutMe