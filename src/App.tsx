import { useState } from "react";
import "./App.css";
import { AppContext } from "./appContext";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskList from "./components/TaskList/TaskList";
import TodoIndex from "./pages/Todo/TodoIndex";
import PhotoIndex from "./pages/Photo/PhotoIndex";
import PostIndex from "./pages/Post/PostIndex";
import ErrorPage from "./pages/ErrorPage";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "task",
        element: <TaskList></TaskList>,
      },
      {
        path: "todo",
        element: <TodoIndex></TodoIndex>,
      },
      {
        path: "photo",
        element: <PhotoIndex></PhotoIndex>,
      },
      {
        path: "post",
        element: <PostIndex></PostIndex>,
      },
    ],
  },
]);

function App() {
  const [color, setColor] = useState("red");
  return (
    <div dir="rtl">
      <HelmetProvider>
        <AppContext.Provider value={{ color, setColor }}>
          <RouterProvider router={router} />
        </AppContext.Provider>
      </HelmetProvider>
    </div>
  );
}

export default App;
