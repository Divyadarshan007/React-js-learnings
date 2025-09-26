import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
export const addTodo = createAsyncThunk('todos/addTodo', async (todos) => {
    const docRef = await addDoc(collection(db, 'todos',), todos);
    return {
        taskId: docRef.id,
        ...todos
    }
})

export const fetchTodo = createAsyncThunk('todos/fetchTodo', async () => {
    const { docs } = await getDocs(collection(db, 'todos'))

    const todos = docs.map((todo) => {
        return {
            taskId: todo.id,
            ...todo.data()
        }
    })
    return todos
})
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        data: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addTodo.fulfilled,((state, action) => {
            state.data.push(action.payload)
            console.log(state);
            
        }))
        builder.addCase(fetchTodo.fulfilled,((state, action) => {
            state.data = action.payload
            console.log(state);
        }))
    }
})

export default todoSlice.reducer