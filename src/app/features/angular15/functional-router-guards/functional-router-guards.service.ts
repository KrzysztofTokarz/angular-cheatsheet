import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionalRouterGuardsService {
  isNavigationAllowed = true;

  constructor() { }
}
