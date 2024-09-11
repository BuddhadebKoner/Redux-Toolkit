## Redux Toolkit

### Start Date: 10th September 2024

This project demonstrates the basic setup and usage of Redux Toolkit in a React application.

### **Step 1: Setting Up the Store**

1. **Create a Store:**
   - The store is the single source of truth for the state in your application.
   - In the `src/app/store.js` file, you need to configure the store using `configureStore` from Redux Toolkit.

### **Step 2: Creating Slices (Reducers)**

1. **Create a Slice Directory:**
   - Inside the `src/features` directory, create a new folder for your feature, e.g., `todo`.
   - In the `src/features/todo/` directory, create a file named `todoSlice.js`.

2. **Define the Slice:**
   - Use `createSlice` to define a slice with the following:
     - `name`: A unique name for your slice.
     - `initialState`: The initial state for this slice.
     - `reducers`: Define the reducer functions that will handle the state changes.
   - Example reducers in `todoSlice.js`:
     - `addTodo`: Adds a new todo item to the state.
     - `removeTodo`: Removes a todo item from the state.

3. **Export the Reducers and the Root Reducer:**
   - Export the reducers (`addTodo`, `removeTodo`) for use in components.
   - Export the root reducer, which will be imported in `store.js`.

### **Step 3: Configuring the Store**

1. **Import and Configure the Store:**
   - In `src/app/store.js`, import the root reducer from `todoSlice.js`.
   - Use `configureStore` to create the store and pass in the root reducer.

### **Step 4: Connecting Components to the Store**

1. **Using `useDispatch` and `useSelector`:**
   - Import `useDispatch` and `useSelector` from `react-redux` in your component.
   - `useSelector`: Used to access state from the store.
   - `useDispatch`: Used to dispatch actions to the store.