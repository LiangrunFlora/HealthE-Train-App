import { APIS } from "@/apis/base_api";

export default async function get_recent_lessons(
  id: bigint,
): Promise<Result<Lesson[]>> {
  const response = await fetch(`${APIS.load_lessons}/${id}/recent`, {
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
