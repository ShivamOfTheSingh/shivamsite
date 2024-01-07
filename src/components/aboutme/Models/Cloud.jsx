import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cloud(props) {
  const { nodes, materials } = useGLTF('./models/cloud.glb')
  return (
    <group {...props} dispose={null} scale={0.25}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Cloud} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Cloud} />
    </group>
  )
}

useGLTF.preload('./models/cloud.glb')
