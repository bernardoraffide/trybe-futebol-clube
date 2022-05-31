interface ILoginUser {
  id: number;
  username: string;
  role: string;
  email: string;
}

interface ILoginPayload {
  email: string;
  password: string;
}

export {
  ILoginUser,
  ILoginPayload,
};
