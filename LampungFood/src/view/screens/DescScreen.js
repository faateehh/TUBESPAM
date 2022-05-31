import React, { useState, useEffect } from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const DescScreen = () => {
    return (
        <ScrollView>
        <SafeAreaView
            style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
            <View style={style.header}>
                <View>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Mobile Apps</Text>
                <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>
                    LampungFood
                </Text>
                </View>
                <Icon name="storefront" marginHorizontal={20} size={100} color={COLORS.green} />
            </View>
            <View style={style.detailsContainer}>
                <View
                style={{
                    marginLeft: 20,
                    marginTop: 10,
                    marginRight: 20
                }}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Deskripsi Aplikasi</Text>
                <Text style={{paddingTop: 10, fontSize: 16}}>Aplikasi LampungFood adalah aplikasi mobile yang 
                berfungsi untuk menampilkan produk dari toko oleh-oleh di Lampung, yaitu LampungFood. 
                Aplikasi ini menampilkan beberapa elemen dari produk seperti nama, gambar, harga, 
                deskripsi yang berisi detail dari produk, serta informasi kontak untuk membeli produk tersebut. 
                <br></br><br></br>
                Dikembangkan Untuk Memenuhi Tugas UAS Pengembangan Aplikasi Mobile 
                <br></br><br></br>
                Nama Anggota :
                <br></br>
                1. Adam Taufiqurrahman - 118140065
                <br></br>
                2. Muhammad Nadhif Athalla - 119140209
                <br></br>
                3. Muhammad Fariz Luthfi - 119140199
                <br></br>
                4. Muhammad Faatih Rizal Auliya - 119140212
                <br></br><br></br>
                Kelas PAM : RB
                </Text>
            </View>
        </View>
    </SafeAreaView>
    </ScrollView>
)}

const style = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailsContainer: {
        flex: 1,
        backgroundColor: COLORS.light,
        marginHorizontal: 20,
        marginBottom: 25,
        borderRadius: 20,
        marginTop: 20,
        paddingTop: 30,
        paddingBottom: 50
    },
})

export default DescScreen;