import { APIS } from "@/apis/base_api";

export default async function create_repository(
  repository:Repository
)
  : Promise<Result<boolean>> {
  const json = JSON.stringify({...repository,
    userId: repository.userId.toString(),
    repositoryId: repository.repositoryId.toString()
  });
  const response = await fetch(`${APIS.create_repository}`, {
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