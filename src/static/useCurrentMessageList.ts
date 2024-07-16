import { create } from "zustand";
// 这是当前用户在线时候与其他用户的消息列表，用于直接渲染
// map里面的键为其他用户的id
interface useCurrentMessageList {
  currentMessageList: ChatMessage[];
  setCurrentMessageList: (input: ChatMessage[]) => void;
}
const useCurrentMessageList = create<useCurrentMessageList>((set) => ({
  currentMessageList: [],
  setCurrentMessageList: (input) => set(() => ({ currentMessageList: input })),
}));

export default useCurrentMessageList;