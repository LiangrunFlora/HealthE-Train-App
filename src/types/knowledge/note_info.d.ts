// 列表显示的note
interface NoteInfo {
  note:KNote,
  userName:string,
  cover:string
}
// Note的实际类型
interface KNote{
  noteId: bigint,
  noteContent: string,
  noteTitle: string,
  userId: bigint,
  time: Date,
  type: number,
  visibility: number
}
interface NoteLinkRepository{
  nlrId: bigint,
  repositoryId: bigint,
  noteId: bigint
}
//noteDTO,提交笔记关联的DTO
interface NoteDTO {
  note:KNote,
  noteLinkRepository: NoteLinkRepository
}
interface RecentNoteDTO{
  note:KNote,
  noteLinkRepository: NoteLinkRepository,
  userName:string,
  cover:string
}
