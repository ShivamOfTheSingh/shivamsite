import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Doge(props) {
    const { nodes, materials } = useGLTF('./models/dog.glb');
    const dogeModel = useRef();

    useFrame(({ clock }) => {
        dogeModel.current.rotation.y = clock.getElapsedTime() * 0.5;
        dogeModel.current.rotation.z = clock.getElapsedTime() * 0.25;
    });

    return (
        <group {...props} dispose={null} ref={dogeModel}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={2}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[-0.3, 0.09, 0]} scale={0.526}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.fur_light}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5.geometry}
                            material={materials.eye1}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials.eye2}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_7.geometry}
                            material={materials.fur_dark}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_8.geometry}
                            material={materials.tongue}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_9.geometry}
                            material={materials.outline}
                        />
                    </group>
                    <group position={[0.096, -0.649, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_15.geometry}
                            material={materials.griptape}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_16.geometry}
                            material={materials.wood}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_17.geometry}
                            material={materials.metal}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_18.geometry}
                            material={materials.wheel}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_19.geometry}
                            material={materials['wheel.001']}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_11.geometry}
                        material={materials.outline}
                        position={[-0.3, 0.09, 0]}
                        scale={0.526}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_13.geometry}
                        material={materials.outline}
                        position={[-0.709, -0.057, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_21.geometry}
                        material={materials.material_0}
                        position={[0.096, -0.649, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_23.geometry}
                        material={materials['outline.001']}
                        position={[0.096, -0.649, 0]}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('./models/dog.glb');
