import { APIS } from "@/apis/base_api";

export default async function edit_part_privilege({
  noteId,
  privilegeId,
  selectUserList
}:{
  noteId:bigint,
  privilegeId:bigint,
  selectUserList:UserInfo[]
})
  : Promise<Result<boolean>> {
  const privilegeIdString = privilegeId.toString();
  const noteIdString = noteId.toString();
  const json = JSON.stringify(selectUserList.map(userInfo => ({
    ...userInfo,
    userId:userInfo.userId.toString()
  })));
  const response = await fetch(`${APIS.edit_part_privilege}/${noteIdString}/${privilegeIdString}`, {
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