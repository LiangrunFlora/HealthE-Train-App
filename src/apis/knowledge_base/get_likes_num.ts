import { APIS } from "@/apis/base_api";

export default async function get_likes_num(
  answerId:bigint
)
  : Promise<Result<number>> {
  const answerIdString = answerId.toString();
  const response = await fetch(`${APIS.get_likes_num}/${answerIdString}`, {
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

