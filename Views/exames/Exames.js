/* eslint-disable prettier/prettier */
import React, { useState, useEffect, } from 'react';
import { View, SafeAreaView, FlatList, Alert } from 'react-native';
import { List, Appbar, Colors, IconButton, ProgressBar } from 'react-native-paper'
import http from '../../util/httpRequestService'
import styles from './ExamesStyle'
import exameService from '../../services/exameService'
import Moment from 'moment'


const Exame = (props) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [downloadDisable, setDownloadDisable] = useState(false);


    const abrirExame = async (id) => {
        props.navigation.navigate("ExameForm", { id });

    };

    useEffect(() => {

        async function obterExames() {
            setLoading(true);
            let res = await exameService.getAll();
            setItems(res.data);
            setLoading(false);
        }
        obterExames();

    }, [])

    const download = async (url) => {

        setDownloadDisable(true);
        setLoading(true);
        let res = await http.downloadFileByUrl(url);
        setDownloadDisable(false);
        setLoading(false);
        if (res)
            Alert.alert("Download do exame realizado!");
        else
            Alert.alert("Algo deu errado, o download não foi realizado :(");

    }


    return (

        <SafeAreaView>

            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={() => { }} />
                <Appbar.Content title="Exames" subtitle={'Facilidata'} />
                <Appbar.Action icon='exit-to-app' onPress={() => { props.navigation.navigate("Login") }} />
            </Appbar.Header>
            <ProgressBar visible={loading} indeterminate={true} color={Colors.purple500} />
            <View >
                <View>
                    <FlatList
                        data={items}

                        renderItem={({ item }) =>

                            <List.Item
                                title={item.tipoOutro}

                                description={`${Moment(item.criadoEm).format('DD/MM/YY H:mm')} > ${item.formato}`}
                                titleNumberOfLines={3}

                                right={props =>
                                    <View style={{ flexDirection: 'row' }} >
                                        <IconButton
                                            icon="eye"
                                            color={Colors.green400}
                                            size={20}
                                            onPress={() => abrirExame(item.id)}
                                        />
                                        <IconButton
                                            disabled={downloadDisable}
                                            icon="download"
                                            color={Colors.blue500}
                                            size={20}
                                            onPress={() => { download(item.url) }}
                                        />
                                    </View>

                                }
                            >
                                <List.Icon icon="file-download" />
                            </List.Item>


                        }
                    />

                </View>

            </View>
        </SafeAreaView>



    );
}



export default Exame;
