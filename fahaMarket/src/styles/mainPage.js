import { StyleSheet } from "react-native";
import color from "../UI/color";
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: color.lightBg
    },
    headerCont: {
        backgroundColor:color.blue,
        width:"100%",
        height:"15%",
        flexDirection:"row",
        alignItems:"center",
        elevation:10
    },
    header: {
        flex:4, 
        alignItems:"flex-end"
    },
    headerTitle:{
        fontSize: 20,
        color:"black",
    },  
    logoutButton:{
        flex:2, 
        alignItems:"flex-end"
    },
    logoutButtonIcon: {
        width:25,
        height:25,
        margin:10,
    },
    chartCont:{
        flex:1
    },
    chartText:{
        fontSize:16,
        color: "black",
        flex:1
    },
    flex2:{
        flex:2
    },
    chartItem:{
        flexDirection:"row",
        justifyContent:"space-around",
        borderBottomWidth:0.2,
        marginTop:20,
        paddingHorizontal:10

    },
    footer:{
        backgroundColor: color.blue,
        width:"100%",
        height:"5%",
        justifyContent: "center",
    },
    footerText: {
        margin: 5
    }
})
export default styles;