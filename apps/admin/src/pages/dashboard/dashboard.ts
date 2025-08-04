import { ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb';
import Blank from "../../components/blank/blank";
import { HttpService } from '../../services/http';
import { FlexiToastService } from 'flexi-toast';

@Component({
  imports: [Blank],
  templateUrl: './dashboard.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Dashboard implements OnInit {
  readonly #breadcrumb = inject(BreadcrumbService);
  readonly #http = inject(HttpService);
  readonly #toast = inject(FlexiToastService);

  ngOnInit(): void {
    this.#breadcrumb.setDashboard();
  }

  makeRequest() {
    this.#http.get<any>(`/rent/`, (res) => {
      this.#toast.showToast("Başarılı",res,"info");
    })
  }

}
