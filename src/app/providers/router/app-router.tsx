import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "@/pages";
import { HomePage } from "@/pages/home";
import { PATHS } from "@/shared";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<HomePage />} />
      <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
