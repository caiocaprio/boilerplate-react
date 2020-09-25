module.exports = function(plop) {
    // create your generators here
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'controller name please'
        }],
        actions: [{
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/component.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/style.ts',
                templateFile: 'templates/style.ts.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/story.tsx',
                templateFile: 'templates/story.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/test.tsx',
                templateFile: 'templates/test.tsx.hbs'
            }
        ]
    });
};