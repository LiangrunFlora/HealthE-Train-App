// MarkdownRenderer.js
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Markdown from 'react-native-markdown-display';
import {useRoute} from "@react-navigation/native";
import tw from "twrnc";
import {Avatar} from "@rneui/base";

const Content = [
  {
    title:"影像学",
    markdownContent:"`影像学`" +
      "是医学的一个分支，主要研究通过各种影像技术来获取人体内部结构和功能的信息，" +
      "以辅助诊断、治疗和监测疾病。常见的影像技术包括X射线、计算机断层扫描（CT）、磁共振成像（MRI）、超声波（US）、正电子发射断层扫描（PET）等。" +
      "影像学不仅在疾病的早期发现和诊断中起重要作用，还在治疗计划制定、手术导航、疗效评估和病情监测等方面具有不可替代的价值。"
  },
  {
    title:"护理学",
    markdownContent:"护理学是一门以提供健康护理服务为核心的学科，涵盖了对患者、家庭和社区的照护。护理学的目标是通过预防疾病、促进健康、缓解痛苦和恢复健康来提高患者的生活质量。护理学的内容包括基础护理、临床护理、社区护理、护理管理和护理教育等方面。护理人员在医疗团队中扮演着至关重要的角色，他们不仅要具备扎实的医学知识和护理技能，" +
      "还需要有良好的沟通能力和人文关怀精神。"
  },
  {
    title:"临床医学",
    markdownContent:"临床医学是一门研究疾病的诊断、治疗和预防的医学科学，主要通过临床实践来解决患者的健康问题。临床医学包括内科、外科、妇产科、儿科、精神科、急诊医学等多个分支。临床医学强调通过病史采集、体格检查和各种辅助检查（如化验、影像学检查）来确诊疾病，并根据病情制定个性化的治疗方案。临床医学的核心在于直接面对患者，通过临床实践不断提升诊疗水平和医疗服务质量。"
  },
];
const Renderer = ({ title, markdownContent }:{title:string, markdownContent:string}) => {
  return (
    <ScrollView contentContainerStyle={styles.container} style={tw`bg-white`}>
    <Text style={styles.title}>{title}</Text>
      <View style={tw`flex-row items-center`}>
        <Avatar source={require("../../resources/profile.jpeg")} rounded/>
        <Text style={tw`text-gray-500`}>最后修改</Text>
      </View>
      <Markdown style={markdownStyles}>{markdownContent}</Markdown>
    </ScrollView>
);
};

const MarkdownRenderer = () => {
  const route = useRoute();
  const {noteIndex} = route.params;
  return(
    <Renderer title={Content[noteIndex].title} markdownContent={Content[noteIndex].markdownContent}/>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

const markdownStyles = {
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  heading1: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  heading2: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  heading3: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  // Add more styles as needed
};

export default MarkdownRenderer;
