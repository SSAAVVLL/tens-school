import { setupWorker, SetupWorker } from 'msw/browser';
import {handlers as AffiliateHandlers} from "./Affiliate";

const worker: SetupWorker = setupWorker(
  ...AffiliateHandlers
);

export function startWorker(): Promise<void> {
  return worker.start({
    onUnhandledRequest(req, print) {
      return; // Пропустим все запросы, не подходящие под наши хэндлеры 
    }
  }) as Promise<void>; // либа не экспортирует нужный интерфейс
}