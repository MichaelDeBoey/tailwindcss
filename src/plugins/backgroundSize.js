import createUtilityPlugin from '../util/createUtilityPlugin'
import { asLookupValue } from '../util/pluginUtils'

export default function () {
  return createUtilityPlugin('backgroundSize', [['bg', ['background-size']]], {
    resolveArbitraryValue: asLookupValue,
  })
}
