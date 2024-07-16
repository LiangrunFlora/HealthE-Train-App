import { APIS } from "@/apis/base_api";

export default async function get_streaming_url({
  videoId,
  libraryName,
  userName = "jellyfin",
}: {
  videoId: bigint;
  libraryName: string;
  userName?: string;
}): Promise<Result<string>> {
  const url: string =
    `${APIS.stream_url}/${videoId.toString()}/library/` +
    libraryName +
    "?userName=" +
    userName;
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
