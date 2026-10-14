import { Search } from "./components/search";
import Navbar from "../../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

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
      <Search />
    </div>
  );
}
