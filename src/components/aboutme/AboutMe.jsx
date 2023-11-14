import { useState, React } from 'react'
import "./AboutMe.css"
import Model from './Model'

const AboutMe = (props) => {
  const [currInfo, setInfo] = useState("default");

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
                	<h1>I am Shivam Singh,</h1>
                	<div className='Facts'>
                    <p onClick={() => changeModel("first")}>And I am a student at California Polytechnic University, Pomona, pursuing a degree in Computer Science.</p>
                    <p onClick={() => changeModel("second")}>And I am a third year, having a 4.0 GPA last term and 3.69 overall GPA, expecting to graduate Spring 2025.</p>
                    <p onClick={() => changeModel("third")}>And I am a dog owner (his name is Champ).</p>
                    <p onClick={() => changeModel("fourth")}>And I am passionate about data science, machine learning, and cloud computing, and I'm actively seeking an internship in these fields.</p>
                    <p onClick={() => changeModel("fifth")}>And I am a passionate home cook and an enjoyer of physical activity.</p>
                    <p onClick={() => changeModel("sixth")}>And I am proficient in Python, C/C++, Java, JavaScript, and more. Experienced with AWS, Google Cloud, Keras/TensorFlow, and more.</p>
                    <p onClick={() => changeModel("seventh")}>And, most of all, I am a nerd.</p>
                	</div>
                </div>
				<div className='modelCover' />
                <Model className="Model" modelName={currInfo} />
            </div>
        </>
    )
}

export default AboutMe