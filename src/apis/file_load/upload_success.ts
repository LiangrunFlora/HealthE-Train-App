import { APIS } from "@/apis/base_api";

export default async function upload_file_success({
  md5,
  fileName,
}: {
  fileName: string;
  md5: string;
}): Promise<Result<bigint>> {
  const body = JSON.stringify({
    fileName,
  });
  const response = await fetch(`${APIS.upload_file_success}/${md5}`, {
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
