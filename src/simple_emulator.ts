export class SimpleCPU {
  pc = 0

  r1 = 0

  memory: Uint8Array = new Uint8Array(256)

  run() {
    while (true) {
      const opcode = this.memory[this.pc]
      this.pc++

      switch (opcode) {
        case 0x01: {
          this.r1++
          break
        }
        case 0x02: {
          this.r1--
          break
        }
        case 0xff: {
          return
        }
        default: {
          console.error(`Unknown opcode: ${opcode}`)
          return
        }
      }
    }
  }
}
