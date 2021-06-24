import React from 'react';
import 
    {
     View,
     Text,
     Image,     
    } from 'react-native';
import { styles } from './style';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { Background} from '../../components/Background';
export function Signin(){
    const navigation = useNavigation()

    function handleSignin(){
        navigation.navigate('Home');
    }

    return(
        <Background>
        <View style={styles.container}>          
            <Image source={IllustrationImg} 
            style={styles.image}
            resizeMode='stretch'
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Text>
            </View>
            <Text style={styles.subTitle}>
                Crie grupos para jogar seus games {'\n'}
                favoritos com seus amigos
            </Text>

          <View style={styles.footer}>
          <ButtonIcon            
            title="Entrar com Discord"            
            onPress={handleSignin}
            />
          </View>
        </View>   
        </Background>             
    )
}