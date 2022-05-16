import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../../styles/mainPage'
import { Actions } from 'react-native-router-flux'
import { FlatList } from 'react-native-gesture-handler'

export default function MainPageComponent({
  user,
  list,
  onLogout
}) {

  return (
    <View style = {styles.container}>
      <View style = {styles.headerCont}>
        <View style={styles.header}>
          <Text style = {styles.headerTitle}>Faha Market</Text>
        </View>
        <View style = {styles.logoutButton}>
          <TouchableOpacity
          onPress={() =>onLogout()}>
            <Image 
            style={styles.logoutButtonIcon}
            source = {require("../../assets/logout.png")}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {styles.chartCont}>
        {list != null && 
          list.map((item, key)=>(
            <View style = {styles.chartItem} key={key} >
            <Text style={[styles.chartText, {flex:1}]}>{item.name}</Text>
            <Text style={[styles.chartText, {flex:1}]}>{item.symbol}</Text>
            <Text style={[styles.chartText, {flex:2}]}>{parseFloat(item.priceUsd).toFixed(3)} $</Text>
          </View>
          ))
        }
      </View>
      <View style={styles.footer}>
        <Text style = {styles.footerText}>
          Kullanıcı: {user}
        </Text>
      </View>
    </View>
  )
}