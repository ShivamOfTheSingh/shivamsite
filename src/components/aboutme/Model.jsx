import { React, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './Model.css';

const Model = ({ modelName }) => {
  const [threed, setThreed] = useState(
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
    </mesh>)

  return (
    <div className='ModelMain'>
      <div className='canvas-container' >
        <Canvas className='canvas' size={[1000, 1000]}>
          <ambientLight />
          {threed }
          <OrbitControls />
        </Canvas>
      </div>
      <div className='Model'>{modelName}</div>
    </div>
  );
};

export default Model;
