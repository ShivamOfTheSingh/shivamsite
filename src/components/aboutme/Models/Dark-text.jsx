import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function DarkText(props) {
  const { nodes, materials } = useGLTF('./models/dark-text.glb')
  const myModel = useRef()

  useFrame(({ clock }) => {
    myModel.current.rotation.y = clock.getElapsedTime() * 1
  })

  return (
    <group {...props} dispose={null} scale={0.65} ref={myModel}>
      <mesh geometry={nodes.Text.geometry} material={materials['Material.013']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('./models/dark-text.glb')
