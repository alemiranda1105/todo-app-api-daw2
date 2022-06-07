import { UserTask } from "../interfaces/task.interface";

export const taskList = () => {
    var list: UserTask[] = [];
    for(var i = 0; i < 6; i++) {
        list.push({
            id: `${i}`,
            name: `Task ${i}`,
            description: `Description ${i}`,
            user_id: "1",
            completed: false,
            date: 'Jun 15, 2015, 21:43:11 UTC'
        })
    }
    return list;
}