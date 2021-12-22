import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react'

import AsyncStorage from '@react-native-community/async-storage'

import api from '../services/api'

interface User {
  id: string
  name: string
  email: string
  avatar_url: string
}

interface AuthState {
  token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  loading: boolean
  token: string
  signIn(credentials: SignInCredentials): Promise<void>
  signInAsGuest(): void
  signOut(): void
  updateUser(user: User): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }: any) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@KuponGo:token',
        '@KuponGo:user',
      ])

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`

        setData({ token: token[1], user: JSON.parse(user[1]) })
      }

      setLoading(false)
    }

    loadStorageData()
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    })

    const { token, user } = response.data

    await AsyncStorage.multiSet([
      ['@KuponGo:token', token],
      ['@KuponGo:user', JSON.stringify(user)],
    ])

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ token, user })
  }, [])

  const signInAsGuest = useCallback(async () => {
    await AsyncStorage.setItem('@KuponGo:user', JSON.stringify('Guest'))

    setData({
      token: '',
      user: {
        id: '0',
        name: 'Guest',
        email: '',
        avatar_url: 'https://i.pravatar.cc/300',
      },
    })
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@KuponGo:token', '@KuponGo:user'])

    setData({} as AuthState)
  }, [])

  const updateUser = useCallback(
    async (user: User) => {
      await AsyncStorage.setItem('@KuponGo:user', JSON.stringify(user))

      setData({
        token: data.token,
        user,
      })
    },
    [setData, data.token],
  )

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        loading,
        signIn,
        signInAsGuest,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
