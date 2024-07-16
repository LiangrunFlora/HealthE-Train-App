import { APIS } from "@/apis/base_api";

export default async function check_file_md5(
  md5: string,
): Promise<Result<string[]>> {
  const response = await fetch(`${APIS.check_file_md5}/${md5}`, {
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
