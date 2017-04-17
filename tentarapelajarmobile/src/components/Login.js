import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Form, Item, Label, Input, Content } from 'native-base'
import Styles from './styles/Login.styles.js'

const Home = (props) => (
  <View style={Styles.box}>
    <Text style={{fontSize:25}}>Hai, Tentara Pelajar</Text>
    <Text style={{fontSize:20}}>Masuk disini</Text>
      <Form style={{width:'75%'}}>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input />
        </Item>
      </Form>
      <TouchableOpacity style={{margin:20, padding:5, width:'40%', alignItems: 'center', backgroundColor:'white'}}>
        <Text>Sign In</Text>
      </TouchableOpacity>
  </View>
)

export default Home;
