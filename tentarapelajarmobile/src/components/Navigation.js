import React from 'react';
import { connect } from 'react-redux';
import { Container, Footer, FooterTab, Button } from 'native-base'
import { View, Image } from 'react-native'
import { homeScene, profileScene, galleryScene, chatScene } from '../actions'
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './styles/Navigation.styles.js'


const Navigation = (props) => (

  <View style={Styles.box}>
    <FooterTab>
      <Button onPress={() => props.homeScene('HOME')}>
        {props.scene === "HOME" ? <Icon size={25} name='ios-home' /> : <Icon size={25} name='ios-home-outline' />}
      </Button>
      <Button onPress={() => props.homeScene('CHAT')}>
        {props.scene === "CHAT" ? <Icon size={25} name='ios-chatbubbles' /> : <Icon size={25} name='ios-chatbubbles-outline' />}
      </Button>
      <Button onPress={() => props.homeScene('GALLERY')}>
        {props.scene === "GALLERY" ? <Icon size={25} name='ios-images' /> : <Icon size={25} name='ios-images-outline' />}
      </Button>
      <Button onPress={() => props.profileScene('PROFILE')}>
        {props.scene === "PROFILE" ? <Image source={require('../image/Didit.jpg')} style={{height:23, width:23, borderRadius: 5, borderWidth: 1, borderColor:'#FFFFFF'}} /> : <Image source={require('../image/Didit.jpg')} style={{height:23, width:23, borderRadius: 5}} />}
      </Button>
    </FooterTab>
  </View>

)

const mapDispatchToProps = (dispatch) => {
  return{
    homeScene: (tab) => dispatch(homeScene(tab)),
    profileScene: (tab) => dispatch(profileScene(tab)),
    galleryScene: (tab) => dispatch(galleryScene(tab)),
    chatScene: (tab) => dispatch(chatScene(tab))
  }
}

const mapStateToProps = (state) => {
  return{
    scene: state.scene
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Navigation)
