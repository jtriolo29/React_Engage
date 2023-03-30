Heres is the entire error message:
Test suite failed to run

Cannot find module 'headers-polyfill/lib' from 'node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/NodeClientRequest.js'

    Require stack:
      node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/NodeClientRequest.js
      node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/http.get.js
      node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/index.js
      node_modules/msw/lib/node/index.js
      src/utils/mocks/server.js
      src/__test__/ContactDetails.test.js

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:491:11)
      at Object.<anonymous> (node_modules/@mswjs/interceptors/src/interceptors/ClientRequest/NodeClientRequest.ts:5:1)

*******************************************************************

Create a manual mock for the 'headers-polyfill' module in your test configuration. In the 'src/utils/mock' directory create a file called headers-polyfill.js with the following content:

module.exports = require('headers-polyfill');

*******************************************************************

Update the Jest configuration in the package.json file to include the 'src/utils/mock' directory. Add the following line to the moduleNameMapper section:

"jest": {
  "verbose": true,
  "setupFilesAfterEnv": [
    "./jest.setup.js"
  ],
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "<rootDir>/src/utils/mocks/fileExtensionMocks.js",
    "headers-polyfill/lib": "<rootDir>/__mocks__/headers-polyfill.js"
  }
}

*******************************************************************

Update the "Displays the correct contact details" test case to use the waitFor function from @testing-library/react to wait for the data to load:

test("Displays the correct contact details", async function () {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/1"]}>
      <ContactDetails />
    </MemoryRouter>
  );

  // ACT
  const contactsName = await waitFor(() => screen.getByText("Betty Holberton"));

  // ASSERT
  expect(contactsName).toBeDefined();
});