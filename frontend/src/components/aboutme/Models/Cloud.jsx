import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Cloud(props) {
  const { nodes, materials } = useGLTF('./models/cloud.glb')
  const myModel = useRef()

  useFrame(({ clock }) => {
    myModel.current.rotation.y = clock.getElapsedTime() * 0.5
    myModel.current.rotation.x = clock.getElapsedTime() * 0.25
  })

  return (
    <group {...props} dispose={null} scale={0.5} ref={myModel} >
      <mesh geometry={nodes.Object_4.geometry} material={materials.Cloud} position={[-3.5, -2, 0]}/>
      <mesh geometry={nodes.Object_5.geometry} material={materials.Cloud} position={[-3.5, -2, 0]}/>
    </group>
  )
}

useGLTF.preload('./models/cloud.glb')
