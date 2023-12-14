import { Button, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'
export default function Inicial() {
    const navigation = useNavigation();
    function cadastro() {
        navigation.navigate('cadastro')
    }
    function login() {
        navigation.navigate('login')
    }
    return (
        <View style={style.centrali}>
            <Button onPress={() => login()} title="login"/>
            <Button onPress={() => cadastro()} title="cadastro"/>
        </View>
    )
}
const style = StyleSheet.create({
    centrali:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})