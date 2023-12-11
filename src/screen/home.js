import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Home() {
    const navigation = useNavigation();
    function inicial () {
        navigation.navigate('Inicial')
    }
    return (
        <View style={style.centrali}>
            <Text>Olá Lenda</Text>
            <Button onPress={() => inicial()} title="Sair"/>
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