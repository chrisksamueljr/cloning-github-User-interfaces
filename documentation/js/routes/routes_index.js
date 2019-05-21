var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"RootModule","children":[{"name":"routes","filename":"src/root/root-routing.module.ts","module":"RootRoutingModule","children":[{"path":"","component":"TopReposComponent"},{"path":"user","loadChildren":"./user/user.module#UserModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/root/user/user-routing.module.ts","module":"UserRoutingModule","children":[{"path":":login","component":"UserComponent","children":[{"path":"","component":"UserEventsComponent"},{"path":"recieved-events","component":"UserRecievedEventsComponent"},{"path":"followers","component":"UserFollowersComponent"},{"path":"following","component":"UserFollowingComponent"},{"path":"repos","component":"UserReposComponent"}]}],"kind":"module"}],"module":"UserModule"}]},{"path":"repo","loadChildren":"./repo/repo.module#RepoModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/root/repo/repo-routing.module.ts","module":"RepoRoutingModule","children":[{"path":":owner/:name","component":"RepoComponent","children":[{"path":"","component":"RepoReadmeComponent"},{"path":"events","component":"RepoEventsComponent"}]}],"kind":"module"}],"module":"RepoModule"}]}],"kind":"module"}]}
