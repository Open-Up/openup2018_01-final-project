import * as angular from 'angular'
import NgMaterial from 'angular-material'
import NgRoute from 'angular-route'
import NgMessages from 'angular-messages'

import { GettingStartedComponent } from './getting-started/getting-started'
import { HomePageComponent } from './home-page/home-page'
import { SidebarComponent } from './sidebar/sidebar'
import { MainLayoutComponent } from './main-layout/main-layout'
import { AddPageComponent } from './add-page/add-page'
import { TabComponent } from './main-layout/tab/tab'
import { PFABComponent } from './p-fab/p-fab'
import { PInputComponent } from './p-input/p-input'
import { PSelectComponent } from './p-select/p-select'

import { BalanceService } from './balance' 
import { StoreService } from './store';
import { TimelineService } from './timeline'
import { ItemsService } from './items'
import { SidenavService } from './sidenav'
import { StartAppService } from './start-app'

angular
  .module('pockette', [NgRoute, NgMaterial, NgMessages])
  .factory('store', StoreService)
  .factory('balance', BalanceService)
  .factory('timeline', TimelineService)
  .factory('items', ItemsService)
  .factory('sidenav', SidenavService)
  .factory('startApp', StartAppService)
  .component('homePage', HomePageComponent)
  .component('addPage', AddPageComponent)
  .component('gettingStarted', GettingStartedComponent)
  .component('sidebar', SidebarComponent)
  .component('mainLayout', MainLayoutComponent)
  .component('tab', TabComponent)
  .component('pFab', PFABComponent)
  .component('pInput', PInputComponent)
  .component('pSelect', PSelectComponent)
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: `
          <main-layout>
            <home-page></home-page>
          </main-layout>
        `
      })
      .when('/add-page', {
        template: `
          <main-layout>
            <add-page></add-page>          
          </main-layout>        
        `
      })
      .when('/getting-started', {
        template: '<getting-started></getting-started>'
      })

    $locationProvider.html5Mode(true)
  })
