import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../../styles/mainPage'

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
            <Text style={styles.chartText}>{item.name}</Text>
            <Text style={styles.chartText}>{item.symbol}</Text>
            <Text style={[styles.chartText, styles.flex2]}>{parseFloat(item.priceUsd).toFixed(3)} $</Text>
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