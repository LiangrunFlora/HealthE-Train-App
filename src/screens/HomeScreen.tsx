import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import tw from 'twrnc';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* 头部 */}
      <View style={styles.header}>
        <Image source={require('../resources/puad.png')} style={styles.logo} />
        <Text style={tw`text-blue-800 text-2xl font-bold`}>HealthE-Train</Text>
      </View>

      {/* 主要内容 */}
      <View style={styles.content}>
        <Image source={require('../resources/background.jpg')} style={tw`h-1/4 w-12/12 mb-5`}/>
        <Text style={styles.subtitle}>让卫生培训变得简单</Text>
        <Text style={styles.description}>
          HealthE-Train致力于提供一个系统、全面的，对在职、在岗基层卫生人员的理论基础知识和基本服务能力的远程培训平台
        </Text>
        {/* 按钮 */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('KnowledgeBase')}>
          <Text style={styles.buttonText}>开始学习</Text>
        </TouchableOpacity>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </View>


  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333333',
  },
  button: {
    backgroundColor: '#3182CE',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default HomeScreen;
