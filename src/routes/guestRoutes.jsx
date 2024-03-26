import GuestGuard from "../guards/GuestGuard";
import MinimumLayout from "../layout/MinimumLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const guestRoutes = [
  {
    path: "/",
    element: (
      <GuestGuard>
        <MinimumLayout />
      </GuestGuard>
    ),
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];

export default guestRoutes;
