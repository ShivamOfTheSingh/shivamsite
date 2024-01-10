import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Dumbell(props) {
  const { nodes, materials } = useGLTF('./models/dumbell.glb')
  const myModel = useRef();

  useFrame(({ clock }) => {
    myModel.current.rotation.y = clock.getElapsedTime() * 0.5
    myModel.current.rotation.x = clock.getElapsedTime() * 0.25
  })

  return (
    <group {...props} dispose={null} ref={myModel}>
      <group scale={0.01}>
        <group position={[0, 0, 0]} scale={30}>
          <mesh geometry={nodes.dumbell_dumbell_rod_0.geometry} material={materials.dumbell_rod} />
          <mesh geometry={nodes.dumbell_dumbell_0.geometry} material={materials.dumbell} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/dumbell.glb')
