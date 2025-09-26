import { updateBunnyShield } from "./bunny-shield";
import { updateHCaptcha } from "./hcaptcha";
import { alert } from "./lib/notifications";
import { updateTurnstile } from "./turnstile";
import { updateVercelSecurity } from "./vercel";

const stages = [
  updateTurnstile,
  updateHCaptcha,
  updateBunnyShield,
  updateVercelSecurity,
  // updateAWSWAF,
];
const errors = [];

for (const stage of stages) {
  try {
    await stage();
  } catch (err) {
    await alert(
      `Error when getting ${stage.name}: ${err instanceof Error ? err.stack : err}`,
    );
    errors.push(err);
  }
}

if (errors.length) {
  if (errors.length === 1) {
    throw errors[0];
  }
  throw errors;
}
