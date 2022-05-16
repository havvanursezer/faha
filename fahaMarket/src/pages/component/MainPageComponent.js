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
        <View style={{flex:4, alignItems:"flex-end"}}>
          <Text style = {styles.headerTitle}>Faha Market</Text>
        </View>
        <View style = {{flex:2, alignItems:"flex-end"}}>
          <TouchableOpacity
          onPress={() =>onLogout()}>
            <Image 
            style={styles.logoutButtonIcon}
            source = {require("../../assets/logout.png")}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {styles.chartCont}>
        {/* <View style = {styles.chartItem}>
          <Text style={styles.chartText}>Bitcoin</Text>
          <Text style={styles.chartText}>BTC</Text>
          <Text style={styles.chartText}>460,015</Text>
        </View>
        <View style = {styles.chartItem}>
          <Text style={styles.chartText}>Ethereum</Text>
          <Text style={styles.chartText}>ETH</Text>
          <Text style={styles.chartText}>31,471</Text>
        </View>
        <View style = {styles.chartItem}>
          <Text style={styles.chartText}>Tether</Text>
          <Text style={styles.chartText}>USDT</Text>
          <Text style={styles.chartText}>15,46</Text>
        </View> */}
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