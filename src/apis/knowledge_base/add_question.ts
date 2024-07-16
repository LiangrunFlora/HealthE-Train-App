import { APIS } from "@/apis/base_api";

export default async function add_question(
  note:KNote
)
  : Promise<Result<boolean>> {
  const json = JSON.stringify({...note,
    noteId:note.noteId.toString(),
    userId:note.userId.toString(),
  });
  const response = await fetch(`${APIS.add_question}`, {
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