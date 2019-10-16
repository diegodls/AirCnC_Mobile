import React, { useState, useEffect } from 'react'
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage';

import logo from '../../assets/logo.png'

import api from '../services/api'

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {//metodo para verificar se o login está salvo

        AsyncStorage.getItem('user').then(user => {//pode utilizar o await ou o then
            if (user){
                navigation.navigate('List');
            }
        })

    }, []);

    async function handleSubmit() {
        const response = await api.post('/sessions', {
            email
        })

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('techs', techs);

        const testAwait = await AsyncStorage.getItem('user')

        console.log('ID: ' + testAwait);


        navigation.navigate('List');
    }

    return (
        <KeyboardAvoidingView // usado para IOS, para não cobrir o teclado
            enabled={Platform.OS === 'ios'}
            behavior="padding"
            style={styles.container}>
            <Image source={logo} />
            <View style={styles.form}>
                <Text style={styles.label}>SEU EMAIL *</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Seu Email'
                    placeholderTextColor='#999'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={setEmail} />
                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Tecnologias'
                    placeholderTextColor='#999'
                    autoCapitalize='words'
                    autoCorrect={false}
                    onChangeText={setTechs} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Encontrar Spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,

    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,

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
