import { APIS } from "@/apis/base_api";

export default async function get_answer_of_question(
  askId:bigint
)
  : Promise<Result<AnswerInfo[]>> {
  const askIdString = askId.toString();
  const response = await fetch(`${APIS.get_all_answer_of_question}/${askIdString}`, {
    method: "get",
    headers: {
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Network error");
  } else {
    return response.json();
  }
}

