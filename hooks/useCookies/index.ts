type UseCookiesProps =
  | {
      type: "set";
      access_token: string;
      refresh_token?: string;
    }
  | { type: "get" };

function UseCookies(params: UseCookiesProps) {
  if (params.type === "set") {
    const { access_token, refresh_token } = params;
    document.cookie = `access_token=${access_token}; path=/`;
    if (refresh_token) {
      document.cookie = `refresh_token=${refresh_token}; path=/`;
    }
  } else if (params.type === "get") {
    const cookies = document.cookie.split(";");
    const access_token = cookies.find((c) => c.startsWith("access_token="));
    const refresh_token = cookies.find((c) => c.startsWith("refresh_token="));
    return {
      access_token: access_token?.split("=")[1],
      refresh_token: refresh_token?.split("=")[1],
    };
  }
}

export default UseCookies;
