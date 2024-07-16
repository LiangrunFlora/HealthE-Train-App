interface MessageHeader {
  from: string;
  streamId: string;
  userName: string;
}

interface MessageBody {
  message: string;
  date: string; // 使用 string 类型来表示日期
}

interface LiveMessage {
  header: MessageHeader;
  body: MessageBody;
  type: number;
}
