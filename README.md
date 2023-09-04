# Simple CPU Emulator in TypeScript: For Study Purposes Only

**🚨 Disclaimer: This project is for educational purposes and is not intended for production use.**

## About the Project
This repository contains a simplified CPU emulator implemented in TypeScript and designed to run on Deno. The emulator mimics basic CPU operations like incrementing and decrementing a register (`r1`), and it features a memory array for storing opcodes.

### Features
- Written in TypeScript
- Designed to run on Deno
- Simulates basic CPU operations (increment, decrement)
- Memory array for opcode storage
- Program Counter (pc) and a single register (r1)

### Running

```bash
deno task start
```

### Testing

```bash
deno test
```

The code in `src/index.ts` shows how to use the CPU emulator:

```typescript
// src/index.ts

import { SimpleCPU } from '@/simple_emulator.ts'

const cpu = new SimpleCPU()

cpu.memory[0] = 0x01
cpu.memory[1] = 0x01
cpu.memory[2] = 0x02
cpu.memory[3] = 0x01
cpu.memory[4] = 0xff

cpu.run()

console.log(`Final value of r1: ${cpu.r1}`)

// Output:
// Final value of r1: 2
```