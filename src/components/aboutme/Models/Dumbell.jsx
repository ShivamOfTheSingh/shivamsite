import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Dumbell(props) {
  const { nodes, materials } = useGLTF('./models/dumbell.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[100, 80, 100]} scale={27.534}>
          <mesh geometry={nodes.dumbell_dumbell_rod_0.geometry} material={materials.dumbell_rod} />
          <mesh geometry={nodes.dumbell_dumbell_0.geometry} material={materials.dumbell} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/dumbell.glb')
