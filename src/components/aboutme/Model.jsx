import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import './Model.css';
import { OrbitControls } from '@react-three/drei';
import { Dumbell } from './Models/Dumbell';
import { Nerd } from './Models/Nerd';
import { Cloud } from './Models/Cloud';
import { Python } from './Models/Python';

const Model = ({ modelName }) => {
  let currModel;

  switch (modelName) {
    case 3:
      currModel = <Cloud />
      break;
    case 4:
      currModel = <Dumbell />;
      break;
    case 5:
      currModel = <Python />;
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

          {/* Add a point at (0, 0, 0) */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color='red' />
          </mesh>

          {currModel}
        </Canvas>
      </div>
    </div>
  );
};

export default Model;
