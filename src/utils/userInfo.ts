/**
 * 存储登录用户的信息
 */
export function setUserInfoForStorage(user: User) {
  localStorage.setItem("userInfo", JSON.stringify(user));
}

/**
 * 获取登录用户的信息
 */
export function getUserInfoFromStorage(): User {
  const userInfo = localStorage.getItem("userInfo");
  return userInfo
    ? JSON.parse(userInfo)
    : {
        userId: -1n,
        username: "",
        account: "",
        password: "",
        email: "",
        phone: "",
        cover: "",
      };
}

/**
 * 清除登录用户的信息
 */
export function clearUserInfoFromStorage() {
  localStorage.removeItem("userInfo");
}
