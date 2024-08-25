export function isPasswordValid(password) {
    console.log(password)

    let trimmed = password.trim()

if (trimmed.length >= 10) {
    return true
} else {
    return false
}
}