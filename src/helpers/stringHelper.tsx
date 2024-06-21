import { CardInfo } from '../components/Card';

export const sortCollectionByCriteria = (collection: CardInfo[], criteria: string) => (
  collection.sort((a, b) => (
    a.player[criteria].toLowerCase() > b.player[criteria].toLowerCase())
      ? 1
      : ((b.player[criteria].toLowerCase() > a.player[criteria].toLowerCase()) ? -1 : 0)
  )
)