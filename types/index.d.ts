export interface PluginUserConfig {
    import?: import('@vituum/vite-plugin-tailwindcss/types/postcssImport.d.ts').AtImportOptions
    nesting?: import('postcss-nesting').pluginOptions
    customMedia?: import('postcss-custom-media').pluginOptions
    autoprefixer?: import('autoprefixer').Options
    tailwindcss?: import('tailwindcss').Config
}

export default function plugin(options?: PluginUserConfig) : import('vite').Plugin
