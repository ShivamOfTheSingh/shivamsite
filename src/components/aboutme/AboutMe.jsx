import { useState, React } from 'react'
import "./AboutMe.css"
import Model from './Model'

const AboutMe = (props) => {
  const [currInfo, setInfo] = useState("Click any one of these facts!");

  const changeModel = (newInfo) => {
      if (newInfo != currInfo) {
          const modelcover = document.querySelector('.modelCover');
          modelcover.classList.add('animate-model');
          modelcover.addEventListener('animationend', () => {
              modelcover.classList.remove('animate-model');
          });

          setTimeout(() => { setInfo(newInfo) }, 375)
      }
    }

  return (
        <>
            <div className="AboutMain">
                <div className='TextContainer'>
                  <h1 style={{ zIndex: 50 }}>I am Shivam Singh,</h1>
                	<div className='Facts'>
                      <p onClick={() => changeModel(1)}>And I am a student at California Polytechnic University, Pomona, pursuing a degree in Computer Science.</p>
                      <p onClick={() => changeModel(2)}>And I am a dog owner (his name is Champ).</p>
                      <p onClick={() => changeModel(2.5)}>And I am located in the Bay Area.</p>
                      <p onClick={() => changeModel(3)}>And I am passionate about data science, machine learning, and cloud computing, and I'm actively seeking an internship in these fields.</p>
                      <p onClick={() => changeModel(4)}>And I am a cooking enthusiast and an enjoyer of physical activity.</p>
                      <p onClick={() => changeModel(5)}>And I am proficient in Python, C/C++, Java, JavaScript, and more. Experienced with AWS, Google Cloud, Keras/TensorFlow, and more.</p>
                      <p onClick={() => changeModel(5.5)}>And I am a lover of samosas.</p>
                      <p onClick={() => changeModel(6)}>And, most of all, I am a nerd.</p>
                  </div>
                </div>
              <div className='modelCover' />
              <div className='tempLoader' />
                <Model className="Model" modelName={currInfo} />
            </div>
        </>
    )
}

export default AboutMe