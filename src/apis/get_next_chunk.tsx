import { APIS } from "@/apis/base_api";

export default async function get_video_chunk({
  uuid,
  startByte,
  readBytes = 1024n * 512n,
}: {
  uuid: string;
  startByte: bigint;
  readBytes?: bigint;
}): Promise<Result<string>> {
  const url: string =
    `${APIS.get_video_chunck}/${uuid}?startByte=` +
    startByte +
    "&readBytes=" +
    readBytes;
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
