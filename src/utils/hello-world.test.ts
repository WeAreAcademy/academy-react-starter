import { helloWorld } from "./hello-world"

test('helloWorld returns a string, "Hello, World!"', () => {
  expect(helloWorld()).toBe("Hello, World!")
})