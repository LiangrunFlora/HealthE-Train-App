import {Image, Text, TouchableOpacity, View} from "react-native";
import tw from "twrnc";
import {useNavigation} from "@react-navigation/native";

const FileItem = ({noteTitle, time, index}:{noteTitle:string, time:string, index:number}) => {
  // todo info:RecentInfo
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={tw`mb-3 pl-3 pt-2`} onPress={() => navigation.navigate('MarkdownRenderer', {noteIndex:index})}>
    <View style={tw`flex-row`}>
      <Image source={require('../../resources/file.png')} style={tw`h-11 w-11`}/>
      <View style={tw`flex`}>
        <Text style={tw`text-xl`}>
          {/*todo 获取值*/}
          {/*{info.note.noteTitle}*/}
          {noteTitle}
        </Text>
        <Text style={tw`text-gray-500`}>
          最近访问于
          {time}
          {/*todo 获取值*/}
          {/*{info.note.time.toLocaleString()}*/}
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}
export default FileItem;
