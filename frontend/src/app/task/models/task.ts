
export interface MyTask {
    id?: number,
    title: string,
    text: string,
    isMark: boolean,
    date?: string,
}

export interface MyTasks extends Array<MyTask>{}


