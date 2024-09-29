import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Samosa(props) {
  const { nodes, materials } = useGLTF('./models/day.glb')
  const myModel = useRef()

  useFrame(({ clock }) => {
    myModel.current.rotation.y = clock.getElapsedTime() * 0.5;
    myModel.current.rotation.y = clock.getElapsedTime() * 0.25;
  })

  return (
    <group {...props} dispose={null} scale={20} position={[0, 0.5, 0]} ref={myModel}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
    </group>
  )
}

useGLTF.preload('./models/day.glb')
