interface User{
  userId:bigint,
  account:string,
  password:string,
  username:string,
  email:string,
  phone:string,
  cover:string
}

interface UserInfo{
  userId:bigint,
  account:string,
  username:string,
  cover:string
}

interface Teacher {
  td_id: bigint;
  user_id: bigint;
  category_id: bigint;
  real_name : string;
  position_id : bigint;
  qualification_id : bigint;
}

interface TeacherDetailDTO {
  td_id: bigint;
  user_id: bigint;
  category: string,
  real_name : string;
  position : string;
  qualification : string;
}