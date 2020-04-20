import { TaskState, REMOVE_TASK, ADD_TASK, TaskTypes } from "./types";

const initialState: TaskState = {
    tasklist: [
        {
            id: 1,
            name: "clean toilet",
        },
        {
            id: 2,
            name: "cook dinner",
        }
    ]
};

export function taskReducer(state = initialState, action: TaskTypes): TaskState {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasklist: [...state.tasklist, action.payload]
            }

        case REMOVE_TASK:
            return {
                ...state,
                tasklist: state.tasks.filter(tasklist => tasklist.id !== action.payload)
            }

        default:
            return state;
    }
}