export const ROLES = {
    ADMIN: 'admin',
    USER: 'user',
    EDITOR: 'editor',
    MODERATOR: 'moderator'
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

