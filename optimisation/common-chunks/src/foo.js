import _ from 'lodash'

export default function foo() {
  console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
}
