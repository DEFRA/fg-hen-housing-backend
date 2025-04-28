import { health } from '../routes/health.js'
import { example } from '../routes/example.js'
import { actions } from '../routes/actions.js'

const router = {
  plugin: {
    name: 'router',
    register: (server, _options) => {
      server.route([health].concat(example, actions))
    }
  }
}

export { router }
