import { APIS } from "@/apis/base_api";

export default async function apply_live({
  userId,
  userName,
  cover,
  realName,
  categoryId,
  positionId,
  liveTitle,
  liveCover,
  liveIntroduction,
}: ApplyLiveDTO): Promise<Result<string>> {
  const body = JSON.stringify({
    userId: userId.toString(),
    userName,
    cover,
    realName,
    categoryId: categoryId.toString(),
    positionId: positionId.toString(),
    liveTitle,
    liveCover,
    liveIntroduction,
  });
  const response = await fetch(`${APIS.apply_live}`, {
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
