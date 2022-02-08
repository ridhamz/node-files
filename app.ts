type User = {
  name: string;
  age: number;
};

type Rights = {
  write: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
};
type jjj = {
  kk: boolean;
};

// combine the two types
type UserWithRights = User & Rights & jjj;

const user1: UserWithRights = {
  name: "mz",
  age: 24,
  write: true,
  read: true,
  update: false,
  delete: false,
  kk: true
};
