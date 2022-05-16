import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import styles from '../../styles/loginPage'
import { TextInput } from 'react-native-gesture-handler'

export default function LoginPageComponent({
  validate,
  mail, 
  password,
  setMail,
  setPassword,
  onLogin,
  visibilityFunc,
  visibility,
  icon
}) {
  return (
    <View style = {styles.container}>
      <View style = {styles.top}>
        <Image 
        style={{width:"60%"}}
        resizeMode="contain"
        source={require("../../assets/logo.png")}/>
      </View>
      <View style = {styles.top}>
        <View style = { validate() === false ? [styles.activeInput, styles.input] : styles.input}>
          <Image
            source={require('../../assets/user.png')}
            resizeMode="contain"
          />
          <TextInput 
          style={styles.inputText}
          placeholder='Mail Adresi'
          onChangeText={(text)=>setMail(text)}
          value={mail}/>
        </View>
        <View style = {styles.input}>
          <Image
            resizeMode="contain"
            source={require('../../assets/password.png')}
          />
          <TextInput 
          style={styles.inputText}
          placeholder='Şifre'
          secureTextEntry={visibility}
          value={password}
          onChangeText={(text)=>setPassword(text)}/>
          <View style={styles.visButtonCont}>
            <TouchableOpacity
            activeOpacity={1}
            onPress={() => visibilityFunc()}
            style={styles.visButton}>
              <Image style={styles.visIcon} source={icon} resizeMode="contain"/>
            </TouchableOpacity>
          </View>
        </View>
        
        
      </View>
      <View style = {styles.bottom}>
        <TouchableOpacity
        style = {styles.button}
        onPress={() => onLogin()}>
            <Text>Giriş</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}