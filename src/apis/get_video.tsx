import { APIS } from "@/apis/base_api";

export default async function get_video({
  id,
  user_id,
}: {
  id: bigint;
  user_id: bigint;
}): Promise<Result<VideoDetailDTO>> {
  const response = await fetch(`${APIS.get_video}/${id}/user/${user_id}`, {
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
