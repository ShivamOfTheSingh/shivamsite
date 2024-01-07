import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Melon(props) {
  const { nodes, materials } = useGLTF('./models/free__fruits_and_vegetables_pack_cs2.glb')
  return (
    <group {...props} dispose={null} scale={7.5}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.watermelon01a} position={[-0.3, -0.2, 0.05]} scale={0.025} />
    </group>
  )
}

useGLTF.preload('./models/free__fruits_and_vegetables_pack_cs2.glb')
