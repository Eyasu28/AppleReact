// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Alert from "./Components/Alert/Alert";
import IpadPro from "./Components/IPadPro/IpadPro";
import MacBookAir from "./Components/MacBookAir/MacBookAir";
import Iphone11Pro from "./Components/IPhone11Pro/Iphone11Pro";
import Iphone11 from "./Components/IPhone11/Iphone11";
import AppleTv from "./Components/AppleTv/AppleTv";
import AppleCard from "./Components/AppleCard/AppleCard";

function App() {
  return <div>
    <Header />
    <Alert />
    <IpadPro />
    <MacBookAir />
    <Iphone11Pro />
    <Iphone11 />
    <AppleTv />
    <AppleCard />
    <Footer />

  </div>;
}

export default App;


