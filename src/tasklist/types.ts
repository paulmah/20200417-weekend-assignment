export interface TaskState {
    taskId: number,
    selectedTask: string
}



export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

interface AddTask {
    type: typeof ADD_TASK
    payload: number
}

interface RemoveTask {
    type: typeof REMOVE_TASK
    payload: number
}

export type TaskTypes = AddTask | RemoveTask;