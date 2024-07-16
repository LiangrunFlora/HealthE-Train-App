import { APIS } from "@/apis/base_api";

export default async function load_live_info({
  streamId,
}: {
  streamId: string;
}): Promise<Result<ApplyLiveDTO>> {
  const url: string = `${APIS.load_live_info}/${streamId}`;
  const response = await fetch(url, {
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
