import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import data from '../data/data';
import { useNavigation } from '@react-navigation/native';
function Bai1(){
    const navigation = useNavigation();
    const hanldPress = () => {
        navigation.navigate('Bai2')
      };
    const  renderItem = ({item}) =>{
        return(
            <View style={styles.containerItem}>
                <View style={styles.containerItem_Left}>
                    <Image style={{height:80,width:80}}source={{uri: `${item.img}`,}}/>
                </View>
                <View style={styles.containerItem_Mid}>
                    <View style={styles.containerItem_Mid_Item}>
                        <Text style={{fontSize:22,}}>{item.name}</Text>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',}}>
                            <Text style={{color:'grey', fontSize:22,marginRight:10,}}>Shop:</Text>
                            <Text style={{color:'red', fontSize:20,}}>{item.shop}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.containerItem_Right}>
                    <TouchableOpacity style={styles.chat}>
                            <Text style={{fontSize:20,color:'white'}}>Chat</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
                <FlatList style={{flex:0.92}} data={data} renderItem={renderItem}/>
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
        display:'flex',
        flexDirection:'row',
        width:"100%",
        borderBottomWidth:0.5,
        borderColor:'grey',
        padding:5,
    },
    containerItem_Left:{
        flex:0.2,
    },
    containerItem_Mid_Item:{
        marginLeft:10,
    },
    containerItem_Mid:{
        flex:0.57,
        display:'flex',
        flexDirection:'column',
    },
    containerItem_Right:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'center',
    },
    chat:{
        backgroundColor:'red',
        paddingTop:10,
        paddingBottom:10,
        paddingRight:20,
        paddingLeft:20,
        borderRadius:10,
    }
});

export default Bai1;