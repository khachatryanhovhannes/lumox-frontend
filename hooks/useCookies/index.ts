type UseCookiesProps =
  | {
      type: "set";
      access_token: string;
      refresh_token?: string;
    }
  | { type: "get" }
  | { type: "delete" };

function UseCookies(params: UseCookiesProps) {
  const cookies = document.cookie.split(";");

  if (params.type === "set") {
    const { access_token, refresh_token } = params;
    document.cookie = `access_token=${access_token}; path=/`;
    if (refresh_token) {
      document.cookie = `refresh_token=${refresh_token}; path=/`;
    }
  } else if (params.type === "get") {
    const accessCookie = cookies.find((c) =>
      c.trim().startsWith("access_token=")
    );
    const refreshCookie = cookies.find((c) =>
      c.trim().startsWith("refresh_token=")
    );

    return {
      access_token: accessCookie ? accessCookie.split("=")[1] : undefined,
      refresh_token: refreshCookie ? refreshCookie.split("=")[1] : undefined,
    };
  } else if (params.type === "delete") {
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}

export default UseCookies;
