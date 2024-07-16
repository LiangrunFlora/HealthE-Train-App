/**
 * 存储token
 * @param token 
 */
export function setToken(token: string): void {
    const expireTime = 60_000 * 30 // 30 minutes
    const tokenObj = {
        data: token,
        time: new Date().getTime(),
        expire: expireTime
    }
    localStorage.setItem('token', JSON.stringify(tokenObj))
}

/**
 * 获取token
 */
export function getToken() {
    const token = localStorage.getItem('token')
    if (token) {
        const tokenObj = JSON.parse(token)
        if (new Date().getTime() - tokenObj.time > tokenObj.expire) {
            localStorage.removeItem('token')
            return null
        }
        return tokenObj.data
    }
    return null
}

