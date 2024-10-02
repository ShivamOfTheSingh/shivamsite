import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import './Model.css';

import { Dumbell } from './Models/Dumbell';
import { Nerd } from './Models/Nerd';
import { Cloud } from './Models/Cloud';
import { Python } from './Models/Python';
import { Samosa } from './Models/Samosa';
import { Bridge } from './Models/Bridge';
import { Bronco } from './Models/Bronco';
import { LightText } from './Models/Light-text';
import { DarkText } from './Models/Dark-text';
import { Doge } from './Models/Doge';

const Model = ({ modelName, theme }) => {
  let currModel;

  switch (modelName) {
    case 1:
      currModel = <Bronco />
      break;
    case 2:
      currModel = <Doge />
      break;
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
      currModel = theme === 'dark' ? <LightText /> : <DarkText />
  }

  return (
    <div className='ModelMain'>
      <div className='canvas-container'>
        <Suspense fallback={<div className='LoadingSpinner'>Loading Model...</div>}>
          <Canvas className='canvas' size={[1200, 1200]}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            {currModel}
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default Model;
