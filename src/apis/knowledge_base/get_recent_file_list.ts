import { APIS } from "../../apis/base_api";

export default async function get_recent_file_list(
  userId: bigint,
): Promise<Result<RecentNoteDTO[]>> {
  const userIdString = userId.toString();
  const response = await fetch(`${APIS.get_recent_file_list}/${userIdString}`, {
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

