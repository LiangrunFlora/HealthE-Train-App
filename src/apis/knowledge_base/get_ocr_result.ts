import { APIS } from "@/apis/base_api";

export default async function get_ocr_result(
  fileArrayBuffer:ArrayBuffer
): Promise<Result<OcrResult>> {
  const response = await fetch(`${APIS.get_ocr_result}`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body:fileArrayBuffer
  });

  if (!response.ok) {
    throw new Error("Network error");
  } else {
    return response.json();
  }
}

