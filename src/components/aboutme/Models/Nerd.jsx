import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Nerd(props) {
  const { nodes, materials } = useGLTF('./models/nerd_emoji_3d.glb')
  const myModel = useRef()
  useFrame(({ clock }) => {
    myModel.current.rotation.y = clock.getElapsedTime() * 0.5
    myModel.current.rotation.x = clock.getElapsedTime() * 0.25
  })

  return (
    <group {...props} dispose={null} ref={myModel} scale={2}>
      <group position={[0, -0.85, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/nerd_emoji_3d.glb')
