import { create } from "zustand";

interface useCurrentSectionInput {
  currentSection: SectionCheckVO;
  setCurrentSection: (input: SectionCheckVO) => void;
}

const useCurrentSection = create<useCurrentSectionInput>((set) => ({
  currentSection: {
    section: {
      sectionId: 0n,
      sectionTitle: "",
      chapterId: 0n,
      sectionOrder: 0,
      videoId: 0n,
    },
    checkpoint: {
      checkpointId: 0n,
      sectionId: 0n,
      chapterId: 0n,
      lessonId: 0n,
    },
  },
  setCurrentSection: (input) => set(() => ({ currentSection: input })),
}));

export default useCurrentSection;
