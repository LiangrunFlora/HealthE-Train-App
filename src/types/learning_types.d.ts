// Section
declare interface Section {
  sectionId: bigint;
  videoId: bigint;
  sectionTitle: string;
  chapterId: bigint;
  sectionOrder: number;
}

// Chapter
declare interface Chapter {
  chapterId: bigint;
  lessonId: bigint;
  chapterOrder: number;
  chapterTitle: string;
}

// Comment
declare interface Comment {
  commentId: bigint;
  commentContent: string;
  userId?: bigint;
  time: Date;
  sectionId: bigint;
  username: string;
  cover: string;
}

// CommentNote
declare interface CommentNote {
  cnId: bigint;
  noteId?: bigint;
  sectionId: bigint;
}

// Lesson
declare interface Lesson {
  lessonId: bigint;
  lessonName: string;
  lessonType: 0 | 1; // 0 for 公开课, 1 for 必修
  startTime: Date;
  endTime: Date;
  lessonCover: string;
  teachers: string[];
}

// LessonAnnouncement
interface LessonAnnouncement {
  laId: bigint;
  lessonId: bigint;
  announcementTitle: string;
  announcementContent: string;
  publishTime: Date;
}

// LessonLinkTeacher
declare interface LessonLinkTeacher {
  lltId: bigint;
  lessonId: bigint;
  tdId?: bigint;
}

// LessonLinkCategory
declare interface LessonLinkCategory {
  llcId: bigint;
  lessonId: bigint;
  categoryId?: bigint;
}

// Quiz
declare interface Quiz {
  quizId: bigint;
  chapterId: bigint;
  paperId?: bigint;
}

// Checkpoint
declare interface Checkpoint {
  checkpointId: bigint;
  userId?: bigint;
  sectionId: bigint;
  chapterId: bigint;
  lessonId: bigint;
}

// Star
declare interface Star {
  starId: bigint;
  userId?: bigint;
  lessonId: bigint;
  score: number; // 1-5
}

// RecentLessons
declare interface RecentLessons {
  recentLessonsId: bigint;
  userId?: bigint;
  lessonId: bigint;
  time: Date;
}

declare interface LessonLinkUser {
  lluId: bigint;
  lessonId: bigint;
  userId: bigint;
}
