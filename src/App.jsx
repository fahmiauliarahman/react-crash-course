import React from "react";
import Albums from "./Components/Albums/main.albums";
import MainLayouts from "./Layouts/main.layouts";

const App = () => {
  return (
    <>
      <MainLayouts>
        <Albums
          title="Image API"
          description="We Fetch Images From Images API"
        />
      </MainLayouts>
    </>
  );
};

export default App;
