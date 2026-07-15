import { Outlet } from "react-router";
import CursorDot from "./CursorDot";

export default function Layout() {
  return (
    <>
      <CursorDot />
      <Outlet />
    </>
  );
}
