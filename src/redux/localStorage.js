const loadRefreshToken = () => {
  try {
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    if (refreshToken === null) {
      return undefined;
    }
    return refreshToken;
  } catch {
    return undefined;
  }
};

const saveRefreshToken = state => {
  try {
    const refreshToken = JSON.stringify(state.auth.refresh);
    localStorage.setItem("refreshToken", refreshToken);
  } catch {
    return undefined;
  }
};

export { loadRefreshToken, saveRefreshToken };
