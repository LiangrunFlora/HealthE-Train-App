import { APIS } from "@/apis/base_api";

export default async function get_user(
  id: bigint,
): Promise<Result<User[]>> {
  const response = await fetch(`${APIS.get_user}/${id}`, {
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
