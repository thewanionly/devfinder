import { GithubUser } from 'types/githubUser'

export const mockedUserDetails: GithubUser = {
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  name: 'The Octocat',
  login: 'octocat',
  created_at: '2011-01-25T18:44:36Z',
  bio: 'Lorem ipsum',
  public_repos: 8,
  followers: 9146,
  following: 9,
  location: 'San Francisco',
  blog: 'https://github.blog',
  twitter_username: 'test',
  company: '@github',
}

export const mockedEmptyUserDetails: GithubUser = {
  avatar_url: '',
  name: '',
  login: 'octocat2',
  created_at: '',
  bio: '',
  public_repos: 0,
  followers: 0,
  following: 0,
  location: '',
  blog: '',
  twitter_username: '',
  company: '',
}
