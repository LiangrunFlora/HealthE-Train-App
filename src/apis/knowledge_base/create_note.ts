import { APIS } from "@/apis/base_api";

export default async function create_note(
  noteDTO:NoteDTO
)
  : Promise<Result<boolean>> {
  const json = JSON.stringify({...noteDTO,
    note:{
      ...noteDTO.note,
      noteId:noteDTO.note.noteId.toString(),
      userId:noteDTO.note.userId.toString()
    },
    noteLinkRepository:{
      ...noteDTO.noteLinkRepository,
      nlrId:noteDTO.noteLinkRepository.nlrId.toString(),
      repositoryId:noteDTO.noteLinkRepository.repositoryId.toString(),
      noteId:noteDTO.noteLinkRepository.repositoryId.toString()
    }
  });
  const response = await fetch(`${APIS.create_note}`, {
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