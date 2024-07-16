import { create } from "zustand";

interface useCurrentLessonInput {
  currentLesson: Lesson;
  setCurrentLesson: (input: Lesson) => void;
}

const useCurrentLesson = create<useCurrentLessonInput>((set) => ({
  currentLesson: {
    lessonId: 0n,
    lessonName: "",
    lessonType: 0,
    startTime: new Date(),
    endTime: new Date(),
    lessonCover: "",
    teachers: [],
  },
  setCurrentLesson: (input) => set(() => ({ currentLesson: input })),
}));

export default useCurrentLesson;
