import { APIS } from "@/apis/base_api";

export default async function get_comments(
  id: bigint,
): Promise<Result<CommentDTO[]>> {
  const response = await fetch(`${APIS.get_comments}/${id}`, {
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
