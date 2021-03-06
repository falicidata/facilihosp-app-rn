/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Alert} from 'react-native';
import { Appbar, Colors, IconButton, ProgressBar, TextInput, Text } from 'react-native-paper'
import styles from './ExameFormStyle'
import exameService from '../../services/exameService'
import RNFetchBlob from 'rn-fetch-blob'
import http from '../../util/httpRequestService'


const ExameForm = (props) => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
    const [downloadDisable, setDownloadDisable] = useState(false);

    useEffect(() => {

        async function obterExame() {

            setLoading(true);
            let res = await exameService.getById(props.route.params.id);
            setItem(res.data);
            setLoading(false);
        }
        obterExame();

    }, [])

    const download = async () => {

        setDownloadDisable(true);
        setLoading(true);
        let res = await http.downloadFileByUrl(item.url);
        setDownloadDisable(false);
        setLoading(false);
        if (res)
            Alert.alert("Download do exame realizado!");
        else
            Alert.alert("Algo deu errado, o download não foi realizado :(");

    }




    return (

        <SafeAreaView >
            <Appbar.Header style={{backgroundColor:Colors.blue400}}>
                <Appbar.Action icon="arrow-left" onPress={() => { props.navigation.pop() }} color={Colors.white} />
                <Appbar.Content title={item.tipoOutro} subtitle={item.fornecedor} color={Colors.white} />
                <Appbar.Action disabled={downloadDisable} icon='download' onPress={download} color={Colors.white} />
            </Appbar.Header>
            <ProgressBar visible={loading} indeterminate={true} color={Colors.purple500} />
            <View >
                <TextInput
                    label="Tipo"
                    value={item.tipoOutro}
                    style={styles.lista}


                />
                <TextInput
                    label="Hospital / Laboratório"
                    value={item.fornecedor}
                    style={styles.lista}

                />
                <TextInput
                    label="Médico"
                    value={item.medico}
                    style={styles.lista}

                />

                <ScrollView style={styles.scroll}>
                    <Text>
                        {item.retorno}
                        
                    </Text>
                </ScrollView>

                <ScrollView style={styles.scroll}>
                    <Text>
                        {item.resultado}
                        
                    </Text>
                </ScrollView>



            </View>
        </SafeAreaView>



    );
}


export default ExameForm;
