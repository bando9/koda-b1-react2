function App() {
  return (
    <>
      <header className="py-3.5 mx-10 md:flex md:justify-between mb-7">
        <h2 className="font-bold text-xl mb-5">React v19.3</h2>

        <nav className="max-w-full md:flex md:flex-row items-center space-x-3 ">
          <ul className="flex flex-col md:flex-row text-sm text-[#4A5565] mt-3 space-y-2 md:space-x-4 justify-center">
            <li>
              <a href="#" className="bg-amber-200 py-1 px-3 rounded">
                Learn
              </a>
            </li>
            <li>
              <a href="#" className="bg-amber-200 ">
                Reference
              </a>
            </li>
            <li>
              <a href="#" className="bg-amber-200 ">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="bg-amber-200 ">
                Blog
              </a>
            </li>
          </ul>
          <button className="ml-2 px-5 h-10 rounded-lg cursor-pointer bg-black text-white">
            Hire Me
          </button>
        </nav>
      </header>

      <main>
        <section
          id="hero"
          className="md:grid md:grid-cols-2 mx-10 md:space-x-3 space-y-8"
        >
          <div id="hero-content" className="space-y-2">
            <h1 className="text-4xl md:text-5xl  font-bold">
              Create user interfaces from components
            </h1>
            <p className="text-normal md:text-lg font-medium">
              React lets you build user interfaces out of individual pieces
              called components. Create your own React components like{" "}
              <span className="border border-slate-100 rounded-md bg-slate-100">
                {" "}
                Thumbnail{" "}
              </span>
              ,
              <span className="border border-slate-100 rounded-md bg-slate-100">
                {" "}
                LikeButton{" "}
              </span>
              , and{" "}
              <span className="border border-slate-100 rounded-md bg-slate-100">
                {" "}
                Video{" "}
              </span>
              . Then combine them into entire screens, pages, and apps.
            </p>
          </div>
          <div id="hero-image">
            <img
              className="rounded-xl w-3/4 md:w-full"
              src="https://images.unsplash.com/photo-1687603921109-46401b201195?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="react image"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
