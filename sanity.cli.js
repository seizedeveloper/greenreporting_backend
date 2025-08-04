import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    // projectId: '9jgwqqbg',
    // dataset: 'production'
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
