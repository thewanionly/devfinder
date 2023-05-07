interface GitHubUser {
  name: string
  login: string
}

interface HttpResponse<T> extends Response {
  parsedBody?: T
}

const GITHUB_USERS_API = 'https://api.github.com/users/'

export const fetchUser = async (username: string): Promise<GitHubUser> => {
  try {
    const response: HttpResponse<GitHubUser> = await fetch(`${GITHUB_USERS_API}${username}`)

    if (!response.ok)
      throw new Error(
        `Error fetching GitHub user with username of ${username}: ${response.statusText}`
      )

    return response.json()
  } catch (error) {
    console.error(`Error fetching GitHub user with username of ${username}: ${error}`)
    throw error
  }
}
