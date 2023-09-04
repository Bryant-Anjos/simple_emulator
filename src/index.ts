import { SimpleCPU } from '@/simple_emulator.ts'

const cpu = new SimpleCPU()

cpu.memory[0] = 0x01
cpu.memory[1] = 0x01
cpu.memory[2] = 0x02
cpu.memory[3] = 0x01
cpu.memory[4] = 0xff

cpu.run()

console.log(`Final value of r1: ${cpu.r1}`)
