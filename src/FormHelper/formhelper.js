import React from "react";
import {
    Text,
    View,
    Dimensions,
} from 'react-native';
import {
    Modal,
    Portal,
    Button,
    Provider,
    TextInput as TI,
  } from 'react-native-paper';
  import {CircleIcon, ScrollView} from 'native-base';

export function CustomModel(props) {
    return (
        <Provider>
            <Portal>
                <Modal
                    visible={props.visible}
                    onDismiss={props.hideModal}
                    contentContainerStyle={props.styles.containerStyle}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={props.styles.container}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ flex: 0.6 }}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontFamily: 'Poppins-ExtraBold',
                                        color: 'black',
                                    }}>
                                    {props.title}
                                </Text>
                            </View>
                            {props.body}
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    flex: 0.5,
                                    buttom: 0,
                                    left: 0,
                                    width: Dimensions.get('window').width - 50,
                                    alignItems: 'center',
                                }}>
                                <Button
                                    style={{ backgroundColor: '#E7264C', width: 115 }}
                                    onPress={props.hideModal}>
                                    <Text style={{ color: 'white' }}>Cancel</Text>
                                </Button>
                                <Button style={{ backgroundColor: '#4A90C3', width: 115 }} onPress={props.handleSubmit}>
                                    <Text style={{ color: 'white' }}>Submit</Text>
                                </Button>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>
            </Portal>
        </Provider>
    );
}