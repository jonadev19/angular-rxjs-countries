import { Component, DestroyRef, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  imports: [],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
})
export class SearchBoxComponent implements OnInit {


  private debouncer = new Subject<string>();

  @Input()
  placeholder: string = '';

  @Output()
  onDebounce = new EventEmitter<string>();

  // ✔ Angular 17–18: Se necesita DestroyRef
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300),
        takeUntilDestroyed(this.destroyRef) // 👈 Ahora sí funciona
      )
      .subscribe(value => this.onDebounce.emit(value));
  }

  onKeyPress(value: string) {
    this.debouncer.next(value);
  }
}
