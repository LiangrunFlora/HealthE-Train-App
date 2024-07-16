import { APIS } from "@/apis/base_api";

export default async function record_study_min({
  video_id,
  user_id,
  study_time,
}: {
  user_id: bigint;
  video_id: bigint;
  study_time: number;
}): Promise<Result<bigint>> {
  const body = JSON.stringify({
    video_id: video_id.toString(),
    user_id: user_id.toString(),
    study_time: study_time,
  });
  const response = await fetch(`${APIS.record_study_min}`, {
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
