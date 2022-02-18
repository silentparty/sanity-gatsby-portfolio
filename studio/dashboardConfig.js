export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '620f1aff97c19fc4f013cff0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-birjs5ow',
                  apiId: '9ec3a0e3-eec6-483e-a4ee-e3509e8246ac'
                },
                {
                  buildHookId: '620f1affda339dc89403d305',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gonnukik',
                  apiId: 'dfcffa54-27a6-490e-9d89-beb58c7565b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/silentparty/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gonnukik.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
