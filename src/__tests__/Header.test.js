import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStroe from "../store/appStore";
import Header from "../component/Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";

  test("should load header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStroe}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //const button = screen.getByText("Login");
    //expect(button).toBeInTheDocument();
  });
