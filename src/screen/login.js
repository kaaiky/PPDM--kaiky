import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
    const navigation = useNavigation();
    function home() {
        navigation.navigate('home')
    }
    return (
        <View style={style.centrali}>
            <Text>Usuario:</Text>
            <Text>Senha:</Text>
            <Button onPress={() => home()} title="Entrar"/>
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