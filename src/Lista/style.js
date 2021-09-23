import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    areaFeed: {
        
    },

    nomeUsuario: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 5,
        textAlign: 'left',
        color: '#000000',
    },

    opcoesFeed: {
        marginLeft: 'auto',
        marginRight: 5,
        marginBottom: 6
    },

    opcoesFeedText: {
        fontWeight: 'bold',
        fontSize: 18,  
    },

    fotoPerfil: {
        width: 30,
        height: 30,
        borderRadius: 25
    },

    viewPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        padding: 8
    },

    fotoFeed: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },

    areaBtn: {
        flexDirection: 'row',
        padding: 10,
    },

    iconeLike: {
        width: 24,
        height: 24
    },

    iconeComment: {
        width: 24,
        height: 24,
        marginLeft: 15,
    },

    iconeSend: {
        width: 23,
        height: 23,
        marginLeft: 15,
    },

    iconeSave: {
        width: 24,
        height: 24
    },

    saveFeed: {
        marginLeft: 'auto',
    },

    likes: {
        padding: 10,
        paddingTop: 0
    },

    areaDescricao: {
        padding: 10,
        paddingTop: 0,
        flexDirection: 'row'
    },

    descricao: {
        flex: 1,
        marginLeft: 5,
        fontWeight: 'normal'
    },
})

export default styles