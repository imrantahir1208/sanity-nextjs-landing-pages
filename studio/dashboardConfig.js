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
                  buildHookId: '60e0bf1674fefbde2420054f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nas74a3u',
                  apiId: '3db5dcd5-f56a-4b53-8d49-aba9855a2298'
                },
                {
                  buildHookId: '60e0bf160d8a13f45969aff4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-168q2poo',
                  apiId: '535996a2-93bb-41cb-b244-bf87bd227665'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/imrantahir1208/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-168q2poo.netlify.app', category: 'apps'}
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
