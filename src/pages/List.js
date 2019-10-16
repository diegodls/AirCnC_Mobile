import React, { useState, useEffect } from 'react'
import { Alert, Text, SafeAreaView, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import socketio from 'socket.io-client'

/*Assets imports*/
import logo from '../../assets/logo.png'

/*Components imports*/
import SpotList from '../components/SpotList';

export default function List({ navigation }) {
    const [techs, setTechs] = useState([]);
    const socketURL = 'http://192.168.100.17:3333'
    //exemplo de URL = 'http://192.168.1.1:3333'

    useEffect(() => {//esse metodo renderiza um alert caso  reserva seja aceita/rejeitada, em tempo real
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio(socketURL, {
                query: { user_id }
            })

            socket.on('booking_response', booking => {
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`)
            })
        })
    }, [])


    async function logout() {


        console.log('Antes: ' + await AsyncStorage.getItem('user'))

        await AsyncStorage.setItem('user', '');

        console.log('Depois: ' + await AsyncStorage.getItem('user'))
        navigation.navigate('Login')
    }

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {

            const techsArray = storagedTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);

        })

    }, [])



    return (

        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={logout}>
                <Text style={styles.buttonText}>SAIR</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10,


    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,

    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    //:{},
})
