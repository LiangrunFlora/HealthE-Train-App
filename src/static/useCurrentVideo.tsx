import { create } from "zustand";

interface useCurrentVideoInput {
  currentVideo: number;
  setCurrentVideo: (input: number) => void;
}

const useCurrentVideo = create<useCurrentVideoInput>((set) => ({
  currentVideo: -2,
  setCurrentVideo: (input) => set(() => ({ currentVideo: input })),
}));

export default useCurrentVideo;
