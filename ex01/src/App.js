import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useMatch
  } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics/*" element={<Topics />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  const match = useMatch("/topics/*");

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.pathnameBase}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.pathnameBase}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Routes>
        <Route
          path="components"
          element={<h3>Requested topic: Components</h3>}
        />
        <Route
          path="props-v-state"
          element={<h3>Requested topic ID: Props v. State</h3>}
        />
        <Route path="/" element={<h3>Please select a topic.</h3>} />
      </Routes>
    </div>
  );
}

// function Topic() {
//   const { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
