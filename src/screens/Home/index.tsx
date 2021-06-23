import React,{useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import { styles } from './style';
import {CategorySelect} from '../../components/CategotySelect';
import {Profile} from '../../components/Profile';
import {ButtonAdd} from '../../components/ButtonAdd';
import {ListHeader} from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

export function Home(){
    const [category, setCategory] = useState('');
    
    const appointments = [{
        id: '1',
        guild:{
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        category: '1',
        date: '22/06 às 20:40h',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
        
    },
    {
        id: '2',
        guild:{
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        category: '1',
        date: '22/06 às 20:40h',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
        
    }
]


    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    return(
        <View>            
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd />               
            </View>
            <CategorySelect categorySelected={category}   
            setCategory={handleCategorySelect}         
            />
            <View style={styles.content}>
                <ListHeader 
                title="Partidas agendadas"
                subTitle="Total 6"
                />
                
                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>(
                         <Appointment data={item}/>                        
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.matches}
                showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}