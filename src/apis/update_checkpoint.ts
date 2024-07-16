import { APIS } from "@/apis/base_api";

export default async function update_checkpoint({
  video_id,
  user_id,
  section_id,
}: {
  video_id: bigint;
  user_id: bigint;
  section_id: bigint;
}): Promise<Result<bigint>> {
  const body = JSON.stringify({
    video_id: video_id.toString(),
    user_id: user_id.toString(),
    section_id: section_id.toString(),
  });
  const response = await fetch(`${APIS.update_checkpoint}`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: body,
  });

  if (!response.ok) {
    throw new Error("Network error");
  } else {
    return response.json();
  }
}
