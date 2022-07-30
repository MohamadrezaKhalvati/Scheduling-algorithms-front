import { fetchService } from "src/boot/fetch-swagger"
import { ref } from "vue"


const user = ref({
    id: null,
    userId: null,
    profileId: null,
    username: null,
    fullname: null,
})





function setUserJwt() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaXJlemEiLCJ1c2VySWQiOiJmZjVjOTA2My0xYjgzLTQ3ZGEtOGMxNy1iZDk0YjU1Y2RlM2IiLCJpc0FjdGl2ZSI6dHJ1ZSwicm9sZSI6Ik1lbWJlciIsImlhdCI6MTY1OTE1OTIwNywiZXhwIjoxNjU5MzMyMDA3fQ.TjHydCCe_zV4D-kcJ-d7axK9L1ct4zwvCtQJ0WgpDkQ"
    localStorage.setItem("token", token)
}

async function getUserData() {
    const { data } = await fetchService.profile.me()

    user.value = {
        id: data.data.userId,
        userId: data.data.userId,
        profileId: data.data.profileId,
        fullname: data.data.fullname,
        username: data.data.username
    }



}
export function userInformation() {
    return {
        user,
        setUserJwt,
        getUserData,
    }
}