import React, { useState, useEffect, Component } from 'react';
import { View, Text, Image } from 'react-native';
import SelectBrainPart from './screens/SelectBrainPart'; 

import styled, { css } from '@emotion/native'
import { ThemeProvider } from '@emotion/react'


import Expo from "expo";
import * as THREE from "three";
import ExpoTHREE from "expo-three";
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";




const theme = {
  color: "white",
}

const App = () => (
    <ThemeProvider theme={theme}>
    <View>
     <Image source={require('./assets/brainLogo.jpg')} alt="My Image"  />
      <Text>Select a part of the brain:</Text>
      <SelectBrainPart
        onSelect={(selectedPart) => {
          console.log('Selected brain part:', selectedPart);
          // You can navigate to a different screen, fetch more information based on selection, etc.
        }}
      />
    </View>
    </ThemeProvider>
  );

export default App;
