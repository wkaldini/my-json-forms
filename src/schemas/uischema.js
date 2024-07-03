const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/name",
    },
    {
      type: "Control",
      scope: "#/properties/visitedCountries",
      options: {
        format: "multi-country",
      },
    },
  ],
};

export default uischema;
