import { APIS } from "@/apis/base_api";

export default async function add_answer_likes(
  answerId:bigint
)
  : Promise<Result<boolean>> {
  const answerIdString = answerId.toString();
  const response = await fetch(`${APIS.add_answer_likes}/${answerIdString}`, {
    method: "put",
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