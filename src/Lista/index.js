import React, { Component } from "react";
import {View, Imagem, Text, TouchableOpacity, Image} from 'react-native'
import styles from './style.js'

export default class Lista extends Component{

    constructor(props){
        super(props)
        this.state = {
            feed: this.props.data,
            srcLike: require('../img/like.png')
        }

        this.like = this.like.bind(this)
    }

    like() {

        if (this.state.feed.likeada == true) {
            this.setState({
                feed: {
                    ...this.state.feed,
                    likeada: false,
                    likers: this.state.feed.likers -1
                },
                srcLike: require('../img/like.png')
            })
        }
        else {
            this.setState({
                feed: {
                    ...this.state.feed,
                    likeada: true,
                    likers: this.state.feed.likers +1
                },
                srcLike: require('../img/likeada.png')
            })
        }

    }

    render() {
        return(
            <View style={styles.areaFeed}>
                
                <View style={styles.viewPerfil}>
                    <Image
                        source={this.state.feed.imgperfil}
                        style={styles.fotoPerfil}
                    />

                    <Text style={styles.nomeUsuario}> {this.state.feed.nome} </Text>
                    <View style={styles.opcoesFeed}>
                        <TouchableOpacity>
                            <Text style={styles.opcoesFeedText}>...</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <Image
                    resizeMode='cover'
                    style={styles.fotoFeed}
                    source={{uri: this.state.feed.imgPublicacao}}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image
                            source={this.state.srcLike}
                            style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../img/comment.png')}
                            style={styles.iconeComment}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../img/send.png')}
                            style={styles.iconeSend}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveFeed}>
                        <Image
                            source={require('../img/save.png')}
                            style={styles.iconeSave}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.likes}>
                    <Text>Curtido por <Text style={{fontWeight: 'bold'}}>{this.state.feed.likers} pessoas</Text></Text>
                </View>
                <View style={styles.areaDescricao}>
                    <Text style={{fontWeight: 'bold'}}>{this.state.feed.nome}</Text>
                    <Text style={styles.descricao}>{this.state.feed.descricao}</Text>
                </View>

            </View>
        )
    }
}