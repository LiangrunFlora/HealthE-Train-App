import { create } from "zustand";
interface useMessageLatestTime {
  messageLatestTime: Date;
  setMessageLatestTime: (input: Date) => void;
}
const useMessageLatestTime = create<useMessageLatestTime>((set) => ({
  messageLatestTime: new Date(),
  setMessageLatestTime: (input) => set(() => ({ messageLatestTime: input })),
}));

export default useMessageLatestTime;