import { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { FavoritePokemons } from '../../components/pokemon'
import { localFavorites } from '../../utils'

export const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritePokemons.length === 0 && <NoFavorites />}
      {favoritePokemons.length > 0 && (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  )
}

export default FavoritesPage
