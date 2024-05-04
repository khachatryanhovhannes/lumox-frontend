import instance from "../apiService";

type userLoginParams = {
  email: string;
  password: string;
};

async function userLoginWithUsernamePassword({
  email,
  password,
}: userLoginParams) {
  return await instance.post("/auth/signin", { email, password });
}

type userRegistrationParams = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

async function userRegistrationWithUsernamePassword({
  email,
  password,
  firstname,
  lastname,
}: userRegistrationParams) {
  return await instance.post("/auth/signup", {
    email,
    password,
    firstname,
    lastname,
  });
}

async function getMe() {
  return await instance.get("/users/me");
}

export {
  userLoginWithUsernamePassword,
  userRegistrationWithUsernamePassword,
  getMe,
};
