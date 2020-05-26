import { Injectable } from '@angular/core';
import {LocalStorageKey} from '../constants/local-storage-key';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BaseStorageService {

  constructor(private storageService: StorageService) {
  }

  // Gets an element with the given id and with the given key from local storage.
  getElementInStorage(id: number, key: LocalStorageKey): boolean {
    const element = this.storageService.get(key);
    if (element) {
      return JSON.parse(element).filter(item => item.id === id).length > 0;
    } else {
      return false;
    }
  }

  // Gets the storage which contains the given key
  getStorageOf(key: LocalStorageKey, isStringified?: boolean) {
    const storage = this.storageService.get(key);
    if (storage) {
      if (isStringified) {
        return storage;
      }
      return JSON.parse(storage);
    } else {
      return [];
    }
  }

  // Deletes an element with the given id and with the given key from local storage.
  deleteElementInStorage(id: number, key: LocalStorageKey) {
    const element = this.storageService.get(key);
    if (element) {
      const keyArray = JSON.parse(element).filter(item => item.id != id);
      this.storageService.set(key, JSON.stringify(keyArray));
    }
  }

  // Clears the storage which contains the given key
  clearStorageOf(key: LocalStorageKey) {
    this.storageService.delete(key);
  }

  // Clears the whole local storage
  clearStorage() {
    this.storageService.flush();
  }

  /*
  TODO:
   Check if sent stringifiedValue is already a string.
   Example: another boolean optional parameter isStringified which changes the control flow
  */
  setStorage(key: LocalStorageKey, stringifiedValue: any, isStringified?: boolean) {
    if (isStringified) {
      this.storageService.set(key, stringifiedValue);
    } else {
      this.storageService.set(key, JSON.stringify(stringifiedValue));
    }
  }
}
