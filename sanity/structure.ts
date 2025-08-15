import { StructureBuilder } from 'sanity/desk';

export default (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Pages
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .child(
                  S.document()
                    .schemaType('page')
                    .documentId('home-page')
                ),
              S.listItem()
                .title('All Pages')
                .child(
                  S.documentList()
                    .title('All Pages')
                    .filter('_type == "page"')
                )
            ])
        ),

      // Content Types
      S.listItem()
        .title('Content Types')
        .child(
          S.list()
            .title('Content Types')
            .items([
              S.listItem()
                .title('Projects')
                .child(
                  S.documentList()
                    .title('Projects')
                    .filter('_type == "project"')
                ),
              S.listItem()
                .title('Skills')
                .child(
                  S.documentList()
                    .title('Skills')
                    .filter('_type == "skill"')
                ),
              S.listItem()
                .title('Certifications')
                .child(
                  S.documentList()
                    .title('Certifications')
                    .filter('_type == "certification"')
                ),
              S.listItem()
                .title('Commendations')
                .child(
                  S.documentList()
                    .title('Commendations')
                    .filter('_type == "commendation"')
                ),
              S.listItem()
                .title('Profile')
                .child(
                  S.documentList()
                    .title('Profile')
                    .filter('_type == "profile"')
                )
            ])
        ),

      // Settings
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Navigation')
                .child(
                  S.documentList()
                    .title('Navigation')
                    .filter('_type == "navbar"')
                ),
              S.listItem()
                .title('Footer')
                .child(
                  S.documentList()
                    .title('Footer')
                    .filter('_type == "footer"')
                )
            ])
        )
    ]); 