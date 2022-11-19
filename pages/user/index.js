import React from "react";

const User = () => {
  return (
    <main className="bg-gray-100 border-b-2 border-transparent h-screen grid grid-cols-1 lg:grid-cols-10 gap-6 my-12 w-lg container px-2 mx-auto">
      <div className="lg:col-start-4 lg:col-span-4">
        <aside className="">
          <div className="bg-white shadow rounded-lg p-10">
            <div className="flex flex-col gap-1 text-center items-center">
              <img
                className="h-32 w-32 bg-white p-2 rounded-full shadow mb-4"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt=""
              />
              <p className="font-semibold">John Doe</p>
              <div className="text-sm leading-normal text-gray-400 flex justify-center items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="mr-1"
                  width={16}
                  height={16}
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                Los Angeles, California
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-3">
              <div className="font-semibold text-center mx-4">
                <p className="text-black">102</p>
                <span className="text-gray-400">Posts</span>
              </div>
              <div className="font-semibold text-center mx-4">
                <p className="text-black">102</p>
                <span className="text-gray-400">Followers</span>
              </div>
              <div className="font-semibold text-center mx-4">
                <p className="text-black">102</p>
                <span className="text-gray-400">Folowing</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Post */}
        <article className="mt-5">
          <form className="bg-white shadow rounded-lg mb-6 p-4">
            <textarea
              name="message"
              placeholder="Type something..."
              className="w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
              defaultValue={""}
            />
            <footer className="flex justify-between mt-2">
              <div className="flex gap-2">
                <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </span>
                <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                </span>
                <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <polyline points="4 17 10 11 4 5" />
                    <line x1={12} y1={19} x2={20} y2={19} />
                  </svg>
                </span>
              </div>
              <button className="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg">
                Send
                <svg
                  className="ml-1"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={22} y1={2} x2={11} y2={13} />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </footer>
          </form>
        </article>
      </div>
    </main>
  );
};

export default User;
