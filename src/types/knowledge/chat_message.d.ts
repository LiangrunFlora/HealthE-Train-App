interface ChatMessage {
  senderUserId:string,
  senderUserInfo: UserInfo,
  receiverIdList:string[],
  message:string,
  chatNote:RecentNoteDTO,
  type:number,
  sendTime:Date
}
