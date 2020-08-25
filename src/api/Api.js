import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/',
});


export const usersAPI = {
    getUsers() {
        return instance.get('users?_page=1&_limit=4').then(response => {
            return response.data
        });
    },
    findUsers() {
        return instance.get('users?_page=2&_limit=4').then(response => {
            return response.data
        });
    },
    followUser(userId) {
        return instance.get(`follow/${userId}`).then(response => {
            return response.data
        });
    },
    unfollowUser(userId) {
        return instance.get(`unfollow/${userId}`).then(response => {
            return response.data
        });
    },
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get("profile/" + userId).then(response => {
            return response.data
        });
    },
    getStatus(userId) {
        return instance.get("status/" + userId).then(response => {
            return response.data
        });
    },
    updateStatus(status, userId) {
        return instance.patch(`status/${userId}`, {
            status: status,
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.data
        });
    },
    savePhoto(photoFile) {
        return instance.patch('profile/8819', {
            photos: photoFile,
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.data
        });
    }
}

export const authAPI = {
    me() {
        return axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true}).then(response => {
            return response.data
        });
    },
    login(email, password, rememberMe = false) {
        return axios.post("https://social-network.samuraijs.com/api/1.0/auth/login", {email, password, rememberMe}, {
            withCredentials: true,
            headers: {
                'API-KEY': '5db0d2c4-17ca-4341-8759-a75bd5386089'
            }
        }).then(response => {
            return response.data
        });
    },
    logout() {
        return axios.delete("https://social-network.samuraijs.com/api/1.0/auth/login", {
            withCredentials: true,
            headers: {
                'API-KEY': '5db0d2c4-17ca-4341-8759-a75bd5386089'
            }
        }).then(response => {
            return response.data
        });
    }
}



