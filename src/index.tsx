import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./stores/index";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <BrowserRouter>

  //   <Provider store={store}>
  //     <Header />
  //       <App />
  //     <Footer />
  //   </Provider>
  // </BrowserRouter>

  <Provider store={store}>
    <React.StrictMode>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
        <App />
        <Footer />
      </React.Suspense>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
