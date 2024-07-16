import { APIS } from "@/apis/base_api";

export default async function video_jump({
  uuid,
  jumpIndexByte,
  buffersize = 1024 * 1024 * 2,
}: {
  uuid: string;
  jumpIndexByte: bigint;
  buffersize?: number;
}): Promise<Result<string>> {
  const url: string =
    `${APIS.video_jump}/${uuid}?jumpIndex=` +
    jumpIndexByte +
    "&bufferSize=" +
    buffersize;
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
