import { APIS } from "@/apis/base_api";

export default async function get_unread_message_list(
  userId:bigint
)
  : Promise<Result<ChatMessage[]>> {
  const userIdString = userId.toString();
  const response = await fetch(`${APIS.get_unread_message_list}/${userIdString}`, {
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

