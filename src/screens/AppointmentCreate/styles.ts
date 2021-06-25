
import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container:{
        flex: 1,
    },
    label:{
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    form:{
        paddingHorizontal: 24,
        marginTop: 32        
    },
    select:{
        width: '100%',
        height: 62,
        flexDirection: 'row',
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
        marginBottom: 20

    },
    selectBody:{
        flex:1,
        alignItems: 'center',        
    },
    image:{
        width: 64,
        height: 60,
        backgroundColor: theme.colors.secondary40,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8
    },
    field:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    column:{
        flexDirection: 'row',
        alignItems: 'center',        
    },
    divider:{
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight, 
    },
    caracteresLimit:{
        fontFamily: theme.fonts.text500,
        fontSize: 13,
        color: theme.colors.heading,
        marginTop: 24
    },
    footer:{
       marginVertical: 20,
       marginBottom:  56,
       paddingHorizontal: 24
    }
    
});