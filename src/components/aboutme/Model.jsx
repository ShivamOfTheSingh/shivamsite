import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import './Model.css';
import { OrbitControls } from '@react-three/drei';
import { Dumbell } from './Models/Dumbell';
import { Nerd } from './Models/Nerd';
import { Cloud } from './Models/Cloud';
import { Python } from './Models/Python';
import { Samosa } from './Models/Samosa';
import { Bridge } from './Models/Bridge';

const Model = ({ modelName }) => {
  let currModel;

  switch (modelName) {
    case 2.5:
      currModel = <Bridge />
      break;
    case 3:
      currModel = <Cloud />
      break;
    case 4:
      currModel = <Dumbell />;
      break;
    case 5:
      currModel = <Python />;
      break;
    case 5.5:
      currModel = <Samosa />
      break;
    case 6:
      currModel = <Nerd />;
      break;
    default:
      currModel = <Python />;
  }

  return (
    <div className='ModelMain'>
      <div className='canvas-container'>
        <Canvas className='canvas' size={[1200, 1200]}>
          <OrbitControls />
          <ambientLight intensity={1} />
          {currModel}
        </Canvas>
      </div>
    </div>
  );
};

export default Model;
