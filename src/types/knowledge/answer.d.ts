interface Answer{
  answerId:bigint,
  noteId:bigint,
  askId:bigint,
  likes:number
}

interface AnswerInfo{
  answer:Answer,
  noteInfoDTO:NoteInfo
}