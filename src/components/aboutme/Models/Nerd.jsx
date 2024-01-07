import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Nerd(props) {
  const { nodes, materials } = useGLTF('./models/nerd_emoji_3d.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={1}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/nerd_emoji_3d.glb')
