import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'My content' }];

  onServerAdded(data: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: data.serverName,
      content: data.serverContent
    });
  }

  onBlueprintAdded(data: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: data.serverName,
      content: data.serverContent
    });
  }

  onChanges() {
    this.serverElements[0].name = 'changed';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
