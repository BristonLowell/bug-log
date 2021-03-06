import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  profile: {},
  bugs: [],
  activeBug: {},
  notes: []
})

export function clearAppState() {
  AppState.bugs = []
  AppState.notes = []
}
