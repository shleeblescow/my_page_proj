import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <Router>
      <div className="App">

        <Routes>

        <Route exact path='/' element={
            <h2>hey dad look i'm not just using the new machine for tv</h2>
          }/>

          <Route exact path='/something' element={
            <h2>I'm doing something</h2>
          }/>

          <Route exact path="/pagecount" element={
            <h1>Page Count: {count}</h1>
          }/>

        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
