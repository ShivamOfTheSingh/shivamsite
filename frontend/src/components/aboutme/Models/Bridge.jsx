import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Bridge(props) {
  const { nodes, materials } = useGLTF('./models/bridge.glb')
  const myModel = useRef()

  useFrame(({ clock }) => {
    myModel.current.rotation.y = clock.getElapsedTime() * 0.5;
    myModel.current.rotation.z = clock.getElapsedTime() * 0.25;
  })

  let pos = [0, -0.75, -5]
  return (
    <group {...props} dispose={null} scale={0.27} position={[0, -0.1, -0.43]} ref={myModel}>
      <mesh geometry={nodes.cube.geometry} material={materials.Mat_1} position={pos}/>
      <mesh geometry={nodes.cube_1.geometry} material={materials.Mat_2} position={pos} />
      <mesh geometry={nodes.cube_2.geometry} material={materials.Mat_3} position={pos} />
      <mesh geometry={nodes.cube_3.geometry} material={materials.Mat_4} position={pos} />
      <mesh geometry={nodes.cube_4.geometry} material={materials.Mat_5} position={pos} />
      <mesh geometry={nodes.cube_5.geometry} material={materials.Mat_6} position={pos} />
      <mesh geometry={nodes.cube_6.geometry} material={materials.Mat_7} position={pos} />
      <mesh geometry={nodes.cube_7.geometry} material={materials.Mat_8} position={pos} />
      <mesh geometry={nodes.cube_8.geometry} material={materials.Mat_9} position={pos} />
      <mesh geometry={nodes.cube_9.geometry} material={materials.Mat_10} position={pos} />
      <mesh geometry={nodes.cube_10.geometry} material={materials.Mat_11} position={pos} />
      <mesh geometry={nodes.cube_11.geometry} material={materials.Mat_12} position={pos} />
      <mesh geometry={nodes.cube_12.geometry} material={materials.Mat_13} rotation={[-1.004, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_13.geometry} material={materials.Mat_14} rotation={[-1.222, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_14.geometry} material={materials.Mat_15} rotation={[-1.353, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_15.geometry} material={materials.Mat_16} rotation={[-1.484, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_16.geometry} material={materials.Mat_17} rotation={[-Math.PI / 2, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_17.geometry} material={materials.Mat_18} rotation={[1.484, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_18.geometry} material={materials.Mat_19} rotation={[1.353, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_19.geometry} material={materials.Mat_20} rotation={[1.222, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_20.geometry} material={materials.Mat_21} rotation={[1.004, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_21.geometry} material={materials.Mat_22} position={pos} />
      <mesh geometry={nodes.cube_22.geometry} material={materials.Mat_23} position={pos} />
      <mesh geometry={nodes.cube_23.geometry} material={materials.Mat_24} position={pos} />
      <mesh geometry={nodes.cube_24.geometry} material={materials.Mat_25} position={pos} />
      <mesh geometry={nodes.cube_25.geometry} material={materials.Mat_26} position={pos} />
      <mesh geometry={nodes.cube_26.geometry} material={materials.Mat_27} position={pos} />
      <mesh geometry={nodes.cube_27.geometry} material={materials.Mat_28} rotation={[1.004, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_28.geometry} material={materials.Mat_29} rotation={[-1.004, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_29.geometry} material={materials.Mat_30} position={pos} />
      <mesh geometry={nodes.cube_30.geometry} material={materials.Mat_31} position={pos} />
      <mesh geometry={nodes.cube_31.geometry} material={materials.Mat_32} position={pos} />
      <mesh geometry={nodes.cube_32.geometry} material={materials.Mat_33} position={pos} />
      <mesh geometry={nodes.cube_33.geometry} material={materials.Mat_34} position={pos} />
      <mesh geometry={nodes.cube_34.geometry} material={materials.Mat_35} position={pos} />
      <mesh geometry={nodes.cube_35.geometry} material={materials.Mat_36} position={pos} />
      <mesh geometry={nodes.cube_36.geometry} material={materials.Mat_37} position={pos} />
      <mesh geometry={nodes.cube_37.geometry} material={materials.Mat_38} position={pos} />
      <mesh geometry={nodes.cube_38.geometry} material={materials.Mat_39} position={pos} />
      <mesh geometry={nodes.cube_39.geometry} material={materials.Mat_40} position={pos} />
      <mesh geometry={nodes.cube_40.geometry} material={materials.Mat_41} position={pos} />
      <mesh geometry={nodes.cube_41.geometry} material={materials.Mat_42} position={pos} />
      <mesh geometry={nodes.cube_42.geometry} material={materials.Mat_43} position={pos} />
      <mesh geometry={nodes.cube_43.geometry} material={materials.Mat_44} position={pos} />
      <mesh geometry={nodes.cube_44.geometry} material={materials.Mat_45} position={pos} />
      <mesh geometry={nodes.cube_45.geometry} material={materials.Mat_46} position={pos} />
      <mesh geometry={nodes.cube_46.geometry} material={materials.Mat_47} position={pos} />
      <mesh geometry={nodes.cube_47.geometry} material={materials.Mat_48} position={pos} />
      <mesh geometry={nodes.cube_48.geometry} material={materials.Mat_49} position={pos} />
      <mesh geometry={nodes.cube_49.geometry} material={materials.Mat_50} position={pos} />
      <mesh geometry={nodes.cube_50.geometry} material={materials.Mat_51} position={pos} />
      <mesh geometry={nodes.cube_51.geometry} material={materials.Mat_52} position={pos} />
      <mesh geometry={nodes.cube_52.geometry} material={materials.Mat_53} position={pos} />
      <mesh geometry={nodes.cube_53.geometry} material={materials.Mat_54} position={pos} />
      <mesh geometry={nodes.cube_54.geometry} material={materials.Mat_55} position={pos} />
      <mesh geometry={nodes.cube_55.geometry} material={materials.Mat_56} position={pos} />
      <mesh geometry={nodes.cube_56.geometry} material={materials.Mat_57} position={pos} />
      <mesh geometry={nodes.cube_57.geometry} material={materials.Mat_58} position={pos} />
      <mesh geometry={nodes.cube_58.geometry} material={materials.Mat_59} position={pos} />
      <mesh geometry={nodes.cube_59.geometry} material={materials.Mat_60} position={pos} />
      <mesh geometry={nodes.cube_60.geometry} material={materials.Mat_61} position={pos} />
      <mesh geometry={nodes.cube_61.geometry} material={materials.Mat_62} position={pos} />
      <mesh geometry={nodes.cube_62.geometry} material={materials.Mat_63} position={pos} />
      <mesh geometry={nodes.cube_63.geometry} material={materials.Mat_64} position={pos} />
      <mesh geometry={nodes.cube_64.geometry} material={materials.Mat_65} position={pos} />
      <mesh geometry={nodes.cube_65.geometry} material={materials.Mat_66} position={pos} />
      <mesh geometry={nodes.cube_66.geometry} material={materials.Mat_67} position={pos} />
      <mesh geometry={nodes.cube_67.geometry} material={materials.Mat_68} position={pos} />
      <mesh geometry={nodes.cube_68.geometry} material={materials.Mat_69} position={pos} />
      <mesh geometry={nodes.cube_69.geometry} material={materials.Mat_70} position={pos} />
      <mesh geometry={nodes.cube_70.geometry} material={materials.Mat_71} position={pos} />
      <mesh geometry={nodes.cube_71.geometry} material={materials.Mat_72} position={pos} />
      <mesh geometry={nodes.cube_72.geometry} material={materials.Mat_73} position={pos} />
      <mesh geometry={nodes.cube_73.geometry} material={materials.Mat_74} position={pos} />
      <mesh geometry={nodes.cube_74.geometry} material={materials.Mat_75} position={pos} />
      <mesh geometry={nodes.cube_75.geometry} material={materials.Mat_76} position={pos} />
      <mesh geometry={nodes.cube_76.geometry} material={materials.Mat_77} position={pos} />
      <mesh geometry={nodes.cube_77.geometry} material={materials.Mat_78} position={pos} />
      <mesh geometry={nodes.cube_78.geometry} material={materials.Mat_79} position={pos} />
      <mesh geometry={nodes.cube_79.geometry} material={materials.Mat_80} position={pos} />
      <mesh geometry={nodes.cube_80.geometry} material={materials.Mat_81} position={pos} />
      <mesh geometry={nodes.cube_81.geometry} material={materials.Mat_82} position={pos} />
      <mesh geometry={nodes.cube_82.geometry} material={materials.Mat_83} position={pos} />
      <mesh geometry={nodes.cube_83.geometry} material={materials.Mat_84} position={pos} />
      <mesh geometry={nodes.cube_84.geometry} material={materials.Mat_85} position={pos} />
      <mesh geometry={nodes.cube_85.geometry} material={materials.Mat_86} position={pos} />
      <mesh geometry={nodes.cube_86.geometry} material={materials.Mat_87} position={pos} />
      <mesh geometry={nodes.cube_87.geometry} material={materials.Mat_88} position={pos} />
      <mesh geometry={nodes.cube_88.geometry} material={materials.Mat_89} rotation={[-1.004, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_89.geometry} material={materials.Mat_90} rotation={[1.004, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_90.geometry} material={materials.Mat_91} rotation={[1.222, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_91.geometry} material={materials.Mat_92} rotation={[1.353, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_92.geometry} material={materials.Mat_93} rotation={[1.484, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_93.geometry} material={materials.Mat_94} rotation={[-Math.PI / 2, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_94.geometry} material={materials.Mat_95} rotation={[-1.484, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_95.geometry} material={materials.Mat_96} rotation={[-1.353, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_96.geometry} material={materials.Mat_97} rotation={[-1.222, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_97.geometry} material={materials.Mat_98} rotation={[-1.004, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_98.geometry} material={materials.Mat_99} rotation={[1.004, 0, 0]} position={pos} />
      <mesh geometry={nodes.cube_99.geometry} material={materials.Mat_100} position={pos} />
      <mesh geometry={nodes.cube_100.geometry} material={materials.Mat_101} position={pos} />
      <mesh geometry={nodes.cube_101.geometry} material={materials.Mat_102} position={pos} />
      <mesh geometry={nodes.cube_102.geometry} material={materials.Mat_103} position={pos} />
      <mesh geometry={nodes.cube_103.geometry} material={materials.Mat_104} position={pos} />
      <mesh geometry={nodes.cube_104.geometry} material={materials.Mat_105} position={pos} />
      <mesh geometry={nodes.cube_105.geometry} material={materials.Mat_106} position={pos} />
      <mesh geometry={nodes.cube_108.geometry} material={materials.Mat_109} position={pos} />
      <mesh geometry={nodes.cube_106.geometry} material={materials.Mat_107} position={pos} />
      <mesh geometry={nodes.cube_107.geometry} material={materials.Mat_108} position={pos} />
    </group>
  )
}

useGLTF.preload('./models/bridge.glb')
