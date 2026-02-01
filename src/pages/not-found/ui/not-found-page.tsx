import { PATHS } from "@/shared";
import { Button } from "@/shared/ui/components/button";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className='flex min-h-screen flex-col justify-center items-center px-4 gap-y-5'>
      <h1 className='font-bold text-6xl'>
        Sorry, that’s not currently available
      </h1>
      <p className='font-semibold text-neutral-400'>
        We can’t seem to find the page you are looking for.
      </p>
      <div className='mt-5 flex flex-col gap-y-1'>
        <Button
          asChild
          className='rounded-full px-7 py-6 font-semibold cursor-pointer'
        >
          <Link to={PATHS.HOME}>Go to home</Link>
        </Button>
        <Link
          to={PATHS.HELP}
          className='px-6 py-3 font-semibold hover:underline text-center'
        >
          Help
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
