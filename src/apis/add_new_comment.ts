import { APIS } from "@/apis/base_api";

export default async function add_new_comment({
  commentContent,
  userId,
  sectionId,
}: {
  commentContent: string;
  userId: bigint;
  sectionId: bigint;
}): Promise<Result<Comment>> {
  const body = JSON.stringify({
    commentContent,
    userId: userId.toString(),
    sectionId: sectionId.toString(),
  });
  const response = await fetch(`${APIS.add_new_comment}`, {
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
