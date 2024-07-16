import { APIS } from "@/apis/base_api";

export default async function post_share_message(
  receiverIdList:bigint[]
)
  : Promise<Result<boolean>> {
  const json = JSON.stringify({...note,
    noteId:note.noteId.toString(),
    userId:note.userId.toString(),
  });
  const response = await fetch(`${APIS.post_answer}/${askId}`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: json,
  });

  if (!response.ok) {
    throw new Error("Network error");
  } else {
    return response.json();
  }
}