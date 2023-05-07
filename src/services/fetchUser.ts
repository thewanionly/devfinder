import { GithubUser, GithubUserApiResponse } from 'types/githubUser'

// TODO: Update usage of .env variables to support deploying in Vercel
const GITHUB_USERS_API = 'https://api.github.com/users/'

const transformResponse = ({
  avatar_url,
  name,
  login,
  created_at,
  bio,
  public_repos,
  followers,
  following,
  location,
  blog,
  twitter_username,
  company,
}: GithubUserApiResponse): GithubUser =>
  new GithubUser(
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company
  )

export const fetchUser = async (username: string): Promise<GithubUser> => {
  try {
    const response = await fetch(`${GITHUB_USERS_API}${username}`)

    if (!response.ok) throw new Error(response.statusText)

    const responseData: GithubUserApiResponse = await response.json()

    return transformResponse(responseData)
  } catch (error) {
    console.error(
      `There's a problem fetching fetching GitHub user with username of ${username}.`,
      error
    )
    throw error
  }
}
