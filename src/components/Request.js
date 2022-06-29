import React from "react";
import {Text,StyleSheet} from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';

const Request=({title})=>{
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Title>{title}</Title>
            </Card.Content>
        </Card>
        
    )
}
const styles = StyleSheet.create({
    card: {
      margin:10,
    },
  });

export default Request;
