const sequelize = require("../../src/db/models/index").sequelize;

describe("User", () => {
  beforeEach(done => {
    sequelize
      .sync({ force: true })
      .then(() => {
        done();
      })
      .catch(err => {
        console.log(err);
        done();
      });
  });
  describe("#create()", () => {
    it("should create a user with a valid email and password", done => {
      User.create({
        email: "test@example.com",
        password: "123456789"
      })
        .then(user => {
          expect(user.email).toBe("test@example.com");
          expect(user.id).toBe(1);
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });

    it("should not create a user with an invalid email or password", done => {
      User.create({
        email: "fake email",
        password: "111111111"
      })
        .then(user => {
          //code here won't matter it will error out
          done();
        })
        .catch(err => {
          expect(err.message).toContain(
            "Validation error: must be a valid email"
          );
          done();
        });
    });
    it("should not create a user with an email already taken", done => {
      User.create({
        email: "test@example.com",
        password: "123456789"
      })
        .then(user => {
          User.create({
            email: "test@example.com",
            password: "111111111"
          })
            .then(user => {
              //code here will also skip
              done();
            })
            .catch(err => {
              expect(err.message).toContain("Validation error");
              done();
            });
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });
});
