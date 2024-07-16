import { create } from "zustand";
interface useChatUserInfo {
  chatUserInfo: UserInfo;
  setChatUserInfo: (input: UserInfo) => void;
}
const useChatUserInfo = create<useChatUserInfo>((set) => ({
  chatUserInfo: {
    userId:-1n,
    account:"",
    username:"",
    cover:""
  },
  setChatUserInfo: (input) => set(() => ({ chatUserInfo: input })),
}));

export default useChatUserInfo;