import React,{useState} from 'react';
import {View, ImageBackground, Text, FlatList} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Fontisto} from '@expo/vector-icons'
import { styles } from './styles';

import { Background} from '../../components/Background';
import { ListHeader} from '../../components/ListHeader';
import { ListDivider} from '../../components/ListDivider';
import { Member} from '../../components/Member';
import {Header} from '../../components/Header';
import {ButtonIcon} from '../../components/ButtonIcon';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
export function AppointmentDetails(){ 
    
    const members=[
        {
            id: '1',
            username: 'Clever',
            avatar_url: 'https://github.com/CleversonAlexandre.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Clever',
            avatar_url: 'https://github.com/CleversonAlexandre.png',
            status: 'offline'
        }
    ]
    return(
        <Background>     
            <Header 
            title="Detalhes"
            action={
                <BorderlessButton>
                    <Fontisto name="share" size={24} color={theme.colors.primary}/>
                </BorderlessButton>
            }/>          
            <ImageBackground             
                style={styles.banner}
                source={BannerImg}>
            <View style={styles.bannerContainer}>
                <Text style={styles.title}>Lendários</Text>   
                <Text style={styles.subTitle}>
                É hoje que vamos chegar ao challenger sem perder uma partida md10
            </Text>         
            </View>    
            </ImageBackground>
            <ListHeader title="Jogadores"
            subTitle="Total 3"
            /> 
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) =>(
                    <Member data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.member}
            />
           <View style={styles.footer}>
           <ButtonIcon 
                title="Entrar na Partida"

            />
           </View>
        </Background>
    )
}