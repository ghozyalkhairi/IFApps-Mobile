import create from 'zustand'

const useUserStore = create((set, get) => ({
  user: {
    name: '',
    email: '',
    token: '',
    isLoggedIn: false,
  },
  actions: {
    onUserLogIn: userData => {
      set({
        user: {
          name: userData.name,
          email: userData.email,
          token: userData.token,
          isLoggedIn: true,
        },
      })
    },
    onUserLogout: () => {
      set({
        user: {
          name: '',
          email: '',
          token: '',
          isLoggedIn: false,
        },
      })
    },
  },
}))

export const useUser = () => useUserStore(state => state.user)
export const useUserActions = () => useUserStore(state => state.actions)
