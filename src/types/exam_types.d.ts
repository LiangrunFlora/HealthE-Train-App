// exam_question 表
type ExamQuestion = {
  eq_id: bigint;
  eq_type_id: bigint;
  note_id: bigint;
  answer: string;
  qb_id: bigint;
};

// eq_type 表
type EqType = {
  eq_type_id: bigint;
  eq_type_name: string;
};

// eq_option 表
type EqOption = {
  eq_option_id: bigint;
  eq_id: bigint;
  eq_A: string;
  eq_B: string;
  eq_C: string;
  eq_D: string;
};

// paper 表
type Paper = {
  paper_id: bigint;
  paper_title: string;
  sum_score: number;
};

// paper_link_question 表
type PaperLinkQuestion = {
  plq_id: bigint;
  paper_id: bigint;
  exam_question_id: bigint;
};

// exam 表
type Exam = {
  exam_id: bigint;
  paper_id: bigint;
  creator_id: bigint;
  lession_id: bigint;
  duration: number; // 以分钟为单位
  level: number; // 0, 1, 2
  pass_score: number;
  retry_times: number;
};

// exam_link_user 表
type ExamLinkUser = {
  elu_id: bigint;
  exam_id: bigint;
  user_id: bigint;
  score: number;
  time_cost: number; // 以秒为单位
};

// exam_eqtype_score 表
type ExamEqTypeScore = {
  ees_id: bigint;
  exam_id: bigint;
  eq_type_id: bigint;
  score: number;
};

// note_image 表
type NoteImage = {
  ni_id: bigint;
  path: string;
};

// note 表
type Note = {
  note_id: bigint;
  note_content: string;
  eq_id: bigint;
};
