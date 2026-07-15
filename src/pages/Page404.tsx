import { Link } from "react-router";

export default function Page404() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <img
        className="w-1/2 md:w-1/4 rounded"
        src="/images/rachel.gif"
        alt="Confused Rachel from Friends, illustrating a page not found"
      ></img>
      <div className="text-xl text-center">
        Somebody got lost, you dumb...
        <div>
          <Link
            to="/"
            className="mt-10 underline hover:line-through decoration-4 rounded-md py-2 px-4 border border-transparent text-center text-xl cursor-pointer"
          >
            Go back to the juicy part
          </Link>
        </div>
      </div>
    </div>
  );
}
