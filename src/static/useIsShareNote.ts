import { create } from "zustand";
interface useIsShareNote {
  isShareNote: boolean;
  setIsShareNote: (input: boolean) => void;
}
const useMessageLatestTime = create<useIsShareNote>((set) => ({
  isShareNote: false,
  setIsShareNote: (input) => set(() => ({ isShareNote: input })),
}));

export default useMessageLatestTime;