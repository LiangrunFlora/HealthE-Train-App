import {Image, Text, TouchableOpacity, View} from "react-native";
import tw from "twrnc";
import {useNavigation} from "@react-navigation/native";

const RepositoryItem = () => {
  // todo info:RecentInfo
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={tw`mb-3 pl-3 pt-2`} onPress={() => navigation.navigate('Note')}>
      <View style={tw`flex-row`}>
        <Image source={require('../../resources/repository.png')} style={tw`h-11 w-11`}/>
        <View style={tw`flex`}>
          <Text style={tw`text-xl`}>
            {/*todo 获取值*/}
            {/*{info.note.noteTitle}*/}
            公共卫生
          </Text>
          <Text style={tw`text-gray-500`}>
            最近访问于
            2024/7/17
            {/*todo 获取值*/}
            {/*{info.note.time.toLocaleString()}*/}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default RepositoryItem;
