import { APIS } from "@/apis/base_api";

export default async function update_recent_file(
  recentFile:RecentFile
)
  : Promise<Result<boolean>> {
  console.log(recentFile);
  const json = JSON.stringify({
    ...recentFile,
    rfId:null ,
    userId:recentFile.userId.toString(),
    noteId:recentFile.noteId.toString(),
  });
  const response = await fetch(`${APIS.update_recent_file}`, {
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