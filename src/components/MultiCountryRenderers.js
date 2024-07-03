import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { rankWith } from "@jsonforms/core";
import countryOptions from "./CountryOptions";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

const MultiCountryRenderer = ({ data, handleChange, path }) => {
  const handleCountryChange = (country) => {
    const currentData = data || [];
    const index = currentData.indexOf(country);
    if (index === -1) {
      handleChange(path, [...currentData, country]);
    } else {
      handleChange(
        path,
        currentData.filter((c) => c !== country)
      );
    }
  };

  const handleContinentChange = (continent) => {
    const currentData = data || [];
    const countries = countryOptions[continent];
    const allSelected = countries.every((country) =>
      currentData.includes(country)
    );

    if (allSelected) {
      handleChange(
        path,
        currentData.filter((c) => !countries.includes(c))
      );
    } else {
      handleChange(path, [...new Set([...currentData, ...countries])]);
    }
  };

  return (
    <FormControl component="fieldset">
      {Object.keys(countryOptions).map((continent) => (
        <div key={continent}>
          <FormLabel component="legend">
            <FormControlLabel
              control={
                <Checkbox
                  checked={countryOptions[continent].every(
                    (country) => data && data.includes(country)
                  )}
                  onChange={() => handleContinentChange(continent)}
                />
              }
              label={continent}
            />
          </FormLabel>
          <FormGroup style={{ marginLeft: "20px" }}>
            {countryOptions[continent].map((country) => (
              <FormControlLabel
                key={country}
                control={
                  <Checkbox
                    checked={data && data.includes(country)}
                    onChange={() => handleCountryChange(country)}
                  />
                }
                label={country}
              />
            ))}
          </FormGroup>
        </div>
      ))}
    </FormControl>
  );
};

const multiCountryTester = rankWith(
  3, // Rang du renderer
  (uischema, schema) => {
    return uischema.options && uischema.options.format === "multi-country";
  }
);

export default withJsonFormsControlProps(MultiCountryRenderer);
export { multiCountryTester };
