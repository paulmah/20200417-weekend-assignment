import { TaskState, TaskTypes, ADD_TASK, REMOVE_TASK } from "./types";


export function addTask(id: number): TaskTypes {
    return {
        type: ADD_TASK,
        payload: id
    }
}

export function removeTask(id: number): TaskTypes {
    return {
        type: REMOVE_TASK,
        payload: id
    }
}