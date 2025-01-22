
export default function Page404() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <img className="w-1/2 md:w-1/4 rounded-sm" src="/images/rachel.gif" alt="404"></img>
            <div className="text-xl text-center">Somebody got lost, you dumb...
                <div>
                    <a
                        href="/"
                        className="mt-10 underline hover:line-through decoration-4 rounded-md py-2 px-4 border border-transparent text-center text-xl cursor-pointer">
                        Go back to the juicy part
                    </a>
                </div>
            </div>
        </div>
    )
}
