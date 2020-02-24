import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PluginsProvider } from '../../providers/plugins/plugins';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public plugins: PluginsProvider) {

  }

  activity()
  {
    let data = {
      param1: "Android Activity"
    }

    this.plugins.activity(data).then(result => {
    }).catch(err => alert("Error : " + err));
  }
  camera()
  {
    let data = {
      param1: "Camera"
    }

    this.plugins.camera(data).then(result => {
    }).catch(err => alert("Error : " + err));
  }

}
