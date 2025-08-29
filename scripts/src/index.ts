import { updateAWSWAF } from "./awswaf";
import { updateBunnyShield } from "./bunny-shield";
import { updateHCaptcha } from "./hcaptcha";
import { alert } from "./lib/notifications";
import { updateTurnstile } from "./turnstile";
import { updateVercelSecurity } from "./vercel";

try {
  await updateTurnstile();
  await updateHCaptcha();
  await updateBunnyShield();
  await updateVercelSecurity();
  await updateAWSWAF();
} catch (err) {
  await alert(`Error in main execution: ${err}`);
}
