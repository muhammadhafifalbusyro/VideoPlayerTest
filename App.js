import React from 'react'
import{View,Text } from 'react-native'
import VideoPlayer from 'react-native-video-player';

// if error RCTView flexgrow not a number-> change on node_modules/react-native-video-player=>change flex grow=0
export default class App extends React.Component{
  render(){
    return(
      <VideoPlayer
      autoplay={true}
    video={{ uri: 'https://cctv.istudios.id/stream/camera4/index.m3u8' }}
    videoWidth={1600}
    videoHeight={900}
    disableSeek={true}
/>
    )
  }
}