export interface SearchType {
    id: number;
    search: string;
  }
  
  class IndexedDBCrud {
    private db!: IDBDatabase;
    private storeName: string = 'tasks';
  
    constructor(dbName: string, version: number) {
      const request = indexedDB.open(dbName, version);
  
      request.onerror = (event) => {
        console.error('Error opening IndexedDB:', (event.target as IDBOpenDBRequest).error);
      };
  
      request.onsuccess = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
      };
  
      request.onupgradeneeded = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
      };
    }
  
    addSearch(search: SearchType): Promise<void> {
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(this.storeName, 'readwrite');
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.add(search);
  
        request.onsuccess = () => {
          ('Task added successfully');
          resolve();
        };
  
        request.onerror = (event) => {
          console.error('Error adding task:', (event.target as IDBRequest).error);
          reject();
        };
      });
    }
  
    getSearchs(): Promise<SearchType[]> {
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(this.storeName, 'readonly');
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.getAll();
  
        request.onsuccess = (event) => {
          resolve((event.target as IDBRequest).result);
        };
  
        request.onerror = (event) => {
          console.error('Error getting tasks:', (event.target as IDBRequest).error);
          reject();
        };
      });
    }
  
    updateSearch(task: SearchType): Promise<void> {
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(this.storeName, 'readwrite');
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.put(task);
  
        request.onsuccess = () => {
          ('Task updated successfully');
          resolve();
        };
  
        request.onerror = (event) => {
          console.error('Error updating task:', (event.target as IDBRequest).error);
          reject();
        };
      });
    }
  
    deleteSearch(id: number): Promise<void> {
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction(this.storeName, 'readwrite');
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.delete(id);
  
        request.onsuccess = () => {
          ('Task deleted successfully');
          resolve();
        };
  
        request.onerror = (event) => {
          console.error('Error deleting task:', (event.target as IDBRequest).error);
          reject();
        };
      });
    }
  }
  
  const indexedDBCrud = new IndexedDBCrud('myDB', 1);
  
export default indexedDBCrud;

