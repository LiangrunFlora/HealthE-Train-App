import { create } from "zustand";
interface useAllMessageListInput {
  allMessageList: ChatMessage[];
  setAllMessageList: (input: ChatMessage[]) => void;
}
const useAllMessageList = create<useAllMessageListInput>((set) => ({
  allMessageList: [],
  setAllMessageList: (input) => set(() => ({ allMessageList: input })),
}));

export default useAllMessageList;