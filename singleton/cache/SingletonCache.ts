export class SingletonCache {
  private static instance: SingletonCache | null = null;
  private cache: Map<string, any>;

  private constructor() {
    this.cache = new Map<string, any>();
  }

  public static getInstance(): SingletonCache {
    if (!SingletonCache.instance) {
      SingletonCache.instance = new SingletonCache();
    }
    return SingletonCache.instance;
  }

  set(key: string, value: any) {
    this.cache.set(key, value);
  }

  get(key: string): any {
    return this.cache.get(key);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  clear(): void {
    this.cache.clear();
  }
}
