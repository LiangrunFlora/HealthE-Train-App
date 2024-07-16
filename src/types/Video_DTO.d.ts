declare interface VideoDetailDTO {
  video: Video;
  uuid: string;
  section: Section;
  checkpoint: Checkpoint;
}

declare interface VideoLiveBrowse{
  userId:string,
  userName:string,
  cover:string,
  realName:string,
  categoryId:string,
  positionId:string,
  liveTitle:string,
  livaCover:string,
  liveIntroduction:string,
  categoryName:string,
  uuid:string
}