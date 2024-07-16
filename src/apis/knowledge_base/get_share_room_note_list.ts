import { APIS } from "@/apis/base_api";

export default async function get_share_room_note_list(
  userId: bigint,
): Promise<Result<NoteInfo[]>> {
  const response = await fetch(`${APIS.get_share_room_note_list}/${userId}`, {
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

