import axios from 'axios';

const USER_BASE_API = "http://localhost:8080/users";

class UserService {

    // add header

    getUser() {
        return axios.get(USER_BASE_API, {});
    }

    createUser(user) {
        return axios.post(USER_BASE_API, user, {
            "Content-Type": "application/json"
        });
    }

    getEmployeeById(id) {
        return axios.get(USER_BASE_API + '/' + id);
    }

    updateEmployee(user, id) {
        return axios.put(USER_BASE_API + '/' + id, user);
    }

    deleteEmployee(employeeId) {
        return axios.delete(USER_BASE_API + '/' + employeeId);
    }
};

export default new UserService()