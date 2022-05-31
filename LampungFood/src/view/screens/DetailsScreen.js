import React, { useState, useEffect } from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const DetailsScreen = ({navigation, route}) => {
  const produk = route.params;
  console.log(produk)

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={style.imageContainer}>
        <Image 
          source={{uri: produk.url_gambar}} 
          style={{flex: 1, resizeMode: 'contain', height: 420, width: 420, borderRadius: 10}} 
          />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{produk.nama_produk}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {produk.harga_produk}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 20, paddingBottom: 50}}>
          <Text style={{fontSize: 20}}>Tentang Produk</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {produk.deskripsi_produk}
          </Text>
          <View style={style.contactTag}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                lineHeight: 22,
                padding: 5,
                fontWeight: 'bold'
              }}>
              Tertarik Mencoba? <br></br>
              Silahkan Kontak Sosial Media @LampungFood
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  imageContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  detailsContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    marginHorizontal: 25,
    marginBottom: 25,
    borderRadius: 20,
    marginTop: 10,
    paddingTop: 30,
  },
  
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  
  borderBtnText: {
    fontWeight: 'bold', 
    fontSize: 28
  },
  
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  
  priceTag: {
    backgroundColor: COLORS.green,
    padding: 10,
    justifyContent: 'center',
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25
  },

  contactTag: {
    backgroundColor: COLORS.green,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 30
  },
});

export default DetailsScreen;
