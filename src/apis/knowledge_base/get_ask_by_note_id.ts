import { APIS } from "@/apis/base_api";

export default async function get_ask_by_note_id(
  noteId:bigint
)
  : Promise<Result<Ask>> {
  const noteIdString = noteId.toString();
  const response = await fetch(`${APIS.get_ask_by_note_id}/${noteIdString}`, {
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

