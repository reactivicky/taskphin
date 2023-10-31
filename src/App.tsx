import { useState } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-formHeight w-formWidth border rounded-formBorderRadius border-solid border-cardBorder p-formPadding flex flex-col gap-formGap">
        <div className="flex justify-between items-center">
          <h2 className="text-formHeading">Create a job</h2>
          <p className="text-pageNumber font-pageNumber">Step {page}</p>
        </div>
        {page === 1 ? <Page1 setPage={setPage} /> : <Page2 setPage={setPage} />}
      </div>
    </div>
  );
}

export default App;
