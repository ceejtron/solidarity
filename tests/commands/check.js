import test from 'ava'
import checkCommand from '../../src/commands/solidarity'

test('Snapshot check default command', t => {
  t.snapshot(checkCommand)
})
