import { updateAWSWAF } from "./awswaf";
import { updateBunnyShield } from "./bunny-shield";
import { updateHCaptcha } from "./hcaptcha";
import { updateTurnstile } from "./turnstile";
import { updateVercelSecurity } from "./vercel";

await updateTurnstile();
await updateHCaptcha();
await updateBunnyShield();
await updateVercelSecurity();
await updateAWSWAF();

