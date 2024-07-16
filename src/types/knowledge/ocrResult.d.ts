interface OcrResult{
  words_result:Word[],
  words_result_num:number,
  log_id:bigint
}
interface Word{
  words:string,
}