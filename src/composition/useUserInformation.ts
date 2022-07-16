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
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaXJlemEiLCJ1c2VySWQiOiJmZjVjOTA2My0xYjgzLTQ3ZGEtOGMxNy1iZDk0YjU1Y2RlM2IiLCJpc0FjdGl2ZSI6dHJ1ZSwicm9sZSI6Ik1lbWJlciIsImlhdCI6MTY1Nzk0MzY2MiwiZXhwIjoxNjU4MTE2NDYyfQ.RGGluh8VGteEdtI1EhjjTFZ-XuI7K7jTSgSqmeHBVII"
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