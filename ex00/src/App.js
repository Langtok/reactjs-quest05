// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         {/* Navigation Menu */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Define Routes */}
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // Home Page Component
// function Home() {
//   return <h2>Home</h2>;
// }

// // About Page Component
// function About() {
//   return <h2>About</h2>;
// }

// // Users Page Component
// function Users() {
//   return <h2>Users</h2>;
// }



import React from "react";
import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home Page Component
function Home() {
  return <h2>Home</h2>;
}

// About Page Component
function About() {
  return <h2>About</h2>;
}

// Users Page Component
function Users() {
  return <h2>Users</h2>;
}
