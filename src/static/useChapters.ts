
import { create } from "zustand";

interface useChaptersInput {
  chapters: LessonDetailDTO[];
  setChapters: (input: LessonDetailDTO[]) => void;
}

const useChapters = create<useChaptersInput>((set) => ({
  chapters: [],
  setChapters: (input) => set(() => ({ chapters: input })),
}));

export default useChapters;
