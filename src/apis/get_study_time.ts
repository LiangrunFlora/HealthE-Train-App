import { APIS } from "@/apis/base_api";

export default async function get_study_time(
  userId: bigint,
): Promise<Result<number>> {
  const url: string = `${APIS.get_study_time}/${userId.toString()}`;
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
