import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Python(props) {
  const { nodes, materials } = useGLTF('./models/python.glb')
  const myModel = useRef()

  useFrame(({ clock }) => {
    myModel.current.rotation.y = clock.getElapsedTime() * 0.5
    myModel.current.rotation.x = clock.getElapsedTime() * 0.25
  })

  return (
    <group {...props} dispose={null} ref={myModel} scale={0.95} position={[0, 0, 0]}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material} position={[-0.002, 0, -0.5]} rotation={[Math.PI / 2, 0, 0]} scale={2.501} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['.001']} position={[-0.002, 0, -0.5]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={2.501} />
    </group>
  )
}

useGLTF.preload('./models/python.glb')
