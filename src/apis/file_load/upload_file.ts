import { APIS } from "@/apis/base_api";

export default async function upload_chunk_file({
  md5,
  file,
  chunkNumer,
}: {
  md5: string;
  file: Blob;
  chunkNumer: number;
}): Promise<Result<number>> {
  const formData = new FormData();

  formData.append("md5", md5);
  formData.append("file", file);
  formData.append("chunkNumber", chunkNumer.toString());
  const response = await fetch(`${APIS.upload_file}`, {
    method: "post",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Network error");
  } else {
    return response.json();
  }
}
