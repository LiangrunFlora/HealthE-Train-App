import { create } from "zustand";
interface useUnreadMessageList {
  unreadMessageList: ChatMessage[];
  setUnreadMessageList: (input: ChatMessage[]) => void;
}
const useUnreadMessageList = create<useUnreadMessageList>((set) => ({
  unreadMessageList: [],
  setUnreadMessageList: (input) => set(() => ({ unreadMessageList: input })),
}));

export default useUnreadMessageList;