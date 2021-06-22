const AUTH_PREFIX = 'admin/auth';
export const AUTH_LOGIN = `/${AUTH_PREFIX}/login`;
export const AUTH_USER_DATA = `/${AUTH_PREFIX}/userData`;

const REPORT_PREFIX = 'admin/report';
export const GET_REPORTS = `/${REPORT_PREFIX}/`;

const BLACK_LIST_PREFIX = 'admin/blackList';
export const GET_BLACK_LIST = `/${BLACK_LIST_PREFIX}/`;
export const ADD_BLACK_LIST = `/${BLACK_LIST_PREFIX}/`;
export const DELETE_BLACK_LIST = (target: string): string => `/${BLACK_LIST_PREFIX}/?target=${target}`;

const ADMIN_PREFIX = 'admin/auth';
export const GET_ADMINS = `/${ADMIN_PREFIX}/`;
export const ADD_ADMIN = `/${ADMIN_PREFIX}/`;
export const DELETE_ADMIN = (username: string): string => `/${ADMIN_PREFIX}/?username=${username}`;
