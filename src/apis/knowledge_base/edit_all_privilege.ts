import { APIS } from "@/apis/base_api";

export default async function edit_all_privilege({
  noteId,
  visibility,
  privilegeId
}:{
  noteId:bigint,
  visibility:number,
  privilegeId:bigint
})
  : Promise<Result<boolean>> {
  const privilegeIdString = privilegeId.toString();
  const noteIdString = noteId.toString();
  const response = await fetch(`${APIS.edit_all_privilege}/${noteIdString}/${visibility}/${privilegeIdString}`, {
    method: "put",
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