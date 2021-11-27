export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'leon-ho/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a26fc836e42916aa7bf8b6',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-podeaz5u',
                  apiId: '41c16bcc-5b52-4571-9db0-32246eabb649'
                },
                {
                  buildHookId: '61a26fc8b5f8fa393a02bdab',
                  title: 'Website',
                  name: 'sanity-angular-website-web-kc57224j',
                  apiId: 'ff40bbc9-1743-4eed-a599-fc2c3e55b8aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leon-ho/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-kc57224j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
