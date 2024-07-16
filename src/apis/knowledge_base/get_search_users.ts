import { APIS } from "@/apis/base_api";

export default async function get_search_users(
  username: string,
): Promise<Result<UserInfo[]>> {
  const response = await fetch(`${APIS.get_search_users}/${username}`, {
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

