declare interface Result<T> {
  status: string;
  message: string;
  data: T;
}