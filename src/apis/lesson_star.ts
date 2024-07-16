import { APIS } from "@/apis/base_api";

export default async function star_lesson({
  lesson_id,
  user_id,
  score,
}: {
  lesson_id: bigint;
  user_id: bigint;
  score: number;
}): Promise<Result<boolean>> {
  const body = JSON.stringify({
    user_id: user_id.toString(),
    score: score,
  });
  const response = await fetch(`${APIS.star_lesson}/${lesson_id}`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: body,
  });

  if (!response.ok) {
    throw new Error("Network error");
  } else {
    return response.json();
  }
}
