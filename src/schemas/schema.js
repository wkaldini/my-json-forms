import countryOptions from "../components/CountryOptions";

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minlength: 1,
      description: "please enter your name",
    },
    visitedCountries: {
      type: "string",
    },
  },
  required: ["name"],
};

export default schema;
