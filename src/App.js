import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import Home from "./components/Query/Home";
import RQSuperHero from "./components/Query/RQSuperheros";
import SuperHero from "./components/Query/SuperHero";
import RQSuperheros from "./components/Query/RQSuperheros";
import SingleHero from "./components/Query/SingleHero";
import ParallelQueries from "./components/Query/ParallelQueries";
import DynamicParallel from "./components/Query/DynamicParallel";
import DependentQueries from "./components/Query/DependentQueries";
import PaginatedQueries from "./components/Query/PaginatedQueries";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <>
        {/* <div className="main-container">
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "2rem",
          }}
        >
          My Course List
        </h1>
        <CourseForm />
        <CourseList />
      </div> */}
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <Link to="/home"> Home</Link>
                <Link to="/super-heroes"> Traditional Heroes</Link>
                <Link to="/rq-super-heroes">RQ SuperHero</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/rq-paginated" element={<PaginatedQueries />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rq-super-heroes" element={<RQSuperheros />} />
            <Route path="/super-heroes" element={<SuperHero />} />
            <Route path="/rq-parallel" element={<ParallelQueries />} />
            <Route path="/rq-super-heroes/:heroId" element={<SingleHero />} />
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallel heroIds={[1, 3]} />}
            />
            <Route
              path="/rq-dependent"
              element={<DependentQueries email="vishwas@example.com" />}
            />
          </Routes>
        </BrowserRouter>
      </>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
