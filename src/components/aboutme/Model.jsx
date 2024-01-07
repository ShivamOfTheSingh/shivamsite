import { React, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import './Model.css';
import Four from './Models/4';
import { Melon } from './Models/Melon';
import { Dumbell } from './Models/Dumbell';
import { OrbitControls } from '@react-three/drei';

const Model = ({ modelName }) => {
  let currModel;

  switch (modelName) {
    case 1:
      currModel = <Melon />;
      break;
    case 2:
      currModel = <Dumbell />;
      break;
    case 4:
      currModel = <Four />;
      break;
    default:
      currModel = <Melon />;
  }

  return (
    <div className='ModelMain'>
      <div className='canvas-container' >
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
