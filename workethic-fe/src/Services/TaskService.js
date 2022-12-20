import axios from "axios";

class TaskService {

    getPriorities() {
        return axios.get("http://localhost:8080/tasks/priorities");
    }

    postTask(task) {
        return axios.post("http://localhost:8080/tasks", task);
    }
}
export default TaskService;