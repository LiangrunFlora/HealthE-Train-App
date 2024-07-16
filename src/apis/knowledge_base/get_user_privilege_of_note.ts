import { APIS } from "@/apis/base_api";

export default async function get_user_privilege_of_note({
  userId,
  noteId
}:{
  userId:bigint,
  noteId:bigint
}): Promise<Result<bigint>> {
  const userIdString = userId.toString();
  const noteIdString = noteId.toString();
  const response = await fetch(`${APIS.get_user_privilege_of_note}/${userIdString}/${noteIdString}`, {
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

