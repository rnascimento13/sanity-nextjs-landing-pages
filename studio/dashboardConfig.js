export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61e9bc40be06638418d64e8f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ar3vn5vj',
                  apiId: 'b298f946-ba6e-482c-a2e0-6d7d2250aa4c'
                },
                {
                  buildHookId: '61e9bc40e3f641871428a13f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9y5dd68s',
                  apiId: '355f2d6d-8751-4bf5-89a0-01f55ce573fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rnascimento13/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9y5dd68s.netlify.app', category: 'apps'}
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
