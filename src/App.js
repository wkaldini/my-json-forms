import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import schema from "./schemas/schema";
import uischema from "./schemas/uischema";
import MultiCountryRenderer, {
  multiCountryTester,
} from "./components/MultiCountryRenderers";

const initialData = {
  name: "",
  visitedCountries: [],
};

function App() {
  const [data, setData] = useState(initialData);

  return (
    <div className="App">
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={[
          ...materialRenderers,
          { tester: multiCountryTester, renderer: MultiCountryRenderer },
        ]}
        cells={materialCells}
        onChange={({ data }) => setData(data)}
      />
    </div>
  );
}

export default App;
