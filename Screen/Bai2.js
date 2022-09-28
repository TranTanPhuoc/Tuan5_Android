import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import data from '../data/data';
import { Rating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';

function Bai2(){
    const navigation = useNavigation();
    const hanldPress = () => {
        navigation.navigate('Bai1');
      };
    const  renderItem = ({item}) =>{
        return(
            <TouchableOpacity style={styles.containerItem}>
                <Image style={{height:150,width:200,}}source={{uri: `${item.img}`,}}/>
                <View style={{paddingLeft:10,paddingRight:10,}}>
                    <Text style={{fontSize:25,}}>{item.name}</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',paddingLeft:10,marginTop:10,alignItems:'center'}}>
                        <Rating  imageSize={20} startingValue={4} readonly tintColor='#DDDDDD'  />
                        <Text style={{fontSize:18,marginLeft:10,}}>(15)</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',paddingLeft:10,marginTop:10,alignItems:'center'}}>
                        <Text style={{fontSize:22,color:'black',fontWeight:'bold',}}>69.900 đ</Text>
                        <Text style={{fontSize:20,color:'grey',marginLeft:20,}}>-39%</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return(
        <SafeAreaView style = {styles.container}>
            <View style={styles.headers}>
                <TouchableOpacity onPress={hanldPress} style={{justifyContent:'center',paddingLeft:15,width:"10%",}}>
                    <AntDesign name="arrowleft" size={28} color="white" />
                </TouchableOpacity>
                <View style={{justifyContent:'center',alignItems:'center',width: "75%",}}>
                    <Text style={{color:'white',fontSize:24,}}>Chat</Text>
                </View>
                <TouchableOpacity style={{justifyContent:'center',paddingLeft:15,width:"10%",}}>
                    <AntDesign name="shoppingcart" size={25} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={{justifyContent:'center',alignItems:'center',flex:0.08,borderBottomWidth:0.5,borderColor:'grey',paddingLeft:40,paddingRight:40,}}>
                    <Text style={{fontSize:18,textAlign:'center'}}>Bạn có thắc mắc với sản phẩm đừng ngại chat với shop</Text>
                </View>
                <FlatList numColumns={2} style={{flex:0.92}} data={data} renderItem={renderItem}/>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={{justifyContent:'center'}}>
                    <Feather name="menu" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center',paddingLeft:50,paddingRight:50,}}>
                    <FontAwesome5 name="home" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center'}}>
                    <Feather name="corner-up-left" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    headers:{
        flex:0.08,
        width:"100%",
        backgroundColor:'#66CCFF',
        display:'flex',
        flexDirection:'row',
    },
    body:{
        flex:0.92,
        width:"100%",
        backgroundColor:'#DDDDDD',
    },
    footer:{
        backgroundColor:'#66CCFF',
        height:"6%",
        width:"100%",
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    containerItem:{
        padding:5,
        flex:1,
        height:270,
    },
    
});

export default Bai2;