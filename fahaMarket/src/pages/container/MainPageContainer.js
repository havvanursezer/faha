import React, { useEffect, useState } from 'react'
import MainPageComponent from '../component/MainPageComponent'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Alert } from 'react-native';
import { setUser } from '../../../redux/action/app';

export default function MainPageContainer() {
  const {user} = useSelector(state =>state.app)
  const [list, setList] = useState(null);
  const dispatch = useDispatch();

  let interval = null;

  const clearIntervalFunc = () => clearInterval(interval);


  const getData = async() =>{
    let dataFunc = await axios.get("https://api.coincap.io/v2/assets")
    .then(function(response){
      if(response.data.data.slice(0,5) !== list){
        setList(response.data.data.slice(0,5));
      }
    })
    .catch(function(err){
      clearIntervalFunc();
      Alert.alert("Lütfen tekrar deneyin.")
    })
  }

  const onLogout = () =>{
    clearIntervalFunc();
    dispatch(setUser(null));
  }

  useEffect(()=>{
    getData();
    interval = setInterval(() => {
      getData();
    }, 2000);
    return () => {
      clearIntervalFunc(interval)
    };
  }, [])
  
  return (
    <MainPageComponent
    onLogout={onLogout}
    user = {user}
    list = {list}/>
  )
}