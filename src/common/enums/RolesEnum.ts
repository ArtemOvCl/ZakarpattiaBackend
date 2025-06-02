export const ROLES = {
    ADMIN: 'Admin',
    USER: 'User',
    EDITOR: 'Editor',
    MODERATOR: 'Moderator'
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

