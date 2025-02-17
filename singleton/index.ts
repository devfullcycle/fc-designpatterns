import { RegularCache } from "./cache/RegularCache";
import { SingletonCache } from "./cache/SingletonCache";
import { CacheService, ICache } from "./cacheServiceLocator/CacheService";
import { ServiceLocator } from "./cacheServiceLocator/ServiceLocator";

console.log("=== Demonstração sem singleton (RegularCache) ===");
const regularCache1 = new RegularCache();
const regularCache2 = new RegularCache();

regularCache1.set("user", "João");

console.log(regularCache1.get("user")); // João
console.log(regularCache2.get("user")); // undefined

console.log("=== Demonstração com Singleton (SingletonCache) ===");
const singletonCache1 = SingletonCache.getInstance();
const singletonCache2 = SingletonCache.getInstance();

singletonCache1.set("user", "João");

console.log(singletonCache1.get("user")); // João
console.log(singletonCache2.get("user")); // João

console.log("=== Demonstração com Singleton (ServiceLocator) ===");
const serviceLocator = ServiceLocator.getInstance();
serviceLocator.register<ICache>("cacheService", new CacheService());

const serviceLocatorCache1 = serviceLocator.get<ICache>("cacheService");
const serviceLocatorCache2 = serviceLocator.get<ICache>("cacheService");

serviceLocatorCache1.set("user", "João");

console.log(serviceLocatorCache1.get("user")); // João
console.log(serviceLocatorCache2.get("user")); // João
