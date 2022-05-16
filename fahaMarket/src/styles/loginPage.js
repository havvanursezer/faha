import { StyleSheet } from "react-native";
import color from "../UI/color";
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: color.lightBg,
    },
    top: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    bottom: {
        flex:1,
        alignItems:"flex-end",
        marginHorizontal:"15%"
    },
    header: {
        fontSize:30,
    },
    activeInput:{
        borderWidth:1,
        borderColor:'red'
    },
    input: {
        width: "70%",
        height: 45,
        borderWidth:0.2,
        borderRadius:5,
        margin:5,
        flexDirection:"row",
        alignItems:"center"
    },
    visButton:{
        width:'28%',
        height:'50%',
    },
    visButtonCont:{
        flex: 1,
        alignItems:"flex-end",
    },
    visIcon:{
        width:'100%',
        height:'100%',
    },
    inputText:{
        flex: 1, 
        fontSize: 16
    },
    button: {
        backgroundColor: color.blue,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        width:"30%",
        height: 45
    }
})
export default styles;