import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cpp(props) {
  const { nodes, materials } = useGLTF('./models/cpp.glb')
  return (
    <group {...props} dispose={null} scale={10} >
      <mesh geometry={nodes.path14.geometry} material={materials.SVGMat} position={[-0.393, 0, 0.322]} scale={2.974} />
      <mesh geometry={nodes.path16.geometry} material={materials.SVGMat} position={[-0.393, 0, 0.322]} scale={2.974} />
      <mesh geometry={nodes.path18.geometry} material={materials.SVGMat} position={[-0.393, 0, 0.322]} scale={2.974} />
      <mesh geometry={nodes.path20.geometry} material={materials.SVGMat} position={[-0.393, 0, 0.322]} scale={2.974} />
    </group>
  )
}

useGLTF.preload('./models/cpp.glb')
