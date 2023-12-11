import { createStackNavigator } from "@react-navigation/stack";
import login from '/home/aluno/Documentos/kaiky-ppdm/PPDM--kaiky/src/screen/login.js'
import inicial from "/home/aluno/Documentos/kaiky-ppdm/PPDM--kaiky/src/screen/inicial.js";
import cadastro from '/home/aluno/Documentos/kaiky-ppdm/PPDM--kaiky/src/screen/cadastro.js'
import home from '/home/aluno/Documentos/kaiky-ppdm/PPDM--kaiky/src/screen/home.js'
import { NavigationContainer } from "@react-navigation/native";

export default function navegacao() {
    var Stack = createStackNavigator()
    return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="inicial"component={inicial}
            options={{headerShown: false}}/>
            <Stack.Screen name="login"component={login}
            options={{headerShown: false}}/>
            <Stack.Screen name="cadastro"component={cadastro}
            options={{headerShown: false}}/>
            <Stack.Screen name="home"component={home}
            options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
        
    )
}