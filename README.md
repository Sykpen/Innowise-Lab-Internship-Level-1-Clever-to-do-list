# Clever To-Do List

## 1. Task

https://docs.google.com/document/d/1heFuihWrsw14bCpUdr6fla9ysqE6IrsobSMKAOpBiKA/edit

## 2. Demo

https://clever-todo-potapov-sergey.netlify.app

## 3. How to run the app

### 1. Connect to Firebase

1. Create `.env` file.
2. Open `.env.example` file and copy.
3. Set your firebase keys.

### 2. `yarn install` or `npm i`

### 3. `yarn start` or `npm run start`

#### `yarn build` or `npm run build`

## 4. Database snapshot

| Database |       |          |              |                              |
| -------- | ----- | -------- | ------------ | ---------------------------- |
| User ID: | &not; |          |              |                              |
|          | Date: | &not;    |              |                              |
|          |       | Task ID: | &not;        |                              |
|          |       |          | date:        | `string`: '2021-04-22'       |
|          |       |          | description: | `string`: 'Test description' |
|          |       |          | isDone:      | `boolen`: `true` or `false`  |
|          |       |          | title:       | `string`: 'Test title'       |

## 5. Application stack

1. React
2. Redux
3. React Router Dom
4. FireBase (Realtime Database and Authentication)
5. Moment.js
6. Material UI

## 6. Folders

- Actions - js files for actions
- Components - folder for all app components
- Constants - file with app constants
- Reducers - folder with reducers and rootReducer
- Styles - folder with global css files
- Utils - fierbase setup file
