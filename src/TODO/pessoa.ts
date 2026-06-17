// modern enum
const ContatoStatus = {
    Inactive: 0,
    Active: 1
} as const // makes it read-only

type ContatoStatusType = typeof ContatoStatus [keyof typeof ContatoStatus]