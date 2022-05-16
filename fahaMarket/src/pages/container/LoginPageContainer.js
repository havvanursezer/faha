import React, { useState } from 'react'
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/action/app';
import user from '../../json/user';
import LoginPageComponent from '../component/LoginPageComponent'

export default function LoginPageContainer() {

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(true);
  const [icon, setIcon] = useState(require('../../assets/visible.png'));
  const dispatch = useDispatch();
 
  const validate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if(mail !== ""){
      if (reg.test(mail) === false) {
        return false
      }
      else {
        return true
      }
    }else{
      return true
    }
    
  };

  function visibilityFunc() {
    if (visibility === true) {
      setVisibility(false);
      setIcon(require('../../assets/unvisible.png'));
    } else {
      setVisibility(true);
      setIcon(require('../../assets/visible.png'));
    }
  }


  const onLogin = async() =>{
    if(mail !== ""){
      if(validate() !== false){
        if(password !== ""){
          let userData = user.filter(x=>x.mail === mail);
          if(userData.length > 0){
            if(userData[0].password === password){
              let userChange = await dispatch(setUser(userData[0].mail));
              Actions.mainPage();
            }
            else{
              Alert.alert("Lütfen şifrenizi kontrol ediniz.")
            }
          }else{
            Alert.alert("Kullanıcı Bulunamadı.")
          }
        }else{
          Alert.alert("Şifre alanı boş geçilemez.")
        }
      }else{
        Alert.alert("Mail adresi formatı geçersiz.")
      }
    }else{
      Alert.alert("Mail boş geçilemez.")
    }
  }

  return (
    <LoginPageComponent
    mail={mail}
    onLogin={onLogin}
    password={password}
    setMail={setMail}
    setPassword={setPassword}
    validate={validate}
    visibilityFunc={visibilityFunc}
    visibility={visibility}
    icon={icon}/>
  )
}