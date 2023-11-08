import React from 'react'
import "./AboutMe.css"

const AboutMe = (props) => {
  return (
        <>
            <div className="AboutMain">
                <div className='TextContainer'>
                  <h1>I am Shivam Singh,</h1>
                  <div className='Facts'>
                    <p>And I am a student at California Polytechnic University, Pomona, pursuing a degree in Computer Science.</p>
                    <p>And I am a dog owner</p>
                    <p>And I am passionate about data science, machine learning, and cloud computing, and I'm actively seeking an internship in these fields.</p>
                    <p>And I am a passionate home cook and an enjoyer of physical activity</p>
                    <p>And I am proficient in Python, C/C++, Java, JavaScript, and more. Experienced with AWS, Google Cloud, Keras/TensorFlow, and more.</p>
                    <p>And I am proudly a nerd</p>
                  </div>
                </div>
                <div className='Model'>
                </div>
            </div>
        </>
    )
}

export default AboutMe