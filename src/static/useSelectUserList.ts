import { create } from "zustand";
interface useSelectUserList {
  shareUserList: UserInfo[];
  setShareUserList: (input: UserInfo[]) => void;
}
const useSelectUserList = create<useSelectUserList>((set) => ({
  shareUserList: [],
  setShareUserList: (input) => set(() => ({ shareUserList: input })),
}));

export default useSelectUserList;