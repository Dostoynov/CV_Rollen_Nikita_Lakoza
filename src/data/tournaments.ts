export type TournamentLink = {
  href: string
  label?: string
}

export type Tournament = {
  name: string
  links: TournamentLink[]
}

export type TournamentCategory = {
  id: string
  title: string
  tournaments: Tournament[]
}

export const tournamentCategories: TournamentCategory[] = [
  {
    id: 'cs2',
    title: 'CS2',
    tournaments: [
      {
        name: 'BetBoom Dacha Dubai 2023: Closed Qualifier',
        links: [
          {
            href: 'https://liquipedia.net/counterstrike/BetBoom_Dacha/2023/Dubai/Qualifier',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'BetBoom Dacha Dubai 2023',
        links: [
          {
            href: 'https://liquipedia.net/counterstrike/BetBoom_Dacha/2023/Dubai',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'BetBoom Dacha Belgrade 2024: South American Qualifier',
        links: [
          {
            href: 'https://liquipedia.net/counterstrike/BetBoom_Dacha/2024/Belgrade/1/South_America',
            label: 'Qualifier #1',
          },
          {
            href: 'https://liquipedia.net/counterstrike/BetBoom_Dacha/2024/Belgrade/2/South_America',
            label: 'Qualifier #2',
          },
        ],
      },
      {
        name: 'BetBoom Dacha Belgrade #1 2024',
        links: [
          {
            href: 'https://liquipedia.net/counterstrike/BetBoom_Dacha/2024/Belgrade/1',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'BetBoom Dacha Belgrade #2 2024',
        links: [
          {
            href: 'https://liquipedia.net/counterstrike/BetBoom_Dacha/2024/Belgrade/2',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'FISSURE Playground #1',
        links: [
          {
            href: 'https://liquipedia.net/counterstrike/FISSURE/Playground/1',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'FISSURE Playground #2',
        links: [
          {
            href: 'https://liquipedia.net/counterstrike/FISSURE/Playground/2',
            label: 'Liquipedia',
          },
        ],
      },
    ],
  },
  {
    id: 'dota2',
    title: 'Dota 2',
    tournaments: [
      {
        name: 'Bali Major 2023',
        links: [
          {
            href: 'https://liquipedia.net/dota2/Bali_Major/2023',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'The International 2023 – North America Qualifier',
        links: [
          {
            href: 'https://liquipedia.net/dota2/The_International/2023/North_America',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'The International 2023 – South America Qualifier',
        links: [
          {
            href: 'https://liquipedia.net/dota2/The_International/2023/South_America',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'The International 2023 – Southeast Asia Qualifier',
        links: [
          {
            href: 'https://liquipedia.net/dota2/The_International/2023/Southeast_Asia',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'The International 2023',
        links: [
          {
            href: 'https://liquipedia.net/dota2/The_International/2023',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'BetBoom Dacha Dubai 2024',
        links: [
          {
            href: 'https://liquipedia.net/dota2/BetBoom_Dacha/Dubai/2024',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'Elite League Season 1',
        links: [
          {
            href: 'https://liquipedia.net/dota2/Elite_League/1',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'Elite League Season 2',
        links: [
          {
            href: 'https://liquipedia.net/dota2/Elite_League/2',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'Riyadh Masters 2024',
        links: [
          {
            href: 'https://liquipedia.net/dota2/Riyadh_Masters/2024',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'BetBoom Dacha Belgrade 2024',
        links: [
          {
            href: 'https://liquipedia.net/dota2/BetBoom_Dacha/Belgrade/2024',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'FISSURE Universe: Episode 2',
        links: [
          {
            href: 'https://liquipedia.net/dota2/FISSURE/Universe/2',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'FISSURE Universe: Episode 5',
        links: [
          {
            href: 'https://liquipedia.net/dota2/FISSURE/Universe/5',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'FISSURE Universe: Episode 6',
        links: [
          {
            href: 'https://liquipedia.net/dota2/FISSURE/Universe/6',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'FISSURE Special',
        links: [
          {
            href: 'https://liquipedia.net/dota2/FISSURE/Special/1',
            label: 'Liquipedia',
          },
        ],
      },
      {
        name: 'FISSURE Playground 2 CQ',
        links: [
          {
            href: 'https://liquipedia.net/dota2/FISSURE/PLAYGROUND/2/Southeast_Asia_and_China',
            label: 'SEA & China',
          },
          {
            href: 'https://liquipedia.net/dota2/FISSURE/PLAYGROUND/2/Western_Europe',
            label: 'Western Europe',
          },
          {
            href: 'https://liquipedia.net/dota2/FISSURE/PLAYGROUND/2/Americas',
            label: 'Americas',
          },
          {
            href: 'https://liquipedia.net/dota2/FISSURE/PLAYGROUND/2/Eastern_Europe',
            label: 'Eastern Europe',
          },
        ],
      },
      {
        name: 'FISSURE Playground 2',
        links: [
          {
            href: 'https://liquipedia.net/dota2/FISSURE/PLAYGROUND/2',
            label: 'Liquipedia',
          },
        ],
      },
    ],
  },
]
