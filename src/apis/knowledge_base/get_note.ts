import { APIS } from "@/apis/base_api";

export default async function get_note(
  repositoryId: bigint,
): Promise<Result<NoteInfo[]>> {
  const response = await fetch(`${APIS.get_note}/${repositoryId}`, {
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

