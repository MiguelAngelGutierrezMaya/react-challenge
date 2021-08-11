export const FakeAuth = {
  tokenAuth: () => localStorage.getItem('_token'),
  isAuthenticated: () => {
    if (FakeAuth.tokenAuth() === null || FakeAuth.tokenAuth() === undefined) return false;
    return true
  },
  getUserProfile: () => JSON.parse(localStorage.getItem("_profile") || null),
  getToken: () => FakeAuth.tokenAuth(),
  authenticate: async ({ data }) => {
    localStorage.setItem('_token', data.phone);
    localStorage.setItem('_profile', JSON.stringify(data ? data : {}));
  },
  logout: () => {
    sessionStorage.clear();
    localStorage.clear();
  },
};
