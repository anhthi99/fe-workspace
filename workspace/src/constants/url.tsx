export const BASE = {
    NEWS: '/news',
    HOME: '/dashboard',
    PROJECT: '/project',
    WIKI: '/wiki',
    PROFILE: '/profile',
    DOCUMENT: '/doc',
    ISSUE: '/issue',
}
export const HOME = {
    // Do nothing
}

export const PROJECT = {
    DETAIL: `${BASE.PROJECT}/:id`,
    ADD: `${BASE.PROJECT}/add`
}

export const NEWS = {
    DETAIL: `${BASE.NEWS}/:id`,
    ADD : `${BASE.NEWS}/add`
}

export const WIKI = {
    DETAIL: `${BASE.WIKI}/:id`,
    ADD: `${BASE.WIKI}/add`
}

export const PROFILE = {
    DETAIL: `${BASE.PROFILE}/:id`,
    ADD: `${BASE.PROFILE}/add`,
}

export const ISSUE = {
    DETAIL: `${BASE.ISSUE}/:id`,
    ADD: `${BASE.ISSUE}/add`
}

export const DOC = {
    DETAIL: `${BASE.DOCUMENT}/:id`,
    ADD: `${BASE.DOCUMENT}/add`,
}