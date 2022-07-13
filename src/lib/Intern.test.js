const Intern = require("./Intern");

describe("Intern", () => {
  const name = "Bob Smith";
  const id = "123456";
  const email = "yourname@gmail.com";
  const school = "University of Birmingham";
  const test = { name, id, email, school };

  const intern = new Intern(test);

  it("Should pass the test Name value", () => {
    expect(intern.getName()).toEqual(name);
  });
  it("Should return the test ID value", () => {
    expect(intern.getId()).toEqual(id);
  });
  it("Should return the test Email value", () => {
    expect(intern.getEmail()).toEqual(email);
  });
  it("Should return the test School value", () => {
    expect(intern.getSchool()).toEqual(school);
  });
  it("Should return Intern for getRole method", () => {
    expect(intern.getRole()).toEqual("Intern");
  });
});
