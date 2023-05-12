import { GITHUB_URL, TWIITER_URL } from './UserDetailsCard.constants'

export const formatDate = (date: string): string =>
  new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(date))

export const getValidWebsiteLink = (website: string) => {
  if (!/^https?:\/\//i.test(website)) {
    return 'https://' + website
  }
  return website
}

export const getTwitterLink = (username: string) => TWIITER_URL + username

export const getGithubLink = (username: string) => GITHUB_URL + username

export const formatUsername = (username: string) =>
  username[0] === '@' ? username : `@${username}`

export const getUsername = (username: string) =>
  username[0] === '@' ? username.slice(1) : username
