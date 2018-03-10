import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RechargePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var PaystackPop;

//@IonicPage()
@Component({
  selector: 'page-recharge',
  templateUrl: 'recharge.html',
})
export class RechargePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RechargePage');
  }

  public Pay () {
    this.PayWithPaystack("Emmanuel", 1000, "08091755734", "liquidcoding2009@gmail.com", "23782378ADHJ");
  }
  private PayWithPaystack (displayName : string, totalAmount : any, phoneNumber : string, emailAddress : string, transRef : string) : void {
     {
                var details : any = {}
                details.display_name = displayName;
                details.amount = totalAmount;
                details.phone_number = phoneNumber;
                details.email = emailAddress;

                if (details) {
                    var handler = PaystackPop.setup({
                        key: "pk_test_f26924c2aef46e565b8b705ebae2a6aaec52edf7",
                        email: details.email,
                        amount: details.amount + "00.00",
                        ref: transRef,
                        metadata: {
                            custom_fields: [
                                {
                                    display_name: details.display_name,
                                    variable_name: "mobile_number",
                                    value: details.phone_number
                                }
                            ]
                        },
                        callback: (response : any) => {
                          //Callback here
                        },
                        onClose: () => {
                          //Callback here
                            console.log("window closed");
                        }
                    });
                    handler.openIframe();
                }
            }
  }

}
