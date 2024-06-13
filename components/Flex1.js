import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Flex1() {

    const [name,setName] = useState('avon')
    const [count,setCount] = useState(0)

    const changeName = () =>{
        setName('Ed')
        console.log('按到changeName按鈕了')
    }

    const changeCount = () =>{
        setCount(count => count + 1)
        console.log('按到changeCount按鈕了')
    }

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on {name} app!</Text>
            <Text>計數器現在是{count}個</Text>
            <Button title='change name' onPress={()=>changeName()}/>
            <Button title='change count' onPress={()=>changeCount()}/>
        </View>
    );
    }
const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        flex:1,
        backgroundColor:'pink',
        alignItems:'center',//子項目對齊方式(次軸)，指的是<Text>的部分
        justifyContent:'space-around',//子項目對齊方式(主軸)，指的是<Text>的部分
    },
});