import { Image, Text, View } from "react-native";

export default function Profile({url, text1, text2}:{url:string, text1:string, text2:string}){
    return(
        <View>
            <Image style={{width:200, height:200}} source={{uri:url}}/>
            <View>
                <Text>{text1}</Text>
                <Text>{text2}</Text>
            </View>
        </View>
    )
}