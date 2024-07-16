import { APIS } from "@/apis/base_api";

export default async function get_lesson_info(
  id: number,
): Promise<Result<Lesson[]>> {
  const response = await fetch(`${APIS.get_lesson_detail}/${id}/info`, {
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

