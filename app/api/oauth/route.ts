import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")

  const clientId = process.env.GITHUB_CLIENT_ID
  const clientSecret = process.env.GITHUB_CLIENT_SECRET

  const headersList = request.headers
  const proto = headersList.get("x-forwarded-proto") || "http"
  const host = headersList.get("host") || "localhost:3000"
  const redirectUri = `${proto}://${host}/api/oauth`

  if (code) {
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
  window.opener.postMessage('authorization:github:success:${JSON.stringify({ access_token: accessToken })}', '*');
  window.close();
</script>
</body>
</html>`

    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    })
  }

  const provider = searchParams.get("provider") || "github"
  const scope = searchParams.get("scope") || "repo"
  const state = searchParams.get("state") || ""

  const githubAuthUrl = new URL("https://github.com/login/oauth/authorize")
  githubAuthUrl.searchParams.set("client_id", clientId || "")
  githubAuthUrl.searchParams.set("redirect_uri", redirectUri)
  githubAuthUrl.searchParams.set("scope", scope)
  if (state) {
    githubAuthUrl.searchParams.set("state", state)
  }

  const githubUrl = githubAuthUrl.toString()

  const html = `<!DOCTYPE html>
<html lang="en">
<head><title>Authorizing</title></head>
<body>
<script>
  var githubUrl = ${JSON.stringify(githubUrl)};

  window.opener.postMessage('authorizing:${provider}', '*');

  function handleMessage(event) {
    if (event.data === 'authorizing:${provider}') {
      window.removeEventListener('message', handleMessage);
      window.location.href = githubUrl;
    }
  }
  window.addEventListener('message', handleMessage);

  setTimeout(function() {
    window.location.href = githubUrl;
  }, 2000);
</script>
</body>
</html>`

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  })
}
