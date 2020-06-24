import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import styles from './styles'

import api from '../../services/api' // importando variavel com todos os dados da api

export default function Home() {

    //variaveis que armazenaram dados da api
    const [piada, setPiada] = useState([])
    const [resp, setResp] = useState([])


    //função que pega dados da api
    useEffect(() => {
        async function Jokes() {
            const response = await api.get('/')

            setPiada(response.data.setup)//primeira parte da piada
            setResp(response.data.punchline)//segunda parte da piada

        }
        Jokes()
    }, [])

    //----------------------------------------------------------------------------------------//

    //variaveis para contador
    const [counter, setCounter] = useState(15)

    useEffect(() => {//função do timer de reload
        const timer = counter > 0 && setInterval9(() => setCounter(counter - 1), 1000)
        return () => clearInterval(timer)
    }, [counter])

    //----------------------------------------------------------------------------------------//

    //função de reload
    setTimeout(function Refresh() {
        location.reload()
    }, 15000)

    
    //----------------------------------------------------------------------------------------//


    return ( 
        
        //retorno do app

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Jokes
                </Text>

                <Text style={styles.counter}>
                    New Joke in: {counter}
                </Text>
            </View>
            <View style={styles.bod}>
                <Text style={styles.tit}>
                    Joke: <Text style={styles.joke}> {piada} </Text>
                </Text>
                <Text style={styles.tit}>
                    Answer: <Text style={styles.joke}> {resp} </Text>
                </Text>
            </View>
        </SafeAreaView>
    )

}