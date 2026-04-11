const BASE_URL = import.meta.env.BASE_URL || '/'

export const resolvePublicAssetPath = (assetPath) => `${BASE_URL}${assetPath.replace(/^\//, '')}`
