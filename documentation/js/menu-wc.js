'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ghc documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-40277f3cf8737275c9f43b2db8b227c2"' : 'data-target="#xs-injectables-links-module-CoreModule-40277f3cf8737275c9f43b2db8b227c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-40277f3cf8737275c9f43b2db8b227c2"' :
                                        'id="xs-injectables-links-module-CoreModule-40277f3cf8737275c9f43b2db8b227c2"' }>
                                        <li class="link">
                                            <a href="injectables/GithubApiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GithubApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepoModule.html" data-type="entity-link">RepoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RepoModule-62b0d23e832fbd054852dd5dec550e3d"' : 'data-target="#xs-components-links-module-RepoModule-62b0d23e832fbd054852dd5dec550e3d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RepoModule-62b0d23e832fbd054852dd5dec550e3d"' :
                                            'id="xs-components-links-module-RepoModule-62b0d23e832fbd054852dd5dec550e3d"' }>
                                            <li class="link">
                                                <a href="components/RepoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RepoEventsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepoEventsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RepoReadmeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepoReadmeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepoRoutingModule.html" data-type="entity-link">RepoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RootModule.html" data-type="entity-link">RootModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RootModule-97810469607fdeeb14b1daf3000cbb3c"' : 'data-target="#xs-components-links-module-RootModule-97810469607fdeeb14b1daf3000cbb3c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RootModule-97810469607fdeeb14b1daf3000cbb3c"' :
                                            'id="xs-components-links-module-RootModule-97810469607fdeeb14b1daf3000cbb3c"' }>
                                            <li class="link">
                                                <a href="components/RepositorySearchInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepositorySearchInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RootComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RootComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopReposComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopReposComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RootRoutingModule.html" data-type="entity-link">RootRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-c86e9b727e8dbff1ae9a50efce6f49e9"' : 'data-target="#xs-pipes-links-module-SharedModule-c86e9b727e8dbff1ae9a50efce6f49e9"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-c86e9b727e8dbff1ae9a50efce6f49e9"' :
                                            'id="xs-pipes-links-module-SharedModule-c86e9b727e8dbff1ae9a50efce6f49e9"' }>
                                            <li class="link">
                                                <a href="pipes/LargeNumberShortenPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LargeNumberShortenPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/MarkedDownPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MarkedDownPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-f8bb6b13b7964129cad8c1a6509bae99"' : 'data-target="#xs-components-links-module-UserModule-f8bb6b13b7964129cad8c1a6509bae99"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-f8bb6b13b7964129cad8c1a6509bae99"' :
                                            'id="xs-components-links-module-UserModule-f8bb6b13b7964129cad8c1a6509bae99"' }>
                                            <li class="link">
                                                <a href="components/EventCardViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventCardViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserCardViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserCardViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserEventsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserEventsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserFollowersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserFollowersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserFollowingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserFollowingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserRecievedEventsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserRecievedEventsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserReposComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserReposComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link">UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Event.html" data-type="entity-link">Event</a>
                            </li>
                            <li class="link">
                                <a href="classes/Repo.html" data-type="entity-link">Repo</a>
                            </li>
                            <li class="link">
                                <a href="classes/RepoResponse.html" data-type="entity-link">RepoResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});