import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CardCommand({ isDarkMode }) {
    return (
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 25 }}>
                <Image style={styles.card} source={require('../assets/Card.png')} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ alignItems: 'center', padding: 16 }}>
                    <View style={{ marginBottom: 8, backgroundColor: '#ded9d9', borderRadius: 20, padding: 8 }}>
                        <Icon name="arrow-upward" size={28} color="#333" />
                    </View>
                    <Text style={[styles.transactionTitle, isDarkMode && styles.textDark]}>Sent</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', padding: 16 }}>
                    <View style={{ marginBottom: 8, backgroundColor: '#ded9d9', borderRadius: 20, padding: 8 }}>
                        <Icon name="arrow-downward" size={24} color="#333" />
                    </View>
                    <Text style={[styles.transactionTitle, isDarkMode && styles.textDark]}>Receive</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', padding: 16 }}>
                    <View style={{ marginBottom: 8, backgroundColor: '#ded9d9', borderRadius: 20, padding: 8 }}>
                        <Icon name="currency-exchange" size={24} color="#333" />
                    </View>
                    <Text style={[styles.transactionTitle, isDarkMode && styles.textDark]}>Loan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', padding: 16 }}>
                    <View style={{ marginBottom: 8, backgroundColor: '#ded9d9', borderRadius: 20, padding: 8 }}>
                        <Icon name="account-balance-wallet" size={24} color="#333" />
                    </View>
                    <Text style={[styles.transactionTitle, isDarkMode && styles.textDark]}>Top up</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    CardCommand: {
        height: 50,
        width: 50,
        marginBottom: 15,
        marginTop: 15,
        opacity: 0.7
    },

    text: {
        color: '#000', // Default color
    },

    textDark: {
        color: '#fff',
    }
});