// user data from Github Users API response
export interface GithubUserApiResponse {
  avatar_url: string
  bio?: string
  blog?: string
  company?: string
  created_at?: string
  email?: string
  events_url: string
  followers?: number
  followers_url: string
  following?: number
  following_url: string
  gravatar_id: string
  gists_url: string
  hireable?: boolean
  html_url: string
  id: number
  location?: string
  login: string
  name?: string
  node_id: string
  organizations_url: string
  public_gists: number
  public_repos: number
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  twitter_username?: string
  type: string
  updated_at?: string
  url: string
}

// transformed user data to be used by UI
export class GithubUser {
  constructor(
    public avatar_url: string = '',
    public name: string = '',
    public login: string = '',
    public created_at: string = '',
    public bio: string = '',
    public public_repos: number = 0,
    public followers: number = 0,
    public following: number = 0,
    public location: string = '',
    public blog: string = '',
    public twitter_username: string = '',
    public company: string = ''
  ) {}
}
