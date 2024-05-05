import { setupWorker, SetupWorker } from 'msw/browser';
import {handlers as AffiliateHandlers} from "./Affiliate";

export const worker: SetupWorker = setupWorker (
  ...AffiliateHandlers
);