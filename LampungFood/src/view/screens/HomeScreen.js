import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
const width = Dimensions.get('window').width / 2 - 30;

const HomeScreen = ({navigation}) => {
  const [produk, setProduk] = useState([]);

  var requestOptions = {
    method: 'GET'
  };

  const getProduk = async () => {
    try {
     const response = await fetch("https://api-pam.herokuapp.com/api/get_all_produk", requestOptions);
     const json = await response.json();
     setProduk(json);
   } catch (error) {
     console.error(error);
   }
 }

  useEffect(() => {
    getProduk();
  }, []);
  
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['Daftar Produk'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ produk }) => {
    return (
      <View style={style.card}>
        <View style={{alignItems: 'flex-end'}}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              }}>
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={{uri: produk.url_gambar}}
              style={{flex: 1, resizeMode: 'contain', height: 500, width: 500, borderRadius: 500}}
            />
          </View>
 
          <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 10}}>
            {produk.nama_produk}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 15}}>
              {produk.harga_produk}
            </Text>
            <View
              style={{
                padding: 5,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Details', produk)}>
                <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
                  Detail
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
  };

  return (
    <ScrollView>
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>
            LampungFood
          </Text>
        </View>
        <Icon name="storefront" marginHorizontal={20} size={100} color={COLORS.green}/>
      </View>
      {/* <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
      </View> */}
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={produk}
        renderItem={({item}) => {
          return <Card produk={item} />;
        }}/>
    </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  
  categoryText: {
    fontSize: 20, 
    color: 'grey', 
    fontWeight: 'bold'
  },

  categoryTextSelected: {
    color: COLORS.black,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.black,
  },
  
  card: {
    backgroundColor: COLORS.light,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    flex: 1,
  },
  
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;