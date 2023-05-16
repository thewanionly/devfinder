import axios from 'axios'
import { GithubUser, GithubUserApiResponse } from 'types/githubUser'

export const GITHUB_USERS_API = 'https://api.github.com/users/'

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
}: GithubUserApiResponse): GithubUser => ({
  avatar_url,
  name: name || '',
  login,
  created_at: created_at || '',
  bio: bio || '',
  public_repos,
  followers: followers || 0,
  following: following || 0,
  location: location || '',
  blog: blog || '',
  twitter_username: twitter_username || '',
  company: company || '',
})

export const fetchUser = async (username: string): Promise<GithubUser> => {
  try {
    const response = await axios.get<GithubUserApiResponse>(`${GITHUB_USERS_API}${username}`)

    return transformResponse(response.data)
  } catch (error) {
    // Don't log error in console when in Jest testing env
    if (!process.env.JEST_WORKER_ID) {
      console.error(
        `There's a problem fetching fetching GitHub user with username of ${username}.`,
        error
      )
    }
    throw error
  }
}
