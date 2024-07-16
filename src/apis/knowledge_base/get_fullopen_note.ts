import { APIS } from "@/apis/base_api";

export default async function get_fullOpen_note()
  : Promise<Result<NoteInfo[]>> {
  const response = await fetch(`${APIS.get_full_open_note}`, {
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

