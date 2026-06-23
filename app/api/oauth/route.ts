import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")

  if (!code) {
    const headersList = request.headers
    const proto = headersList.get("x-forwarded-proto") || "http"
    const host = headersList.get("host") || "localhost:3000"
    const redirectUri = `${proto}://${host}/api/oauth`

    const clientId = process.env.GITHUB_CLIENT_ID
    if (!clientId) {
      return new Response("GITHUB_CLIENT_ID not configured", { status: 500 })
    }

    const state = searchParams.get("state") || ""

    const githubAuthUrl = new URL("https://github.com/login/oauth/authorize")
    githubAuthUrl.searchParams.set("client_id", clientId)
    githubAuthUrl.searchParams.set("redirect_uri", redirectUri)
    githubAuthUrl.searchParams.set("scope", "repo")
    if (state) {
      githubAuthUrl.searchParams.set("state", state)
    }

    return NextResponse.redirect(githubAuthUrl)
  }

  const clientId = process.env.GITHUB_CLIENT_ID
  const clientSecret = process.env.GITHUB_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    return new Response("GitHub OAuth credentials not configured", { status: 500 })
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  })

  const data = await tokenResponse.json()
  const accessToken = data.access_token

  if (!accessToken) {
    return new Response("Failed to obtain access token", { status: 400 })
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head><title>Login successful</title></head>
<body>
<script>
  window.opener.postMessage('token: ${accessToken}', '*');
  window.close();
</script>
</body>
</html>`

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  })
}
