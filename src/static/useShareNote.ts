import { create } from "zustand";
interface useShareNote {
  shareNote: NoteInfo;
  setShareNote: (input: NoteInfo) => void;
}
const useShareNote = create<useShareNote>((set) => ({
  shareNote: {
    note:{
      noteId:-1n,
      noteContent:"",
      noteTitle:"",
      userId:-1n,
      time:new Date(),
      type:-1,
      visibility:-1
    },
    userName:"",
    cover:""
  },
  setShareNote: (input) => set(() => ({ shareNote: input })),
}));

export default useShareNote;