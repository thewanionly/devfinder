import styled from 'styled-components'

import { ReactComponent as CompanyIcon } from 'assets/icons/company.svg'
import { ReactComponent as LocationIcon } from 'assets/icons/location.svg'
import { ReactComponent as MoonIcon } from 'assets/icons/moon.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { ReactComponent as SunIcon } from 'assets/icons/sun.svg'
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg'
import { ReactComponent as WebsiteIcon } from 'assets/icons/website.svg'

export enum IconName {
  Company = 'company',
  Location = 'location',
  Moon = 'moon',
  Search = 'search',
  Sun = 'sun',
  Twitter = 'twitter',
  Website = 'website',
}

const IconMap = {
  [IconName.Company]: CompanyIcon,
  [IconName.Location]: LocationIcon,
  [IconName.Moon]: MoonIcon,
  [IconName.Search]: SearchIcon,
  [IconName.Sun]: SunIcon,
  [IconName.Twitter]: TwitterIcon,
  [IconName.Website]: WebsiteIcon,
} as const

type IconProps = {
  className?: string
  name: IconName
  onClick?: (event: React.MouseEvent<SVGElement>) => void
}

const S = {
  Icon: styled.div``,
}

export const Icon = ({ className = '', name, onClick }: IconProps) => {
  const IconComponent = IconMap[name]

  return (
    <S.Icon
      as={IconComponent}
      className={className}
      aria-label={`${name} icon`}
      onClick={onClick}
    />
  )
}
