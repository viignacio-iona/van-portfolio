import { StructureBuilder } from 'sanity/structure';

export default (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Navbar group
      S.listItem()
        .title('Navbar')
        .child(
          S.list()
            .title('Navbar')
            .items([
              S.documentTypeListItem('navbar')
            ])
        ),
      S.divider(),
      // Main group
      S.listItem()
        .title('Main')
        .child(
          S.list()
            .title('Main Content')
            .items([
              S.documentTypeListItem('profile'),
              S.documentTypeListItem('skill'),
              S.documentTypeListItem('certification'),
              S.documentTypeListItem('project'),
              S.documentTypeListItem('commendation'),
            ])
        ),
      S.divider(),
      // Footer group
      S.listItem()
        .title('Footer')
        .child(
          S.list()
            .title('Footer')
            .items([
              S.documentTypeListItem('footer')
            ])
        ),
    ]); 