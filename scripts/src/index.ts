import { updateBunnyShield } from "./bunny-shield";
import { updateHCaptcha } from "./hcaptcha";
import { updateTurnstile } from "./turnstile";

await updateTurnstile();
await updateHCaptcha();
await updateBunnyShield();

