import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Storage from "./components/Storage/Storage";
import Sbank from "./components/Sbank/Sbank";
import Features from "./components/features/Features";
import Download from "./components/download/Download";
import Testimoni from "./components/Testimonimals/Testimoni";
import Subscribe from "./components/Subscribe";
import Try from "./components/Try";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Storage />
        <Sbank />
        <Features />
        <Download />
        <Testimoni />
        <Subscribe />
        <Try/>
      </>
    </div>
  );
}

export default App;
