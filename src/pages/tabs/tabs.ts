import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
import { RechargePage } from '../recharge/recharge';
import { PayBillsPage } from '../pay-bills/pay-bills';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root : any;
  tab2Root : any;
  tab3Root : any;

  constructor() {
    this.tab1Root =  RechargePage;
    this.tab2Root = PayBillsPage;
    this.tab3Root = ContactPage;

  }
}
