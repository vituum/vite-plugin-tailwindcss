export interface ViteUserConfigPostCSSPlugins {
    plugins?: import('postcss').Plugin[]
}

export interface ViteUserConfigPostCSS {
    postcss?: ViteUserConfigPostCSSPlugins
}

export interface ViteUserConfig {
    css?: ViteUserConfigPostCSS
}
