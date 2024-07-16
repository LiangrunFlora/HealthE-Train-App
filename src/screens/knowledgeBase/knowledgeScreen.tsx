import {Button, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {Avatar} from "@rneui/base";
import tw from "twrnc";
import FileItem from "./FileItem.tsx";
import {getUserInfoFromStorage} from "../../utils/userInfo.ts";
import get_recent_file_list from "../../apis/knowledge_base/get_recent_file_list.ts";
import {useMutation} from "@tanstack/react-query";

const KnowledgeScreen = () => {
  const navigation = useNavigation();
  // todo 当前用户
  // const currentUser = getUserInfoFromStorage();

  const [recentNoteDTOList, setRecentNoteDTOList] = useState<RecentNoteDTO[]>([]);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '云文档', // 设置标题
      headerShown: true, // 显示标题栏
    });
  }, [navigation]);

  const {mutate: getRecentFileList} = useMutation({
    mutationFn:get_recent_file_list,
    onSuccess:(data) => {
      // toast.success(<b>欢迎来到主页！</b>);
      setRecentNoteDTOList(data.data);
    },
    onError:(error) => {
      console.log(error);
    }
  });

  useEffect(() => {
    // todo 当前用户
    getRecentFileList(1679028225n);
  }, []);

  return (
    <ScrollView style={tw`bg-white flex`}>
      <View style={tw`flex-row items-center p-2`}>
        <Avatar
          size={50}
          rounded
          source={require('../../resources/profile.jpeg')}
        />
        <Text style={tw`text-2xl font-bold pl-3`}>云文档</Text>
      </View>
      <View style={tw`flex-row`}>
        <TouchableOpacity style={tw`p-5 pr-6 pl-8 flex items-center`} onPress={() => navigation.navigate('Repository')}>
          <Image source={require('../../resources/myRoom.png')} style={tw`h-10 w-10 mb-1`}/>
          <Text style={tw`font-bold`}>我的空间</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-5 pr-6 flex items-center`} onPress={() => navigation.navigate('KnowledgeBase')}>
          <Image source={require('../../resources/shareRoom.png')} style={tw`h-10 w-10 mb-1`}/>
          <Text style={tw`font-bold`}>共享空间</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-5 pr-6 flex items-center`} onPress={() => navigation.navigate('KnowledgeBase')}>
          <Image source={require('../../resources/ask.png')} style={tw`h-10 w-10 mb-1`}/>
          <Text style={tw`font-bold`}>问答社区</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-5 pr-6 flex items-center`} onPress={() => navigation.navigate('KnowledgeBase')}>
          <Image source={require('../../resources/save.png')} style={tw`h-10 w-10 mb-1`}/>
          <Text style={tw`font-bold`}>收藏</Text>
        </TouchableOpacity>
      </View>
      {/*最近访问*/}
      <View style={tw`bg-stone-100`}>
        <View style={tw`bg-white mt-5`}>
          <FileItem noteTitle="影像学" time={new Date().toLocaleString()} index={0}/>
          <FileItem noteTitle="护理学" time="2024/7/17,22:04:10" index={1}/>
          <FileItem noteTitle="临床医学" time={new Date().toLocaleString()} index={2}/>
          {/*{recentNoteDTOList.map((recentNote) => (*/}
          {/*  <FileItem note={recentNote.note} noteLinkRepository={recentNote.noteLinkRepository} userName={recentNote.userName} cover={recentNote.cover}/>*/}
          {/*))}*/}
        </View>
      </View>
      <View style={tw`relative h-80 w-100`}>
        <TouchableOpacity style={tw`absolute bottom-0 right-0`} onPress={() => navigation.navigate('Note')}>
          <Image source={require('../../resources/add.png')} style={tw`h-13 w-13 mb-1`}/>
        </TouchableOpacity>
      </View>
    </ScrollView>


  );
};
export default KnowledgeScreen;


