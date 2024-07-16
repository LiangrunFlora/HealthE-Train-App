import { APIS } from "@/apis/base_api";

export default async function get_repository_of_note(
  noteId: bigint,
): Promise<Result<Repository>> {
  const response = await fetch(`${APIS.get_repository_of_note}/${noteId}`, {
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
