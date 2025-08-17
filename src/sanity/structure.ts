import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export default (S: any) => {
  console.log('Custom structure is being loaded!');
  
  // Try a different approach - force the order with explicit positioning
  return S.list()
    .title('Content')
    .items([
      // 1. Pages
      S.listItem()
        .id('pages-section')
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

      // 2. Navigation
      S.listItem()
        .id('navbar-section')
        .title('Navigation')
        .child(
          S.documentList()
            .title('Navigation')
            .filter('_type == "navbar"')
        ),

      // 3. Footer
      S.listItem()
        .id('footer-section')
        .title('Footer')
        .child(
          S.documentList()
            .title('Footer')
            .filter('_type == "footer"')
        ),

      // 4. Content Types
      S.listItem()
        .id('content-types-section')
        .title('Content Types')
        .child(
          S.list()
            .title('Content Types')
            .items([
              S.listItem()
                .id('projects-item')
                .title('Projects')
                .child(
                  S.documentList()
                    .title('Projects')
                    .filter('_type == "project"')
                ),
              S.listItem()
                .id('skills-item')
                .title('Skills')
                .child(
                  S.documentList()
                    .title('Skills')
                    .filter('_type == "skill"')
                ),
              S.listItem()
                .id('certifications-item')
                .title('Certifications')
                .child(
                  S.documentList()
                    .title('Certifications')
                    .filter('_type == "certification"')
                ),
              S.listItem()
                .id('commendations-item')
                .title('Commendations')
                .child(
                  S.documentList()
                    .title('Commendations')
                    .filter('_type == "commendation"')
                ),
            ])
        ),
    ]);
}
