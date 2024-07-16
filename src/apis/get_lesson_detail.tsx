import { APIS } from "@/apis/base_api";

export default async function get_lesson_detail({
  id,
  user_id,
}: {
  id: bigint;
  user_id?: bigint | undefined;
}): Promise<Result<LessonDetailDTO[]>> {
  let url: string = `${APIS.get_lesson_detail}/${id}`;
  if (user_id) url += "?user=" + user_id;
  const response = await fetch(url, {
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
