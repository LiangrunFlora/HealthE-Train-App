import { APIS } from "@/apis/base_api";
import axiosInstance from "./axiosInstance";

export function getBrowseLessonInfo(searchText:string) :Promise<Result<LessonBrowseInfo[]>>{
     return axiosInstance.request({
        url:`${APIS.get_browse_lesson_info}`,
        params: {
            searchText: searchText
        }
     })
}

export default async function getAllLiveInfoForBrowse(): Promise<Result<VideoLiveBrowse[]>> {
    const response = await fetch(`${APIS.get_browse_live_info}`, {
      method: "get",
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