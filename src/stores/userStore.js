import create from 'zustand'

const useUserStore = create((set, get) => ({
  user: {
    name: '',
    email: '',
    id: '',
    token: '',
    isLoggedIn: false,
  },
  actions: {
    onUserLogIn: userData => {
      set({
        user: {
          name: userData.name,
          email: userData.email,
          id: userData.id,
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
          id: '',
          token: '',
          isLoggedIn: false,
        },
      })
    },
    onUserUpdate: data => {
      const user = get().user
      set({
        user: {
          ...user,
          name: data.name,
          email: data.email,
        },
      })
    },
  },
}))

export const useUser = () => useUserStore(state => state.user)
export const useUserActions = () => useUserStore(state => state.actions)
