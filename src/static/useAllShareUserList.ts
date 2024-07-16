import { create } from "zustand";
interface useAllShareUserList {
  allShareUserList: UserInfo[];
  setAllShareUserList: (input: UserInfo[]) => void;
  addUsersToShareList: (newUsers: UserInfo[]) => void;
}
const useAllShareUserList = create<useAllShareUserList>((set) => ({
  allShareUserList: [],
  setAllShareUserList: (input) => set(() => ({ allShareUserList: input })),
  addUsersToShareList: (newUsers) =>
    set((state) => {
      const userMap = new Map<string, UserInfo>();
      state.allShareUserList.forEach((user) => userMap.set(user.userId.toString(), user));
      newUsers.forEach((user) => userMap.set(user.userId.toString(), user));
      return { allShareUserList: Array.from(userMap.values()) };
    }),
}));


export default useAllShareUserList;