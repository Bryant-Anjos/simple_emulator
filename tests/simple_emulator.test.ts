import { assertEquals } from 'assert'

import { SimpleCPU } from '@/simple_emulator.ts'

Deno.test('The 0x01 OPCODE should increment the register r1', () => {
  const cpu = new SimpleCPU()
  cpu.memory[0] = 0x01
  cpu.memory[1] = 0xff

  assertEquals(cpu.r1, 0)

  cpu.run()

  assertEquals(cpu.r1, 1)
})

Deno.test('The 0x02 OPCODE should decrement the register r1', () => {
  const cpu = new SimpleCPU()
  cpu.memory[0] = 0x02
  cpu.memory[1] = 0xff

  assertEquals(cpu.r1, 0)

  cpu.run()

  assertEquals(cpu.r1, -1)
})

Deno.test(
  'Using both 0x01 and 0x02 OPCODEs should return the right values to r1',
  () => {
    const cpu = new SimpleCPU()
    cpu.memory[0] = 0x01
    cpu.memory[1] = 0x01
    cpu.memory[2] = 0x02
    cpu.memory[3] = 0x01
    cpu.memory[4] = 0x01
    cpu.memory[5] = 0x02
    cpu.memory[6] = 0xff

    assertEquals(cpu.r1, 0)

    cpu.run()

    assertEquals(cpu.r1, 2)
  },
)
