import { HelpPage, HomePage, NotFoundPage } from "@/pages";
import { PATHS } from "@/shared";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<HomePage />} />
      <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={PATHS.HELP} element={<HelpPage />} />
    </Routes>
  );
};

export default AppRouter;
