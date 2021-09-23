import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Lista from './src/Lista'

export default class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'upside.br', 
          descricao: 'Começou com um tal de Bitcoin, sem muito valor...', 
          imgperfil: require('./src/img/perfil.png'), 
          imgPublicacao: 'https://instagram.ffln3-1.fna.fbcdn.net/v/t51.2885-15/e35/241543075_278964737064651_7679527605534365502_n.jpg?_nc_ht=instagram.ffln3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=0o3n4FLkeg4AX9ghOif&edm=AP_V10EBAAAA&ccb=7-4&oh=a21d880621f1a39c8d9271c18f3761eb&oe=6151CD5F&_nc_sid=4f375e',  
          likeada: false, 
          likers: 0
         },
        {
          id: '2', 
          nome: 'upside.br', 
          descricao: 'Petz dominando o mercado e cada vez mais trazendo inovações e parcerias.', 
          imgperfil: require('./src/img/perfil.png'), 
          imgPublicacao: 'https://instagram.ffln3-1.fna.fbcdn.net/v/t51.2885-15/e35/240625270_431422654863258_7550001339658675553_n.jpg?_nc_ht=instagram.ffln3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=V7LnCHn5EFcAX_A3xSN&edm=AP_V10EBAAAA&ccb=7-4&oh=4583acec60c8ef5654b70a6309d0a2ba&oe=615253AE&_nc_sid=4f375e', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'upside.br', 
          descricao: 'O mercado financeiro não para, e todos os dias acontece...', 
          imgperfil: require('./src/img/perfil.png'), 
          imgPublicacao: 'https://instagram.ffln3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/242440399_408419137625722_6895564578684825352_n.jpg?_nc_ht=instagram.ffln3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=qSqkDJiIavwAX8Z0mLm&edm=AP_V10EBAAAA&ccb=7-4&oh=2219ac1f050cb6cbabde4019036aea81&oe=61539E2F&_nc_sid=4f375e',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'upside.br', 
          descricao: 'Se você sabe da importância de gerenciar suas finanças...', 
          imgperfil: require('./src/img/perfil.png'), 
          imgPublicacao: 'https://instagram.ffln3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/241984394_654312568878127_591127016084330393_n.jpg?_nc_ht=instagram.ffln3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=-JgN_wPFc4gAX9dPNPP&tn=ljUWL_U3LlVocsAA&edm=AP_V10EBAAAA&ccb=7-4&oh=06520d033df41a01022066027140b261&oe=6153AFA5&_nc_sid=4f375e', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'upside.br', 
          descricao: 'Onde mais a Blockchain vai inovar no nosso dia a dia?', 
          imgperfil: require('./src/img/perfil.png'), 
          imgPublicacao: 'https://instagram.ffln3-1.fna.fbcdn.net/v/t51.2885-15/e35/241824507_127254722954851_3875804443532499326_n.jpg?_nc_ht=instagram.ffln3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Cwi28dRiqBYAX_Sn7_z&edm=AP_V10EBAAAA&ccb=7-4&oh=ae0897e20e76141a1fbd81e5aef47f0f&oe=6153A3E8&_nc_sid=4f375e',
          likeada: false, 
          likers: 32
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./src/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={ ({item}) => <Lista data={item} />}
        />

      </View>  
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },

  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1
  },

  logo: {

  },

  send: {
    width: 23,
    height: 23,
  },
});
