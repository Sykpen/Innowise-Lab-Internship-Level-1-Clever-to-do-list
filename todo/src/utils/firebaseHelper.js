import { auth, Firebase } from "./firebase";

export const firebaseCreateNewUser = (email, password) => {
  const userCreds = auth.createUserWithEmailAndPassword(email, password);
  return userCreds;
};

export const firebaseLoginUser = (email, password) => {
  const userCreads = auth.signInWithEmailAndPassword(email, password);
  return userCreads;
};

export const firebaseUpdateUser = (updatedData, userId, date, todoId) => {
  const todoRef = Firebase.database().ref(`${userId}/${date}`);
  todoRef.child(`${todoId}`).update(updatedData);
};

export const firebaceLogoutUser = () => {
    return auth.signOut();
};

export const firebaseCreateTodo = (todoData, userId, date) => {
  const todoRef = Firebase.database().ref(`${userId}/${date}`);
  todoRef.push(todoData);
};
