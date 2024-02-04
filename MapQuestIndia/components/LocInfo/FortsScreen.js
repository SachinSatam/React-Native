import { Text, View } from 'react-native'
import React, { Component } from 'react'
import TopSlider from "./TopSlider.js"
import StateWise from './StateWise.js'

export default function FortsScreen() {
  
    return (
      <View>
        <TopSlider/>
        <StateWise/>
      </View>
    )
  }