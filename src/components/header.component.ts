import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-header',
    standalone: true,
    template: `<div>
      <h1>{{ title }}
      <p>New Blog Post</p>`
  })
  export class HeaderComponent {
    title: string = "";
  }