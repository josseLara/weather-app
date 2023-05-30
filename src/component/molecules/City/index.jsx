import { AnimationMixer } from 'three';
import { useGLTF } from '@react-three/drei';
import {  useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

function City() {

  const gltf = useGLTF( '/modelo/scene.gltf' );
  const mixer = useRef();
  const actions = useRef();

  useFrame( ( state, delta ) => {
    // Actualiza la rotación del objeto en cada cuadro de animación
    gltf.scene.rotation.y += delta * 0.15;
  } );

  //   textura
  const textures = useLoader(
    THREE.TextureLoader,
    ['/modelo/textures/agia_diffuse.png',
      '/modelo/textures/agia_normal.png',
      '/modelo/textures/agia_specularGlossiness.png',
      '/modelo/textures/Base_y_Calles_diffuse.png',
      '/modelo/textures/Base_y_Calles_emissive.png',
      '/modelo/textures/Base_y_Calles_normal.png',
      '/modelo/textures/Base_y_Calles_specularGlossiness.png',
      '/modelo/textures/Concreto_edifs_diffuse.png',
      '/modelo/textures/Concreto_edifs_emissive.png',
      '/modelo/textures/Concreto_edifs_normal.png',
      '/modelo/textures/Concreto_edifs_specularGlossiness.png',
      '/modelo/textures/Edifs_chicos_diffuse.png',
      '/modelo/textures/Edifs_chicos_emissive.png',
      '/modelo/textures/Edifs_chicos_normal.png',
      '/modelo/textures/Edifs_chicos_specularGlossiness.png',
      '/modelo/textures/Edifs_Cristal_diffuse.png',
      '/modelo/textures/Edifs_Cristal_emissive.png',
      '/modelo/textures/Edifs_Cristal_normal.png',
      '/modelo/textures/Edifs_Cristal_specularGlossiness.png',
      '/modelo/textures/Puente_diffuse.png',
      '/modelo/textures/Puente_emissive.png',
      '/modelo/textures/Puente_normal.png',
      '/modelo/textures/Puente_specularGlossiness.png',
      '/modelo/textures/tierra_diffuse.png',
      '/modelo/textures/tierra_normal.png',
      '/modelo/textures/tierra_specularGlossiness.png']
  );

  // Asigna las texturas a los materiales del modelo
  gltf.scene.traverse( ( child ) => {
    if ( child.isMesh ) {
      child.material.map = textures[0];
      child.material.normalMap = textures[1];
    }
  } );
  return <primitive object={gltf.scene} position={[0, -120, -1110]} rotation={[1, 0, 0]} />;
}

export default City;