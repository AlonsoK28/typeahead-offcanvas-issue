import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

// 3-party
import typeahead from 'typeahead-standalone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'typeahead-offcanvas-issue';
  @ViewChild('myTypeaheadInput') typeaheadInput!: ElementRef<any>;

  @HostListener('show.bs.offcanvas')
  onShowOffcanvas() {
    this.setFocusIntoSearchField();
  }
  @HostListener('shown.bs.offcanvas')
  onShownOffcanvas() {
    this.setFocusIntoSearchField();
  }
  @HostListener('hide.bs.offcanvas')
  onHideOffcanvas() {
    this.resetTypeaheadInput();
  }

  ngOnInit(): void {
    this.initTypeahead();
  }

  initTypeahead() {
    const typeaheadElId = "exampleFormControlInput1";
    const inputElement = document.getElementById(typeaheadElId) as HTMLInputElement;

    const instance = typeahead({
      input: inputElement,
      source: {
        local: ['Grey', 'gr', 'grid', 'grow', 'green', 'gre1', 'gred', 'Brown', 'Black', 'Blue'],
      },
      debounceRemote: 330,
      highlight: true,
      diacritics: true,
      hint: false
    });
  }

  setFocusIntoSearchField() {
    const typeaheadElId = "exampleFormControlInput1";
    const $inputSel = document.getElementById(typeaheadElId) as HTMLInputElement;
    $inputSel.focus();
  }

  resetTypeaheadInput() {
    this.typeaheadInput.nativeElement.value = '';
  }
}
