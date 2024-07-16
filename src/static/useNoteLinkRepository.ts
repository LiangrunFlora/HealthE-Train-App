import { create } from "zustand";
interface useNoteLinkRepository {
  noteLinkRepository: bigint;
  setNoteLinkRepository: (input: bigint) => void;
}
const useNoteLinkRepository = create<useNoteLinkRepository>((set) => ({
  noteLinkRepository: -1n,
  setNoteLinkRepository: (input) => set(() => ({ noteLinkRepository: input })),
}));

export default useNoteLinkRepository;