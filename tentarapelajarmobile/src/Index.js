import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Chat from './components/Chat';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Header from './components/Header';

class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        { this.props.scene === 'HOME' && <Home /> }
        { this.props.scene === 'PROFILE' && <Profile /> }
        { this.props.scene === 'CHAT' && <Chat/> }
        { this.props.scene === 'GALLERY' && <Gallery /> }
        <Navigation />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
}

const mapStateToProps = (state) => {
  return {
    scene: state.scene
  }
}

export default connect(mapStateToProps, null) (Index);
