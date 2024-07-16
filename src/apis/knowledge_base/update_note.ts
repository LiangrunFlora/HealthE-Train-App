import { APIS } from "@/apis/base_api";

export default async function update_note({
  noteId,
  knote
}:{
  noteId:bigint,
  knote:KNote
})
  : Promise<Result<boolean>> {
  const json = JSON.stringify({
      ...knote,
      noteId:knote.noteId.toString(),
      userId:knote.userId.toString()
  });
  const response = await fetch(`${APIS.create_note}/${noteId}`, {
    method: "put",
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