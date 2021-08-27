const { argv } = require('yargs');

const isDev = argv.mode === 'development';

const plugins = [
    [
        'const-enum',
        {
            transform: 'constObject',
        },
    ],
    '@babel/plugin-transform-runtime',
    //支持import 懒加载
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-async-to-generator',
    'transform-class-properties', 
];

module.exports = (api) => {
    api.cache(true);
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    corejs: 3,
                    useBuiltIns: 'usage',
                },
            ],
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic',
                },
            ],
            '@babel/preset-typescript',
        ],
        plugins: isDev ? [...plugins, 'react-refresh/babel'] : [...plugins],
    };
};
