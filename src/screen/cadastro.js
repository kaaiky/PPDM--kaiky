import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Button } from "react-native";


export default function Cadastro() {
    const navigation = useNavigation();
    function home() {
        navigation.navigate('home')
    }
    return (
        <View style={style.centrali}>
            <Text>Nome:</Text>
            <Text>Email:</Text>
            <Text>Senha:</Text>
            <Button onPress={() => home()} title="Cadastrar"/>
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