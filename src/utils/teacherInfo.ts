/**
 * 存储教师的信息
 */
export function setTeacherInfoForStorage(teacher: TeacherDetailDTO) {
    localStorage.setItem("teacherInfo", JSON.stringify(teacher))
}

/**
 * 获取教师的信息
 */
export function getTeacherInfoFromStorage(): Teacher {
    const teacherInfo = localStorage.getItem("teacherInfo");
    return teacherInfo ? JSON.parse(teacherInfo) : {
        td_id: -1,
        user_id: -1,
        category: '',
        real_name: '',
        position: '',
        qualification: ''
    }
}

/**
 * 清除教师的信息
 */
export function clearTeacherInfoFromStorage() {
    localStorage.removeItem("teacherInfo")
}