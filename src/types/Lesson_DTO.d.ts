declare interface LessonDetailDTO {
  chapter: Chapter;
  sectionCheckVOS: SectionCheckVO[];
}

declare interface CommentDTO {
  comment: Comment;
  username: string;
  cover: string;
}

declare interface LessonBrowseInfo{
  lesson_id:string,
  lesson_name:string,
  lesson_cover:string,
  start_time:Date,
  end_time:Date,
  star:number,
  categories:string[],
  objects:string
}

declare interface LessonDetailInfoDTO {
  lesson: Lesson;
  lessonOverview: string;
  lessonObject: string;
  preliminaryKnowledge: string;
  referenceMaterial: string;
}
