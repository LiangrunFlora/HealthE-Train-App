import { APIS } from "@/apis/base_api";

export default async function insert_recent_file(
  recentFile:RecentFile
)
  : Promise<Result<boolean>> {
  const json = JSON.stringify({...recentFile,
    rfId:recentFile.rfId.toString(),
    userId:recentFile.userId.toString(),
    noteId:recentFile.userId.toString(),
  });
  const response = await fetch(`${APIS.insert_recent_file}`, {
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